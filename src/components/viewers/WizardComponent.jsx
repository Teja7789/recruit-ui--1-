import React, { useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { useForm, Controller } from 'react-hook-form';
import TitleHeader from '../header/TitleHeader';
import './viewer.css';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

const WizardComponent = ({ title, visible, onHide, steps, handleApiCall, transformDataForApi }) => {
    const showCloseIcon = false;
    const blockScroll = true;
    const [currentStep, setCurrentStep] = useState(0);
    const { control, handleSubmit, formState: { errors }, getValues, setValue, watch } = useForm();
    const [skip, setSkip] = useState(false)
    const [formData, setFormData] = useState({});

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
        setSkip(false)
        // console.log("Form Number :", + currentStep);
    };

    const onSubmit = (data) => {
        // Merge the form data into the existing formData object
        setFormData({ ...formData, ...data });
        handleNext();
    };

    const handleSkip = () => {
        setCurrentStep(currentStep + 1);
        setSkip(false);
    }

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
        setSkip(false);
    };

    const handleStart = () => {
        setCurrentStep(0);
    };

    const handleFinish = async () => {
        const transformedData = transformDataForApi(formData);
        console.log('Final form data:', transformedData);

        // Make the API call using the provided function
        try {
            await handleApiCall(transformedData);
            // console.log('Form Submitted');
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    function getCurrentStepComponent() {
        return steps[currentStep].component;
    }

    const progress = ((currentStep + 1) / steps.length) * 100;
    // console.log(formData)

    return (
        <Sidebar
            visible={visible}
            onHide={onHide}
            position="right"
            showCloseIcon={showCloseIcon}
            blockScroll={blockScroll}
        >
            {/* Content of the Sidebar */}
            <div>
                <div className="surface-border border-round">
                    <TitleHeader
                        onClick={onHide}
                        title={title}
                        nextStep={steps[currentStep].nextStep}
                        progress={progress}
                    />
                </div>

                <div className="surface-border border-round p-5">
                    <h3>{steps[currentStep].name}</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name={`step${currentStep}`} // Use a unique name for each step
                            control={control}
                            render={({ field }) => (
                                <React.Fragment>
                                    {React.createElement(getCurrentStepComponent(), { ...field, control, errors, setValue, watch, setSkip, formData })}
                                </React.Fragment>
                            )}
                        />
                        <div className="sidebar-footer">
                            {skip === true && (
                                <Button
                                    type='button'
                                    className='mr-5'
                                    size='small'
                                    label='Skip'
                                    severity='secondary'
                                    onClick={handleSkip}
                                />
                            )}
                            {currentStep > 0 && (
                                <Button
                                    type="button"
                                    className="mr-5"
                                    label="Previous"
                                    size="small"
                                    severity="secondary"
                                    onClick={handlePrevious}
                                />
                            )}
                            {currentStep < steps.length - 1 ? (
                                <Button type="submit" label="Next" severity="info" size="small" className="mr-5" />
                            ) : (
                                <Button
                                    type="button"
                                    label="Finish"
                                    className="mr-5"
                                    size="small"
                                    severity="success"
                                    onClick={handleFinish}
                                />
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </Sidebar>
    );
};

export default WizardComponent;
