import React, { useEffect, useRef, useState } from 'react';
import PlainLayout from '../../components/layouts/PlainLayout';
import TabMenuContainer from '../../components/tabmenu/TabMenuContainer';
import resourceTabs from './config/resourceTabs';
import resourceColumnConfig from '../resources/config/resourceColumnConfig';
import { initFilters } from '../../components/filterUtils/tableDataFilterUtils';
import DataExportModal from '../../components/exportUtils/DataExportModal';
import { resourceData } from '../resources/config/resourceData';
import EntityDashboardCounts from '../../components/dashboard/EntityDashboardCounts';
import resourceDashboardCounts from './config/resourceDashboardCounts';
import resourceSteps from './config/resourceWizardSteps';
import WizardComponent from '../../components/viewers/WizardComponent';
import axios from 'axios';
import ColumnFilterMenu from '../../components/filterUtils/ColumnFilterMenu';
import { useDispatch } from 'react-redux';
import { setCurrentPageName } from '../../redux/actions/headerTitleActions';

const ResourceListPage = () => {
    const columnFilterButtonRef = useRef(null);
    const dataTableRef = useRef(null);
    const dispatch = useDispatch();

    const [columnConfig, setColumnConfig] = useState(resourceColumnConfig);
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [handleFilterClick, setHandleFilterClick] = useState(false);

    const [showExportModal, setShowExportModal] = useState(false);

    useEffect(()=>{
        dispatch(setCurrentPageName('Resource'));
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

    const exportResourceActionHandler = () => {
        setShowExportModal(true);
    };

    const columnFilterResourceActionHandler = (event) => {
        columnFilterButtonRef.current.toggle(event);
        event.stopPropagation();
    };
    const filterResourceActionHandler = () => {
        setHandleFilterClick(!handleFilterClick);
    };

    const addResourceActionHandler = () => {
        setSidebarVisible(true);
    };

    const closeAddResourceActionHandler = () => {
        setSidebarVisible(false);
    };

    const actionButtons = [
        {
            label: 'Export',
            icon: 'pi pi-fw pi-download',
            actionHandler: exportResourceActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-server',
            actionHandler: columnFilterResourceActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-filter',
            actionHandler: filterResourceActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-plus',
            actionHandler: addResourceActionHandler,
        },
    ];
    // function to handle the API call
    const handleApiCall = async (formData) => {
        try {
            const response = await axios.post(
                'http://40.114.32.67:8080/recruit-0.0.1-SNAPSHOT/api/raves/v1/worker',
                formData
            );

            if (response.status === 200) {
                console.log('API call successful:', response.data);
            } else {
                console.error('API call failed:', response.statusText);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <PlainLayout>
            <DataExportModal
                showExportModal={showExportModal}
                setShowExportModal={setShowExportModal}
                columnConfig={columnConfig}
                exportData={resourceData}
                dataTableRef={dataTableRef}
            />
            <ColumnFilterMenu
                columnConfig={columnConfig}
                setColumnConfig={setColumnConfig}
                handleCheckboxChange={handleCheckboxChange}
                columnFilterButtonRef={columnFilterButtonRef}
            />
            {/* <WizardComponent
                title="Create Resource"
                visible={sidebarVisible}
                onHide={closeAddTenantActionHandler}
                steps={resourceSteps}
            /> */}
            <WizardComponent
                title="Create Resource"
                visible={sidebarVisible}
                onHide={closeAddResourceActionHandler}
                steps={resourceSteps}
                handleApiCall={handleApiCall} // API call function to the WizardComponent
            />

            <EntityDashboardCounts widgetList={resourceDashboardCounts} />

            <TabMenuContainer
                tabItems={resourceTabs({ columnConfig, handleFilterClick, dataTableRef })}
                actionButtons={actionButtons}
            />
        </PlainLayout>
    );
};

export default ResourceListPage;
