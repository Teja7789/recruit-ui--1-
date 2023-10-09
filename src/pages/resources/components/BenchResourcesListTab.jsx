import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import CustomDataTable from '../../../components/datatable/CustomDataTable';
import resourceActionMenu from '../config/resourceActionMenu';
import resourceColumnConfig from '../config/resourceColumnConfig';
import resourceSelectedColumns from '../config/resourceSelectedColumns';
import handleResourceAction from '../config/handleResourceAction';

const BenchResourcesListTab = () => {
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
    const data = [];
    return (
        <Card>
            <CustomDataTable
                data={data}
                onRowSelect={handleRowSelect}
                onRowUnselect={handleRowUnselect}
                actionMenu={resourceActionMenu}
                columnsConfig={resourceColumnConfig}
                selectedColumns={resourceSelectedColumns}
                handleAction={handleResourceAction}
            />
        </Card>
    );
};

export default BenchResourcesListTab;
