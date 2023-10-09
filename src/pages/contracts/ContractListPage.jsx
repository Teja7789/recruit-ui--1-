import React, { useEffect, useRef, useState } from 'react'
import PlainLayout from '../../components/layouts/PlainLayout'
import TabMenuContainer from '../../components/tabmenu/TabMenuContainer'
import WizardComponent from '../../components/viewers/WizardComponent';
import contractTabs from './config/contractTabs';
import EntityDashboardCounts from "../../components/dashboard/EntityDashboardCounts"
import contractDashboardCount from './config/contractDashboardCount';
import contractColumnConfig from './config/contractColumnConfig';
import { initFilters } from '../../components/filterUtils/tableDataFilterUtils';
import { Menu } from 'primereact/menu';
import { columnFilterUtils } from '../../components/filterUtils/columnFilterUtils';
import AddTimesheetSteps from '../timesheet/container/AddTimesheetSteps';
import DataExportModal from '../../components/exportUtils/DataExportModal';
import { contractData } from './config/contractData';
import { useDispatch } from 'react-redux';
import { setCurrentPageName } from '../../redux/actions/headerTitleActions';

function ContractListPage() {
    const columnFilterButtonRef = useRef(null);
    const dataTableRef = useRef(null);
    const dispatch = useDispatch();

    const [columnConfig, setColumnConfig] = useState(contractColumnConfig);
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [handleFilterClick, setHandleFilterClick] = useState(false);
    const [showExportModal, setShowExportModal] = useState(false);

    useEffect(()=>{
        dispatch(setCurrentPageName('Contract'));
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


    const exportContractActionHandler = () => {
        setShowExportModal(true);
    };

    const columnFilterContractActionHandler = (event) => {
        columnFilterButtonRef.current.toggle(event);
        event.stopPropagation();
    };

    const filterContractActionHandler = () => {
        setHandleFilterClick(!handleFilterClick);
    };

    const addContractActionHandler = () => {
        setSidebarVisible(true);
    };

    const closeAddContractActionHandler = () => {
        setSidebarVisible(false);
    };

    const actionButtons = [
        {
            label: 'Export',
            icon: 'pi pi-fw pi-download',
            actionHandler: exportContractActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-server',
            actionHandler: columnFilterContractActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-filter',
            actionHandler: filterContractActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-plus',
            actionHandler: addContractActionHandler,
        },
    ];

    return (
        <PlainLayout>
             <DataExportModal
                showExportModal={showExportModal}
                setShowExportModal={setShowExportModal}
                columnConfig={columnConfig}
                exportData={contractData}
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
                title="Add Contract"
                visible={sidebarVisible}
                onHide={closeAddContractActionHandler}
                // steps={AddTimesheetSteps}
                steps={AddTimesheetSteps}
            />
            <EntityDashboardCounts widgetList={contractDashboardCount} />
            <TabMenuContainer tabItems={contractTabs({ columnConfig, handleFilterClick })}
                actionButtons={actionButtons} />

        </PlainLayout>
    )
}

export default ContractListPage