import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ActionBar from './ActionBar';
import { TabView, TabPanel } from 'primereact/tabview';

import './tabMenu.css';

const TabMenuContainer = ({ tabItems, actionButtons }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (e) => {
        setActiveTab(e?.index);
    };

    return (
        <>
            <div>
                <div className="left-side custom-tabView custom-tabView-border">
                    <TabView
                        activeIndex={activeTab}
                        onTabChange={handleTabChange}
                        className="company-primary-text tab-view"
                    >
                        {tabItems?.map((tab, index) => (
                            <TabPanel key={index} header={tab.label} headerClassName="header">
                                {tab.content}
                            </TabPanel>
                        ))}

                        <TabPanel
                            className="right-side  d-flex justify-content-center align-items-center ms-auto p-2"
                            headerTemplate={<ActionBar actionButtons={actionButtons} />}
                        ></TabPanel>
                    </TabView>
                </div>
            </div>
        </>
    );
};

TabMenuContainer.propTypes = {
    tabItems: PropTypes.array.isRequired,
    actionButtons: PropTypes.array.isRequired,
};

export default TabMenuContainer;