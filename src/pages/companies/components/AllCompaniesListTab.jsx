import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import CustomDataTable from '../../../components/datatable/CustomDataTable';
import companiesActionMenu from '../config/companiesActionMenu';
import companiesColumnConfig from '../config/companiesColumnConfig';
import companiesSelectedColumns from '../config/companiesSelectedColumns';
import handleCompanyAction from '../config/handleCompanyAction';
import ViewerWithTabs from '../../../components/viewers/ViewerWithTabs';
import viewCompaniesTabs from '../config/viewCompaniesTabs';
import CompaniesViewTabHeader from './CompaniesViewTabHeader';
import { companiesData } from '../config/companiesData';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompaniesRequest } from '../../../redux/actions/companiesActions';

const AllCompaniesListTab = ({ columnConfig, handleFilterClick ,dataTableRef}) => {
    const dispatch = useDispatch();
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const { companies, loading, error } = useSelector((state) => state.company);

    useEffect(() => {
        console.log('******** dispatching 111the event *************');
        dispatch(fetchCompaniesRequest());
    }, [dispatch]);

    const handleRowSelect = (event) => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleRowUnselect = (e) => {
        setSidebarVisible(!sidebarVisible);
    };

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (companies && companies.length <= 0) {
        return <div>Error</div>;
    }

    return (
        <Card>
            <ViewerWithTabs
                visible={sidebarVisible}
                onHide={toggleSidebar}
                tabs={viewCompaniesTabs}
                header={<CompaniesViewTabHeader />}
            />
            <CustomDataTable
                data={companies}
                onRowSelect={handleRowSelect}
                onRowUnselect={handleRowUnselect}
                actionMenu={companiesActionMenu}
                columnsConfig={companiesColumnConfig}
                selectedColumns={companiesSelectedColumns}
                handleAction={handleCompanyAction}
                columnConfig={columnConfig}
                handleFilterClick={handleFilterClick}
                dataTableRef={dataTableRef}
            />
        </Card>
    );
};

export default AllCompaniesListTab;
