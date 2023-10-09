import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import CustomDataTable from '../../../components/datatable/CustomDataTable';
import resourceSelectedColumns from '../config/resourceSelectedColumns';
import handleResourceAction from '../config/handleResourceAction';
import resourceActionMenu from '../config/resourceActionMenu';
import ViewerWithTabs from '../../../components/viewers/ViewerWithTabs';
import { resourceData } from '../config/resourceData';
import { resourceViewTabs } from '../config/viewResourceTab';
import ResourceViewerHeader from '../config/ResourceViewerHeader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResourceRequest } from '../../../redux/actions/resourceActions';

const AllResourcesListTab = ({ columnConfig, handleFilterClick, dataTableRef }) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const dispatch = useDispatch();
    const { resources, loading, error } = useSelector((state) => state.resource);

    const [resourceTableData, setResourceTableData] = useState(resourceData);
    const handleRowSelect = (event) => {
        setSidebarVisible(!sidebarVisible);
    };
    useEffect(() => {
        console.log('******** dispatching 111the event *************');
        dispatch(fetchResourceRequest());
    }, [dispatch]);

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

    if (resources && resources.length <= 0) {
        return <div>Error</div>;
    }

    return (
        <Card>
            <ViewerWithTabs
                visible={sidebarVisible}
                onHide={toggleSidebar}
                tabs={resourceViewTabs}
                header={<ResourceViewerHeader />}
            />

            <CustomDataTable
                data={resources}
                onRowSelect={handleRowSelect}
                onRowUnselect={handleRowUnselect}
                actionMenu={resourceActionMenu}
                columnsConfig={columnConfig}
                selectedColumns={resourceSelectedColumns}
                handleAction={handleResourceAction}
                handleFilterClick={handleFilterClick}
                dataTableRef={dataTableRef}
            />
        </Card>
    );
};

export default AllResourcesListTab;
