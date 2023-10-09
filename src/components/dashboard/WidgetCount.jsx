import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Chart } from 'primereact/chart';
import { Skeleton } from 'primereact/skeleton';

const WidgetCount = ({ widgetData }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    const chartOptions = {
        type: widgetData.graphType || 'line',
        data: {
            labels: ['', '', '', '', '', ''],
            datasets: [
                {
                    data: widgetData.graphData,
                    fill: false,
                    borderColor: widgetData.borderColor || 'green',
                    tension: 0.1,
                },
            ],
        },
        options: {
            scales: {
                x: {
                    display: false,
                },
                y: {
                    display: false,
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
        },
    };

    return (
        <>
            {isLoading ? (
                <div className="m-2">
                    <Skeleton className="" width="100%" height="5rem" />
                </div>
            ) : (
                <Card className="p-2">
                    <div className="">
                        <h6 className="widget-label float-start">{widgetData.label}</h6>
                        {widgetData.icon ? (
                            <img
                                src={widgetData.icon}
                                alt=" "
                                className="float-end"
                                style={{ width: '25px', height: '25px' }}
                            />
                        ) : (
                            <div className="float-end"></div>
                        )}
                    </div>

                    <div className="widget-header d-flex">
                        <h3 className="">{widgetData.count}</h3>
                        {widgetData.graphData ? (
                            <Chart
                                type={chartOptions.type}
                                data={chartOptions.data}
                                options={chartOptions.options}
                                className="ps-3"
                                style={{ width: '100px' }}
                            />
                        ) : (
                            <div className="ps-3 pt-2">
                                <i className="pi pi-chart-line"></i>
                            </div>
                        )}
                    </div>
                </Card>
            )}
        </>
    );
};

export default WidgetCount;
