import React, { useEffect, useRef, useState } from 'react';
import PlainLayout from '../../components/layouts/PlainLayout';
import TabMenuContainer from '../../components/tabmenu/TabMenuContainer';
import companiesTabs from './config/companiesTabs';
import WizardComponent from '../../components/viewers/WizardComponent';
import companiesWizardSteps from './config/companiesWizardSteps';
import EntityDashboardCounts from '../../components/dashboard/EntityDashboardCounts'
import companiesDashboardCounts from './config/companiesDashboardCounts';
import { columnFilterUtils } from '../../components/filterUtils/columnFilterUtils';
import { Menu } from 'primereact/menu';
import companiesColumnConfig from './config/companiesColumnConfig';
import { initFilters } from '../../components/filterUtils/tableDataFilterUtils';
import axios from 'axios';
import { companiesData } from './config/companiesData';
import DataExportModal from '../../components/exportUtils/DataExportModal';
import { useDispatch } from 'react-redux';
import { setCurrentPageName } from '../../redux/actions/headerTitleActions';

const CompaniesListPage = () => {
    const dispatch = useDispatch();
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const columnFilterButtonRef = useRef(null);
    const dataTableRef = useRef(null);
    const [columnConfig, setColumnConfig] = useState(companiesColumnConfig);
    const [handleFilterClick, setHandleFilterClick] = useState(false);
    const [showExportModal, setShowExportModal] = useState(false);

    useEffect(() => {
        dispatch(setCurrentPageName('Companies'));
    }, [dispatch])

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

    const exportCompaniesActionHandler = () => {
        setShowExportModal(true);
    };

    const columnFilterCompaniesActionHandler = (event) => {
        columnFilterButtonRef.current.toggle(event);
        event.stopPropagation();
    };

    const filterCompaniesActionHandler = () => {
        setHandleFilterClick(!handleFilterClick);
    };

    const addCompaniesActionHandler = () => {
        setSidebarVisible(true);
    };

    const closeAddCompaniesActionHandler = () => {
        setSidebarVisible(false);
    };

    const actionButtons = [
        {
            label: 'Export',
            icon: 'pi pi-fw pi-download',
            actionHandler: exportCompaniesActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-server',
            actionHandler: columnFilterCompaniesActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-filter',
            actionHandler: filterCompaniesActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-plus',
            actionHandler: addCompaniesActionHandler,
        },
    ];


    const transformDataForApi = (formData) => {
        // Destructure values from formData
        const {
            name,
            phoneNumber,
            fax,
            description,
            taxId,
            code,
            statusCode,
            stateOfIncorporation,
            taxClassification,
            createdDt,
            // orgDomains = [{}],
            // orgCommunications = [{}],
            // organizationDocuments = [{}],
        } = formData;

        // Destructure values from orgCommunications and orgDomains
        // const [firstOrgCommunication = {}] = orgCommunications;
        // const [firstOrgDomain = {}] = orgDomains;

        // Construct the transformed data object
        const transformedData = {
            name: name || '',
            phoneNumber: phoneNumber || '',
            fax: fax || '',
            description: description || 'description',
            taxId: taxId || '',
            code: code || '200',
            statusCode: statusCode || '100',
            stateOfIncorporation: stateOfIncorporation || '',
            taxClassification: taxClassification || '',
            createdDt: createdDt || '2023-06-01',

            orgDomains: [{
                domain: formData.domain || '',
            }],

            orgCommunications: [{
                authSignataryFn: formData.authSignataryFn || '',
                authSignataryLn: formData.authSignataryLn || '',
                authSignataryPhone: formData.authSignataryPhone || '',
                authSignataryEmail: formData.authSignataryEmail || '',
                startDate: "2023-06-01"
            }],
            // organizationDocuments: organizationDocuments.map((documentObj) => ({
            //     expirationDate: documentObj.expirationDate || '',
            //     documentType: documentObj.documentType || '',
            //     issuedDt: documentObj.issuedDt || '',
            //     docNumber: documentObj.docNumber || '',
            //     documentName: documentObj.documentName || '',
            //     url: documentObj.url || '',
            //     fileExt: documentObj.fileExt || '',
            //     fileType: documentObj.fileType || '',
            // })),
        };

        return transformedData;
    };

    // function to handle the API call
    const handleApiCall = async (formData) => {

        try {
            const response = await axios.post('http://40.114.32.67:8080/recruit-0.0.1-SNAPSHOT/api/raves/v1/organization', formData);

            if (response.status === 200) {
                console.log('API call successful:', response.data);
                setSidebarVisible(false);
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
                exportData={companiesData}
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
                title="Create Company Profile"
                visible={sidebarVisible}
                onHide={closeAddCompaniesActionHandler}
                steps={companiesWizardSteps}
                handleApiCall={handleApiCall} // API call function to the WizardComponent
                transformDataForApi={transformDataForApi} // pass the data transformation function
            />

            <EntityDashboardCounts widgetList={companiesDashboardCounts} />
            <TabMenuContainer tabItems={companiesTabs({ columnConfig, handleFilterClick, dataTableRef })} actionButtons={actionButtons} />
        </PlainLayout>
    );
};

export default CompaniesListPage;
