import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import CustomDataTable from '../../../components/datatable/CustomDataTable';
import timesheetActionMenu from '../config/timesheetActionMenu';
import timesheetSelectedColumns from '../config/timesheetSelectedColumns';
import handleTimesheetActions from '../config/handleTimesheetActions';
import TimeSheetViewTab from '../container/TimeSheetViewTab';
import { timesheetData } from '../config/timesheetData';
import Viewer from '../../../components/viewers/Viewer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTimesheetsRequest } from '../../../redux/actions/timesheetActions';


const ActiveTimesheetListTab = ({ columnConfig, handleFilterClick }) => {
    const dispatch = useDispatch();

    const [sidebarVisible, setSidebarVisible] = useState(false);

    const { timesheets, loading, error } = useSelector((state) => state.timesheet);

    useEffect(() => {
        console.log('******** dispatching 111the event *************');
        dispatch(fetchTimesheetsRequest());
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

    if (timesheets && timesheets.length <= 0) {
        return <div>Error</div>;
    }

    return (
        <Card>
            <Viewer visible={sidebarVisible} onHide={toggleSidebar} header="Viewer header" contentComponent={<TimeSheetViewTab />} />

            <CustomDataTable
                data={timesheets}
                onRowSelect={handleRowSelect}
                onRowUnselect={handleRowUnselect}
                actionMenu={timesheetActionMenu}
                columnsConfig={columnConfig}
                selectedColumns={timesheetSelectedColumns}
                handleAction={handleTimesheetActions}
                handleFilterClick={handleFilterClick}
            />
        </Card>
    );
};

export default ActiveTimesheetListTab;
