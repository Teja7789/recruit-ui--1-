import { Sidebar } from 'primereact/sidebar';
import { TabView, TabPanel } from 'primereact/tabview';
import React, { useState } from 'react';
import './viewer.css';


const ViewerWithTabs = ({ visible, onHide, header,tabs }) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const showCloseIcon = false;
    const blockScroll = true;

    return (
        <Sidebar
            visible={visible}
            onHide={onHide}
            position="right"
            showCloseIcon={showCloseIcon}
            blockScroll={blockScroll}
        >
            <div className="sidebar-header">
                <h2>{header}</h2>
            </div>
            <div className="">
                <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                    {tabs.map((tab, index) => (
                        <TabPanel key={index} header={tab.label}>
                            {tab.content}
                        </TabPanel>
                    ))}
                </TabView>
            </div>
        </Sidebar>
    );
};

export default ViewerWithTabs;
