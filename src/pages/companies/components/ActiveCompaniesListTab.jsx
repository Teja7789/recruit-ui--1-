import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import CustomDataTable from '../../../components/datatable/CustomDataTable';
import companiesActionMenu from '../config/companiesActionMenu';
import companiesColumnConfig from '../config/companiesColumnConfig';
import companiesSelectedColumns from '../config/companiesSelectedColumns';
import handleCompanyAction from '../config/handleCompanyAction';
import ViewerWithTabs from '../../../components/viewers/ViewerWithTabs';
import CompaniesViewTabHeader from './CompaniesViewTabHeader';
import viewCompaniesTabs from '../config/viewCompaniesTabs';

const ActiveCompaniesListTab = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const handleRowSelect = (event) => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleRowUnselect = (e) => {
        setSidebarVisible(!sidebarVisible);
    };

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    const data = [
        {
            name: "QData Inc",
            location: "Hyderabad",
            orgRoles: "Client",
            authSignataryFn: "Anthony",
            authSignataryPhone: "7777777777",
            createdOn: "09-06-2023"
        }
    ];
    return (
        <Card>
            <ViewerWithTabs
                visible={sidebarVisible}
                onHide={toggleSidebar}
                tabs={viewCompaniesTabs}
                header={<CompaniesViewTabHeader />}
            />
            <CustomDataTable
                data={data}
                onRowSelect={handleRowSelect}
                onRowUnselect={handleRowUnselect}
                actionMenu={companiesActionMenu}
                columnsConfig={companiesColumnConfig}
                selectedColumns={companiesSelectedColumns}
                handleAction={handleCompanyAction}
            />
        </Card>
    );
};

export default ActiveCompaniesListTab;
