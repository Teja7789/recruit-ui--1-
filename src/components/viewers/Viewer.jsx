import { Sidebar } from 'primereact/sidebar';
import React from 'react';
import './viewer.css';

const Viewer = ({ visible, onHide, header, contentComponent }) => {
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
            <div className="sidebar-content">{contentComponent}</div>
        </Sidebar>
    );
};

export default Viewer;
