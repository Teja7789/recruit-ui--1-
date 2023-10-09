import { Sidebar } from 'primereact/sidebar';
import React, { useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import TitleHeader from '../header/TitleHeader';
import './viewer.css';
import { Button } from 'primereact/button';

const PayrollWizardComponent = ({title, visible, onHide, steps }) => {
    const showCloseIcon = false;
    const blockScroll = true;
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {

        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleFinish = () => {
        // You can implement any logic needed on finish
        alert('Wizard completed!');
    };
    
    const progress = ((currentStep + 1) / steps.length) * 100; // Calculate progress as a percentage

    return (
        <Sidebar
            visible={visible}
            onHide={onHide}
            position="right"
            showCloseIcon={showCloseIcon}
            blockScroll={blockScroll}
        >
            <div className="min-h-full">
                <div className="surface-border border-round">
                    <TitleHeader onClick={onHide} title={title} nextStep={steps[currentStep].nextstep} progress={progress} />
                </div>
                <div className="surface-border border-round p-5">
                    <h3>{steps[currentStep].name}</h3>
                    {steps[currentStep].component}
                </div>
                <div className="surface-border border-round mt-3 p-4"></div>

                <div className="sidebar-footer">
                    {currentStep > 0 && (
                        <Button
                            label="Previous"
                            className="mr-5"
                            size="small"
                            onClick={handlePrevious}
                            severity="secondary"
                        />
                    )}
                    {currentStep < steps.length - 1 ? (
                        <Button label="Next" className="mr-5" size="small" onClick={handleNext} severity="info" />
                    ) : (
                        <Button label="Finsh" className="mr-5" size="small" onClick={handleFinish} severity="success" />
                    )}
                </div>
            </div>
        </Sidebar>
    );
};

export default PayrollWizardComponent;