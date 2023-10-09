import React, { useEffect, useRef, useState } from 'react'
import PlainLayout from '../../components/layouts/PlainLayout'
import TabMenuContainer from '../../components/tabmenu/TabMenuContainer'
import WizardComponent from '../../components/viewers/WizardComponent';
import timesheetTabs from './config/timesheetTabs';
import EntityDashboardCounts from '../../components/dashboard/EntityDashboardCounts';
import timesheetDashboardCount from './config/timesheetDashboardCount';
import timesheetColumnConfig from './config/timesheetColumnConfig';
import { initFilters } from '../../components/filterUtils/tableDataFilterUtils';
import { Menu } from 'primereact/menu';
import { columnFilterUtils } from '../../components/filterUtils/columnFilterUtils';
import DataExportModal from '../../components/exportUtils/DataExportModal';
import { timesheetData } from './config/timesheetData';
import AddTimesheetSteps from './container/AddTimesheetSteps';
import { useDispatch } from 'react-redux';
import { setCurrentPageName } from '../../redux/actions/headerTitleActions';

function TimesheetListPage() {
    const columnFilterButtonRef = useRef(null);
    const dataTableRef = useRef(null);
    const dispatch = useDispatch();

    const [columnConfig, setColumnConfig] = useState(timesheetColumnConfig);
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [handleFilterClick, setHandleFilterClick] = useState(false);
    const [showExportModal, setShowExportModal] = useState(false);
    
    useEffect(()=>{
        dispatch(setCurrentPageName('Timesheet'));
    },[dispatch])

    useEffect(() => {
        if (columnConfig.length > 0) {
            initFilters(columnConfig);
        }
    }, [columnConfig]);

    const handleCheckboxChange = (event) => {
        const updatedColumn = columnConfig?.map((col) => {
            if (col.field === event.target.name) {
                col.isSelected = !col.isSelected;
                col.isChecked = !col.isChecked;
            }
            return col;
        });
        setColumnConfig(updatedColumn);
    };

    const exportTimesheetActionHandler = () => {
        setShowExportModal(true);
    };

    const columnFilterTimesheetActionHandler = (event) => {
        columnFilterButtonRef.current.toggle(event);
        event.stopPropagation();
    };
    const filterTimesheetActionHandler = () => {
        setHandleFilterClick(!handleFilterClick);
    };


    const addTimesheettActionHandler = () => {
        setSidebarVisible(true);
    };

    const closeAddTimesheetActionHandler = () => {
        setSidebarVisible(false);
    };

    const actionButtons = [
        {
            label: 'Export',
            icon: 'pi pi-fw pi-download',
            actionHandler: exportTimesheetActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-server',
            actionHandler: columnFilterTimesheetActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-filter',
            actionHandler: filterTimesheetActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-plus',
            actionHandler: addTimesheettActionHandler,
        },
    ];

    return (
        <PlainLayout>
             <DataExportModal
                showExportModal={showExportModal}
                setShowExportModal={setShowExportModal}
                columnConfig={columnConfig}
                exportData={timesheetData}
                dataTableRef={dataTableRef}
            />
            <Menu
                model={columnFilterUtils({
                    columnConfig,
                    setColumnConfig,
                    handleCheckboxChange,
                })}
                popup
                ref={columnFilterButtonRef}
                id="popup_menu_right"
                popupAlignment="right"
                className="p-2"
            />
            <WizardComponent
                title="Add Timesheet"
                visible={sidebarVisible}
                onHide={closeAddTimesheetActionHandler}
                steps={AddTimesheetSteps}
            />

            <EntityDashboardCounts widgetList={timesheetDashboardCount} />
            <TabMenuContainer 
            tabItems={timesheetTabs({ columnConfig, handleFilterClick })}
            actionButtons={actionButtons} 
            />

        </PlainLayout>
    )
}

export default TimesheetListPage