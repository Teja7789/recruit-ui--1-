import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Menu } from 'primereact/menu';
import { Button } from "primereact/button";
import RunPayrollParent from '../container/RunPayrollParent';
import PayrollWizardComponent from '../../../components/viewers/PayrollWizardComponent';

const PayrollGenrationTab = () => {

  const [sidebarVisible, setSidebarVisible] = useState(false);

  const data = [
    { payRun: 'May 1st - May 5th', payDate: 'May 01, 2023', approveBy: 'May 01, 2023', department: '--', status: 'Auto-Approved' },
    { payRun: 'May 1st - May 5th', payDate: 'May 01, 2023', approveBy: 'May 01, 2023', department: '--', status: 'Auto-Approved' },
    { payRun: 'May 1st - May 5th', payDate: 'May 01, 2023', approveBy: 'May 01, 2023', department: '--', status: 'Auto-Approved' },
    { payRun: 'May 1st - May 5th', payDate: 'May 01, 2023', approveBy: 'May 01, 2023', department: '--', status: 'Auto-Approved' }
  ]

  const btn = () => {
    return (
      <Button label='Run Payroll' className='company-primary-btn'
        onClick={() => setSidebarVisible(true)} // Showing viewer when the button is clicked
      />
    );
  };

  return (
    <>
      <PayrollWizardComponent
        title="Run Payroll"
        visible={sidebarVisible}
        onHide={() => setSidebarVisible(false)}
        steps={RunPayrollParent}
      />
      <Card>
        <DataTable value={data} className='table' size='small'>
          <Column field='payRun' header='Pay Run' />
          <Column field='payDate' header='Pay Date' />
          <Column field='approveBy' header='Approve By 1.30 PM IST on' />
          <Column field='department' header='Department' />
          <Column field='status' header='Status' className='fw-bold' />
          <Column body={btn} />
          <Column
            body={() => {
              return (
                <div>
                  <Menu
                    model={""}
                    popup
                    id="popup_menu_left"
                  />
                  <i
                    className="pi pi-ellipsis-v"
                  />
                </div>
              );
            }}
            rowEditor
          ></Column>
        </DataTable>
      </Card>
    </>
  )
}

export default PayrollGenrationTab