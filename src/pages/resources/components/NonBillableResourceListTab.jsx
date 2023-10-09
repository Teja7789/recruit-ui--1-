import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import CustomDataTable from '../../../components/datatable/CustomDataTable';
import userColumnConfig from '../config/resourceColumnConfig';
import usersSelectedColumns from '../config/resourceSelectedColumns';
import usersActionMenu from '../config/resourceActionMenu';
import handleUsersAction from '../config/handleResourceAction';

const NonBillableResourceListTab = () => {
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
                actionMenu={usersActionMenu}
                columnsConfig={userColumnConfig}
                selectedColumns={usersSelectedColumns}
                handleAction={handleUsersAction}
            />
        </Card>
    );
};

export default NonBillableResourceListTab;
