import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useRef, useState } from 'react';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';

const CustomDataTable = ({
    data,
    selectedColumns,
    columnsConfig,
    actionMenu,
    onRowSelect,
    onRowUnselect,
    handleAction,
    handleFilterClick,
    dataTableRef,
}) => {
    const [activeRowMenu, setActiveRowMenu] = useState(null);

    const showMenu = (event, rowData) => {
        setActiveRowMenu(rowData);
        menuRef.current.show(event);
    };

    const onHideMenu = () => {
        setActiveRowMenu(null);
    };

    const menuRef = useRef(null);

    const menuItems = actionMenu.map((menuItem) => ({
        label: menuItem.label,
        icon: menuItem.icon,
        command: () => {
            handleAction(menuItem.action, activeRowMenu);
            onHideMenu();
        },
    }));

    const actionBodyTemplate = (rowData) => {
        return (
            <div className="action-buttons">
                <Button
                    icon="pi pi-ellipsis-v"
                    className="p-button-rounded p-button-secondary p-button-text"
                    onClick={(e) => showMenu(e, rowData)}
                />
                <Menu model={menuItems} popup ref={menuRef} onHide={onHideMenu} />
            </div>
        );
    };

    return (
        <div>
            <DataTable
                ref={dataTableRef}
                stripedRows
                size="small"
                value={data}
                paginator
                rows={10}
                rowsPerPageOptions={[10, 25, 50]}
                selectionMode="single"
                onRowSelect={onRowSelect}
                onRowUnselect={onRowUnselect}
                emptyMessage="No records found"
            >
                {columnsConfig.map(
                    (col) =>
                        selectedColumns.includes(col.field) && (
                            <Column
                                className={!col.isSelected && 'd-none'}
                                key={col.field}
                                field={col.field}
                                header={col.header}
                                body={col.body || ((rowData) => rowData[col.field])}
                                filter={handleFilterClick}
                                filterPlaceholder={`Search By ${col.header}`}
                                filterField={col.field}
                            />
                        )
                )}
                <Column header="Options" body={actionBodyTemplate} />
            </DataTable>
        </div>
    );
};
export default CustomDataTable;
