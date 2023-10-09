import React from 'react'
import EntityDashboardCounts from '../../../components/dashboard/EntityDashboardCounts'
import timesheetViewerDashboardCount from '../config/timesheetViewerDashboardCount'

function TimeSheetViewTab() {

  const Details = [
    { id: "client", label: "Client", value: "--" },
    { id: "organization", label: "Organization", value: "--" },
    { id: "projectID", label: "Project ID", value: "AV540" },
    { id: "projectTitle", label: "Project Title", value: "Project Title" },
    { id: "startDate", label: "Start Date", value: "Sep 01 2020" },
    { id: "endDate", label: "End Date", value: "Mar 01 2021" },
    { id: "status", label: "Status", value: "Signed" },
    { id: "sigunature", label: "Sigunature", value: "--" },
  ];

  return (
    <div>
         <EntityDashboardCounts   widgetList={timesheetViewerDashboardCount} />
         <hr/>

          <div className="row p-3 mt-1">
            {Details.map((item) => (
              <div className="col-6 p-3" key={item.id}>
                <p className="company-secondary-text p-0 mb-0">{item.label}</p>
                <p className="company-main-text p-0  mb-2 fw-normal">
                    {item.value}
                </p>
              </div>
            ))}
          </div>
          
        </div>

        
  )
}

export default TimeSheetViewTab