import React from 'react'
import { InputText } from 'primereact/inputtext';
import CustomDataTable from '../../../components/datatable/CustomDataTable';
import payPeriodColumnConfig from '../config/payPeriodColumnConfig';
import payPeriodSelectedColumn from '../config/payPeriodSelectedColumn';
import payrollSummaryActionMenu from '../config/payrollSummaryActionMenu';
import PlainCustomDataTable from '../../../components/datatable/PlainCustomDataTable';

const PayPeriodList = () => {
    const data = [
        {
            name : "Abhishek Pulluri",
            startDate : "June 01, 2023",
            endDate : "June 20, 2023",
            workTime : "FTE",
            totalHours : "120 hrs",
            overTime : "16 hrs",
            paymentMethod : "--"
        }
    ]
    return (
        <div>
            {/* content1 */}
            <div className='l-width-70 m-auto p-3 d-flex align-items-center justify-content-between border-bottom'>
                <div className=''>
                    <div className='company-main-text fs-5 fw-bold'>
                        Pay Period & Employee
                    </div>
                    <div>
                        Select Employee to includ this payroll
                    </div>
                </div>
                <div>
                    <span className="company-layout-bg p-input-icon-left w-100">
                        <i className="pi pi-search" />
                        <InputText
                            placeholder="Search"
                            className="w-100"
                        />
                    </span>
                </div>
            </div>
            {/* DataTable */}
            <div>
                    <PlainCustomDataTable 
                    data={data}
                    selectedColumns={payPeriodSelectedColumn}
                    columnsConfig={payPeriodColumnConfig}
                    />
            </div>
        </div>
    )
}

export default PayPeriodList