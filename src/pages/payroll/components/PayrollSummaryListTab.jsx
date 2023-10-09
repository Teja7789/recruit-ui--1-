import React, { useState, useEffect } from 'react';
import ViewerWithTabs from '../../../components/viewers/ViewerWithTabs';
import { Card } from 'react-bootstrap';
import viewPayrollSummaryTabs from '../config/viewPayrollSummaryTabs';
import CustomDataTable from '../../../components/datatable/CustomDataTable';
import payrollSummaryActionMenu from '../config/payrollSummaryActionMenu';
import payrollSummaryColumnConfig from '../config/payrollSummaryColumnConfig';
import payrollSummarySelectedColumns from '../config/payrollSummarySelectedColumns';
import handlePayrollSummaryAction from '../config/handlePayrollSummaryAction';
import { payrollSummaryData } from '../config/payrollSummaryData';
import HeaderViewerWithTabs from '../../../components/viewers/HeaderViewerWithTabs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPayrollRequest } from '../../../redux/actions/payrollActions'
import payrollSummaryHeaderViwerBtn from '../config/payrollSummaryHeaderViewerBtn';
import payrollSummaryHeaderVieweroptions from '../config/payrollSummaryHeaderVieweroptions';


const PayrollSummaryListTab = ({ columnConfig, handleFilterClick, dataTableRef }) => {
  const dispatch = useDispatch();
  const { payrolls, loading, error } = useSelector((state) => state.payroll)

  useEffect(() => {
    console.log('******** dispatching payroll Data *************');
    dispatch(fetchPayrollRequest());
  }, [dispatch]);

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

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // if (payrolls && payrolls.length <= 0) {
  //   return <div>Error</div>;
  // }


  return (
    <Card>
      <ViewerWithTabs visible={sidebarVisible} onHide={toggleSidebar} tabs={viewPayrollSummaryTabs} header={<HeaderViewerWithTabs name="Abhishek Pulluri"
        buttons={payrollSummaryHeaderViwerBtn}
        // options={payrollSummaryHeaderVieweroptions}
        buttonFlag={true}
      />}
      />
      <CustomDataTable
        data={payrollSummaryData}
        // data={payrolls}
        onRowSelect={handleRowSelect}
        onRowUnselect={handleRowUnselect}
        actionMenu={payrollSummaryActionMenu}
        columnsConfig={payrollSummaryColumnConfig}
        selectedColumns={payrollSummarySelectedColumns}
        // handleAction={handlePayrollSummaryAction}
        handleAction={(action, rowData) => handlePayrollSummaryAction(action, rowData, setSidebarVisible)}
        columnConfig={columnConfig}
        handleFilterClick={handleFilterClick}
        dataTableRef={dataTableRef}
      />
    </Card>
  )
}

export default PayrollSummaryListTab