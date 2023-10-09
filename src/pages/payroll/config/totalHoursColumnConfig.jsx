import { Button } from "primereact/button";
const nameTemp = (rowData) => (
    <div>
      <div>{rowData.name}</div>
      <div className='fw-normal'>FTE - $82,000/Year</div>
    </div>
  );

  const addOt = (rowData) => (
    <div>
      <div>{rowData.hrsWork}</div>
      <div className='d-flex'>
        <div>
          <Button
            text
            label="Add OverTime"
            size="small"
            // className="bg-white company-main-text w-auto p-1"
          />
        </div>
        <div className='mt-1'>OverTime</div>
      </div>
    </div>
  )

  const ReimbursBtn = () => (
    <div>
      <Button
        text
        label="Reimbursment"
        size="small"
        // className="bg-white company-main-text w-auto"
      />
    </div>
  )
  const paymentType = () => (
    <div>
      <Button
        text
        label="Direct deposit"
        size="small"
        // className="company-layout-bg company-main-text"
      />
    </div>
  )

  const handleAddNote = () => {
    console.log("hello clicked me")
  }
  const personalNote = () => (
    <div>
      <Button
        text
        label="Add Note"
        size="small"
        // className="company-leyout-bg company-main-text"
        icon="pi pi-plus"
        onClick={handleAddNote}
      />
    </div>
  )

const totalHoursColumnConfig = [
    {
        field : "name",
        header : "Name",
        body : nameTemp
    },
    {
        field : "hrsWork",
        header : "Hours Work",
        body : addOt 
    },
    {
        field : "additionalEarning",
        header : "Additional Earning",
        body : ReimbursBtn 
    },
    {
        field : "totalPay",
        header : "Total Pay" 
    },
    {
        field : "paymentType",
        header : "Payment Type",
        body : paymentType 
    },
    {
        field : "personalNote",
        header : "Personal Note",
        body : personalNote 
    }
]

export default totalHoursColumnConfig;