import React from 'react'
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
const BankInfo = () => {
  return (
    <div>
        {/* Bank */}
        <div className='h-auto rounded mb-2'>
        <div className="company-main-text fs-6 p-3 fw-bold d-flex justify-content-between align-items-center">
          <div>
            Banking information
          </div>
        </div>
        </div>
        <div className="company-layout-bg rounded p-3 h-auto">
        <div className="row">
          <div className="col-4 mb-1">
            <p className="company-secondary-text p-0 mb-0">Name of the Bank</p>
            <p className="company-main-text p-0  mb-2 fw-bold">---</p>
          </div>
          <div className="col-4 mb-1">
            <p className="company-secondary-text p-0 mb-0">
              Account Number
            </p>
            <p className="company-main-text p-0  mb-2 fw-bold">---</p>
          </div>
          <div className="col-4 mb-1">
            <p className="company-secondary-text p-0 mb-0">
              Account Type (Checking Savings)
            </p>
            <p className="company-main-text p-0  mb-2 fw-bold">---</p>
          </div>
          <div className="col-4 mb-1">
            <p className="company-secondary-text p-0 mb-0">Routing Number of SWIFT code</p>
            <p className="company-main-text p-0  mb-2 fw-bold">---</p>
          </div>
          <div className="col-8 mb-1">
            <p className="company-secondary-text p-0 mb-0">Bank Address</p>
            <p className="company-main-text p-0  mb-2 fw-bold">---</p>
          </div>
        </div>
      </div>
      {/* accounts */}
      <div className='h-auto rounded mb-2'>
        <div className="company-main-text fs-6 p-3 fw-bold d-flex justify-content-between align-items-center">
          <div>
            Accounts
          </div>
          <div>
            <Button text label="ACCOUNT" icon="pi pi-plus" className='company-primary-btn'></Button>
          </div>
        </div>
        </div>
        <div>
        <div className="d-flex justify-content-start align-items-center gap-3 p-3 company-layout-bg">
              <Avatar size="xlarge" shape="circle">
                <i className="pi pi-shopping-bag fs-3"></i>
              </Avatar>
              <div className="d-flex justify-content-between col-8">
                <div className="gap-2">
                  <div className="company-main-text">
                    Account 1
                  </div>
                  <div className='d-flex gap-3 fw-bold'>
                    xxxx xxxx xxxx 3312
                    <span className='mt-1'><i className='pi pi-eye'></i></span>
                  </div>
                </div>
                <div className=''>
                    <div>56%</div>
                    <div className='fw-bold'>$4380.00</div>
                    </div>
              </div>
            </div>  
            <div className="d-flex justify-content-start align-items-center gap-3 p-3 company-layout-bg mt-3">
              <Avatar size="xlarge" shape="circle">
                <i className="pi pi-shopping-bag fs-3"></i>
              </Avatar>
              <div className="d-flex justify-content-between col-8">
                <div className="gap-2">
                  <div className="company-main-text">
                    Account 1
                  </div>
                  <div className='d-flex gap-3 fw-bold'>
                    xxxx xxxx xxxx 3312
                    <span className='mt-1'><i className='pi pi-eye'></i></span>
                  </div>
                </div>
                <div className=''>
                    <div>44%</div>
                    <div className='fw-bold'>$3000.00</div>
                    </div>
              </div>
            </div>  
        </div>
    </div>
  )
}

export default BankInfo