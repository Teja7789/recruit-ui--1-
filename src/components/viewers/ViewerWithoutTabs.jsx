import { Sidebar } from 'primereact/sidebar';
import { TabView, TabPanel } from 'primereact/tabview';
import React, { useState } from 'react';
import './viewer.css';

const ViewerWithoutTabs = ({ visible, onHide, header, component }) => {
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
                {header}
            </div>
            <div className="">
               {component}
            </div>
        </Sidebar>
    );
};

export default ViewerWithoutTabs;
