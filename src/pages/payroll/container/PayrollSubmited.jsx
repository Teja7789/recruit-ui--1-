import React from 'react'

const PayrollSubmited = () => {
  return (
    <div>
        {/* content1 */}
      <div className=''>
        <div className=''>
          <div className='fs-5 fw-bold'>
            Payroll Submitted
          </div>
          <div>
            Pay will be debit on May 10th and 22 employee will be paid at 1st June. Make sure the funds available
          </div>
        </div>
      </div>
      {/* content2 */}
      <div className='d-flex justify-content-between mt-4 p-4'>
        <div>
            <h4>$157,983.07</h4>
            Total Payroll
            </div>
        <div>
        <h4>May 25, 2023</h4>
            payroll Draft Date
            </div>
        <div>
        <h4>June 1, 2023</h4>
            Payroll Payment Date
            </div>
      </div>
      {/* content3 */}
      <div>
        <div className='fs-6 fw-bold'>What Your Company Pays</div>
      </div>
    </div>
  )
}

export default PayrollSubmited