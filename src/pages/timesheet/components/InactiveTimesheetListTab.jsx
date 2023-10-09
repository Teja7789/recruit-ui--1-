import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import CustomDataTable from '../../../components/datatable/CustomDataTable';
import ViewerWithTabs from '../../../components/viewers/ViewerWithTabs';
import timesheetActionMenu from '../config/timesheetActionMenu';
import timesheetColumnConfig from '../config/timesheetColumnConfig';
import timesheetSelectedColumns from '../config/timesheetSelectedColumns';
import handleTimesheetActions from '../config/handleTimesheetActions';
import viewTimesheetTabs from '../config/viewTimesheetTabs';


const InactiveTimesheetListTab = ({columnConfig, handleFilterClick}) => {
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
            resource:'',
            role:"",
            type:'',
            contractID:"",
            contractTitle:'',
            startDate:'',
            endDate:'',
            totalHours:"",
            status:''
        }
    ];
    return (
        <Card>
            <ViewerWithTabs visible={sidebarVisible} onHide={toggleSidebar} tabs={viewTimesheetTabs} />
            <CustomDataTable
                data={data}
                onRowSelect={handleRowSelect}
                onRowUnselect={handleRowUnselect}
                actionMenu={timesheetActionMenu}
                columnsConfig={timesheetColumnConfig}
                selectedColumns={timesheetSelectedColumns}
                handleAction={handleTimesheetActions}
                columnConfig={columnConfig}
                handleFilterClick={handleFilterClick}
            />
        </Card>
    );
};

export default InactiveTimesheetListTab;
