import React from 'react'
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const OverView = () => {

    const Details = [
        { id: "id", label: "ID", value: "#303941" },
        { id: "employeeName", label: "Employee Name", value: "Abhishek Pelluri" },
        { id: "hours", label: "Hours", value: "136" },
        { id: "gross", label: "Gross", value: "$9365.00" },
        { id: "taxes", label: "Taxes", value: "%95.30" },
        { id: "netPay", label: "Net pay", value: "$9539.70" },
        { id: "status", label: "Status", value: "paid" },
        { id: "paySchedule", label: "Pay Schedule", value: "Weekly" },
      ];

      const tableHead = [
        {
            field : "checkDate",
            header : "Check Date" 
        },
        {
            field : "checkNumber",
            header : "Check Number" 
        },
        {
            field : "totalPaid",
            header : "Total Paid" 
        },
        {
            field : "netPay",
            header : "Net Pay" 
        },
      ]
  return (
    <div>
        {/* Detail */}
        <div className="h-auto rounded mb-2">
        <div className="company-main-text fs-6 p-3 fw-bold   border-bottom d-flex justify-content-between align-items-center  ">
          <div>Details
          </div>
        </div>
        <div className="border-bottom">
          <div className="row p-3 mt-1">
            {Details.map((item) => (
              <div className="col-3" key={item.id}>
                <p className="company-secondary-text p-0 mb-0">{item.label}</p>
                <p className="company-main-text p-0  mb-2 fw-normal">
                    {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className='company-layout-bg'>
      <div className='h-auto rounded'>
        <div className='company-main-text fs-6 p-3 fw-bold   border-bottom d-flex justify-content-between align-items-center'>
            <div>
            Summary
            </div>
            <div>
                <span className='fw-normal'>Pay Period : 05/22/2023 - 05/12/2023 </span>
                <Button
                    text
                    label="Preview paysleep"
                    size="small"
                    className="bg-white company-main-text w-auto p-1"
                    icon="pi pi-eye "
                  />
                <Button
                    text
                    label="Download paysleep"
                    size="small"
                    className="bg-white company-main-text w-auto p-1"
                    icon="pi pi-download"
                  />
            </div>
        </div>
      </div>
      <div className="border-bottom">
          <div className="row p-3 mt-1">
      <div className="col-2">
                <p className="company-secondary-text p-0 mb-0">Gross Pay</p>
                <p className="company-main-text p-0  mb-2 fw-normal">
                    $9365.00
                </p>
              </div>
              <div className="col-2">
                <p className="company-secondary-text p-0 mb-0">Bonus</p>
                <p className="company-main-text p-0  mb-2 fw-normal">
                    $365.00
                </p>
              </div>
              <div className="col-2">
                <p className="company-secondary-text p-0 mb-0">Loan (plan 1)</p>
                <p className="company-main-text p-0  mb-2 fw-normal">
                    $200.00
                </p>
              </div>
              <div className="col-2">
                <p className="company-secondary-text p-0 mb-0">Income Tax</p>
                <p className="company-main-text p-0  mb-2 fw-normal">
                    $2150.00
                </p>
              </div>
              <div className="col-3">
                <p className="company-secondary-text p-0 mb-0">Net Pay</p>
                <p className="company-main-text p-0  mb-2 fw-normal">
                    $7380.00
                </p>
              </div>
              </div>
              </div>
      </div>

      {/* Pay Stubs */}
      <div>
        <div className='h-auto rounded mb-2'>
        <div className="company-main-text fs-6 p-3 fw-bold   border-bottom d-flex justify-content-between align-items-center  ">
          <div>Pay Stubs - Abhishek Palluri
          </div>
        </div>
        </div>
        <div className='p-3 border-bottom company-layout-bg'>
            <span>Check Date from : <Calendar
              id="startDate"
              name="startDate"
              placeholder="Start Date"
              showIcon
              className='date-pick-icon'
            />
            </span>
            <span>To : <Calendar
              id="startDate"
              name="startDate"
              placeholder="Start Date"
              showIcon
              className='date-pick-icon'
            /></span>
            <Button
                    text
                    label="Find"
                    className="bg-white company-primary-text"
                    style={{height:"3rem",width:"6rem"}}  
                  />
        </div>
      </div>

      {/* table */}
      <div className='mt-4'>
      <DataTable
        value={tableHead}
        tableStyle={{ minWidth: "50rem" }}
        size="small"
      >
        <Column field="checkDate" header="Check Date"></Column>
        <Column field="checkNumber" header="Check Number"></Column>
        <Column field="totalPaid" header="Total Paid"></Column>
        <Column field="netPay" header="Net Pay"></Column>
      </DataTable>
      </div>
     
     {/* Time Tracking */}
     <div className='h-auto rounded mt-2'>
     <div className="company-main-text fs-6 p-3 border-bottom fw-bold d-flex justify-content-between align-items-center">
          <div>
            Time Tracking
          </div>
        </div> 
        <div className="row p-3">
      <div className="col-2">
                <p className="company-secondary-text p-0 mb-0">Regular</p>
                <p className="company-main-text p-0  mb-2 fw-normal">
                    158h 54m
                </p>
              </div>
              <div className="col-2">
                <p className="company-secondary-text p-0 mb-0">Overtime</p>
                <p className="company-main-text p-0  mb-2 fw-normal">
                    0h
                </p>
              </div>
              <div className="col-2">
                <p className="company-secondary-text p-0 mb-0">Double</p>
                <p className="company-main-text p-0  mb-2 fw-normal">
                    0h
                </p>
              </div>
              <div className="col-2">
                <p className="company-secondary-text p-0 mb-0">Approved/total hours</p>
                <p className="company-main-text p-0  mb-2 fw-normal">
                158h 54m/158h 54m
                </p>
              </div>
              <div className="col-2">
                <p className="company-secondary-text p-0 mb-0">PTO</p>
                <p className="company-main-text p-0  mb-2 fw-normal">
                    0h
                </p>
              </div>
              <div className="col-2">
                <p className="company-secondary-text p-0 mb-0">Holidays (paid)</p>
                <p className="company-main-text p-0  mb-2 fw-normal">
                    0h
                </p>
              </div>
              </div>
     </div>

    </div>
  )
}

export default OverView;