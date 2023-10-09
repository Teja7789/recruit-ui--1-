import React from 'react';
import WidgetCount from './WidgetCount';

const EntityDashboardCounts = ({ widgetList }) => {
    return (
        <>
            <div className="row">
                {widgetList.map((widget, index) => (
                    <div key={index} className="col col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <WidgetCount widgetData={widget} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default EntityDashboardCounts;
