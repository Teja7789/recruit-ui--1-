import React from 'react'

const TaxInfo = () => {
  return (
    <div>
        <div className="company-layout-bg rounded p-3 h-auto mt-4">
        <div className="row">
          <div className="col-3 mb-1">
            <p className="company-secondary-text p-0 mb-0">Current tax Deduction</p>
            <p className="company-main-text p-0  mb-2 fw-bold">---</p>
          </div>
          <div className="col-3 mb-1">
            <p className="company-secondary-text p-0 mb-0">
              W4 Status
            </p>
            <p className="company-main-text p-0  mb-2 fw-bold">---</p>
          </div>
          <div className="col-3 mb-1">
            <p className="company-secondary-text p-0 mb-0">
              Federal tax rate
            </p>
            <p className="company-main-text p-0  mb-2 fw-bold">---</p>
          </div>
          <div className="col-3 mb-1">
            <p className="company-secondary-text p-0 mb-0">Status Tax rate</p>
            <p className="company-main-text p-0  mb-2 fw-bold">---</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaxInfo;