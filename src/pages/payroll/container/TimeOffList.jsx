import React from 'react'
import PlainCustomDataTable from '../../../components/datatable/PlainCustomDataTable'
import timeOffSelectedColumn from '../config/timeOffSelectedColumn'
import timeOffColumnConfig from '../config/timeOffColumnConfig'

const TimeOffList = () => {
    const data = [
        {
            name: "Abhishek Pulluri"
        }
    ]
    return (
        <div>
            {/* content1 */}
            <div className='l-width-70 m-auto p-3 d-flex align-items-center justify-content-between border-bottom'>
                <div className=''>
                    <div className='company-main-text fs-5 fw-bold'>
                        Time Off
                    </div>
                    <div>
                        Check employee total hours, time off and additional earning
                    </div>
                </div>
            </div>
            {/* DataTable */}
            <div>
                <PlainCustomDataTable
                    data={data}
                    selectedColumns={timeOffSelectedColumn}
                    columnsConfig={timeOffColumnConfig}
                />
            </div>
        </div>
    )
}

export default TimeOffList