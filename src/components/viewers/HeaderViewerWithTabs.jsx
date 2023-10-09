import React, { useState, useRef } from 'react';
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { OverlayPanel } from 'primereact/overlaypanel';
import { Tag } from 'primereact/tag';
import { Menu } from 'primereact/menu';


const HeaderViewerWithTabs = ({ name, buttons, options, employeeType, tags, buttonFlag, showTag , location }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const overlayRef = useRef(null);

    const handleOptionSelect = (event,option) => {
        console.log('Option selected:', option);
        setSelectedOption(option);
        overlayRef.current.toggle(event);
    };

    const renderButtons = () => {
        if (buttons && buttons.length > 0) {
            return (
                <div className="d-flex justify-content-start align-items-center gap-3 mt-2">
                    {buttons.map((button, index) => (
                        <Button
                            key={index}
                            text
                            size='small'
                            label={button.label}
                            icon={`pi ${button.icon}`}
                            className="bg-white company-secondary-text w-auto p-1"
                            onClick={button.action}
                        />
                    ))}
                </div>
            );
        }
        return null;
    };

    const renderOptions = () => {
        if (options && options.length > 0) {
            return (
                <div className='d-flex justify-content-center align-items-start ms-auto   gap-1'>
                    {buttonFlag ? (
                        <Button
                            text
                            label="+Add"
                            className="bg-white company-secondary-text w-auto p-1"
                            onClick={(event) => overlayRef.current.toggle(event)}
                        />
                    ) : (
                        <i
                            className="pi pi-ellipsis-v cursorPointer p-1"
                            size='small'
                            onClick={(event) => overlayRef.current.toggle(event)}
                        />
                    )}

                   <div className="d-flex justify-content-center align-items-start ms-auto   gap-1">
                   <Menu
                       model = {options.map((option)=>({
                        label: option.label,
                        command: option.action
                       }))}
                       popup
                       ref={overlayRef}
                       id="popup_menu_left"
                       className="w-auto"
                       >
                    </Menu>
                   </div>
                </div>
            );
        }
        return null;
    };

    const renderTag = () => {
        if (showTag) {
            return <Tag className="company-secondary-btn" value={tags}></Tag>;
        }
        return null;
    };

    return (
        <div className='d-flex justify-content-between'>
            <div className="company-layout-bg m-0 d-flex justify-content-between align-items-center gap-3 p-0  ">
                <div className="d-flex justify-content-start align-items-center gap-3">
                    <Avatar size="xlarge" shape="circle">
                        <i className="pi pi-shopping-bag fs-3"></i>
                    </Avatar>
                    <div className="">
                        <div className="d-flex justify-content-start align-items-center gap-2">
                            <div className="company-main-text p-0 fs-6 fw-bold mb-0 mr-2">
                                {name}
                            </div>
                            <div className="p-0 fs-6 ">{employeeType}</div>
                            {renderTag()}
                        </div>
                        <div className='d-flex justify-content-start align-items-center gap-3 mt-2 fs-6'>{location}</div>
                        {renderButtons()}
                    </div>
                </div>
            </div>
            {renderOptions()}
            <div
                className="pi pi-times-circle fs-5 p-1 "
            ></div>
        </div>
    );
}

export default HeaderViewerWithTabs;
