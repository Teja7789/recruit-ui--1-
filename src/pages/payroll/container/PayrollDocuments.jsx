import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


import { FileUpload } from 'primereact/fileupload';
const PayrollDocument = () => {
  return (
    <div className='p-3'>
        <div className="">
            <FileUpload name="demo[]" url={'/api/upload'} multiple accept="/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
        </div>
        <div className="company-main-text fs-6 p-3 fw-bold d-flex justify-content-between align-items-center  ">
          <div>
            Documents
          </div>
        </div>
        <div>
        <DataTable
        value={""}
        tableStyle={{ minWidth: "50rem" }}
        size="small"
      >
        <Column field="title" header="Title"></Column>
        <Column field="resourceId" header="Resource ID"></Column>
        <Column field="DocNumber" header="Doc. Number "></Column>
        <Column field="uploadDate" header="Upload Date"></Column>
        <Column field="expiryDate" header="Expiry Date"></Column>
      </DataTable>
        </div>
    </div>
  )
}

export default PayrollDocument