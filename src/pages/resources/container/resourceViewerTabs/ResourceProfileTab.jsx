import React from 'react';
import { InputSwitch } from 'primereact/inputswitch';
import { useState } from 'react';

function ResourceProfileTab({ selectedRowData }) {
    const [checked, setChecked] = useState(true);
    console.log(selectedRowData);

    return (
        <div className="mb-5">
            {/* employee profile */}
            <div className=" h-auto rounded mb-2">
                <div className="company-main-text fs-6 p-3 border-bottom fw-bold  d-flex justify-content-between align-items-center  ">
                    <div>Employee Profile</div>
                    <div className=" d-flex justify-content-between align-items-center gap-3">
                        <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} size="small" />
                    </div>
                </div>
                <div className=" border-bottom">
                    <div className="row p-3 mt-1">
                        <div>
                            <div className="row p-3 mt-1">
                                <div className="d-flex flex-column col-4">
                                    <label htmlFor="">First Name</label>

                                    <div>{selectedRowData?.resourceName}</div>
                                </div>
                                <div className="d-flex flex-column col-4">
                                    <label htmlFor="">Last Name</label>

                                    <div>{selectedRowData?.resourceName}</div>
                                </div>
                                <div className="d-flex flex-column col-4">
                                    <label htmlFor="">Display Name</label>

                                    <div>{selectedRowData?.resourceName}</div>
                                </div>
                            </div>
                            <div className="row p-3 ">
                                <div className="d-flex flex-column col-4">
                                    <label htmlFor="">Primary Email ID</label>

                                    <div>{selectedRowData?.resourceName}</div>
                                </div>
                                <div className="d-flex flex-column col-4">
                                    <label htmlFor="">DOB</label>

                                    <div>{selectedRowData?.resourceName}</div>
                                </div>
                                <div className="d-flex flex-column col-4">
                                    <label htmlFor="">SSN</label>

                                    <div> {selectedRowData?.ssnNumber}</div>
                                </div>
                            </div>
                            <div className="row p-3 ">
                                <div className="d-flex flex-column col-4">
                                    <label htmlFor="">DL Number</label>

                                    <div>{selectedRowData?.resourceName}</div>
                                </div>
                                <div className="d-flex flex-column col-4">
                                    <label htmlFor="">License-Exp</label>

                                    <div>{selectedRowData?.resourceName}</div>
                                </div>
                                <div className="d-flex flex-column col-4">
                                    <label htmlFor="">Start Date</label>
                                    <div>{selectedRowData?.joinDate}</div>
                                </div>
                            </div>
                            <div className="row p-3 ">
                                <div className="d-flex flex-column col-4">
                                    <label htmlFor="">Gender</label>
                                    <div>{selectedRowData?.resourceName}</div>
                                </div>
                                <div className="d-flex flex-column col-4">
                                    <label htmlFor="">Marital Status</label>

                                    <div>{selectedRowData?.resourceName}</div>
                                </div>
                                <div className="d-flex flex-column col-4">
                                    <label htmlFor="">Employee Type</label>

                                    <div>{selectedRowData?.role}</div>
                                </div>
                            </div>
                            <div className="row p-3 ">
                                <div className="d-flex flex-column col-4">
                                    <label htmlFor="">Current Status</label>

                                    <div>{selectedRowData?.status}</div>
                                </div>

                                <div className="d-flex flex-column col-4">
                                    <label htmlFor="">Invoice Cycle</label>
                                    <div>{selectedRowData?.resourceName}</div>
                                </div>
                                <div className="d-flex flex-column col-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact Details */}
            <div className=" h-auto rounded mb-2">
                <div className="company-main-text fs-6 p-3 fw-bold   border-bottom d-flex justify-content-between align-items-center  ">
                    <div>Contact Details</div>
                </div>
                <div className=" border-bottom">
                    <div className="row p-3 mt-1">
                        <div className="col-6">
                            <p className="company-secondary-text p-0 mb-0">Phone</p>
                            <p className="company-main-text p-0  mb-2 fw-normal">---</p>
                        </div>
                        <div className="col-6">
                            <p className="company-secondary-text p-0 mb-0">Email</p>
                            <p className="company-main-text p-0  mb-2 fw-normal">---</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Address */}
            <div className=" h-auto rounded mb-2">
                <div className="company-main-text fs-6 p-3 fw-bold   border-bottom d-flex justify-content-between align-items-center  ">
                    <div>Address</div>
                </div>
                <div className=" border-bottom">
                    <div className="row p-3 mt-1"></div>
                </div>
            </div>
        </div>
    );
}

export default ResourceProfileTab;
