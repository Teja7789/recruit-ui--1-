import React from 'react';
import CustomInputText from '../../../../components/controls/CustomInputText';
import CustomInputPhoneNbr from '../../../../components/controls/CustomInputPhoneNbr';
import CustomDropdown from '../../../../components/controls/CustomDropdown';

const ResourceProfile = ({ control, errors }) => {
    const options = [
        { value: 'option1', label: 'option1' },
        { value: 'option2', label: 'option2' },
        { value: 'option3', label: 'option3' },
        { value: 'option4', label: 'option4' },
    ];
    let required = true;
    return (
        <>
            <div className=" flex-wrap gap-3 p-fluid w-80">
                <div className="flex m-auto">
                    <CustomInputText
                        control={control}
                        errors={errors}
                        name="firstName"
                        labelId="firstName.label"
                        defaultValue=""
                        required={required}
                        requiredMsg="firstName.required"
                        className=" md:col-4"
                    />
                    <CustomInputText
                        control={control}
                        errors={errors}
                        name="middleName"
                        labelId="middleName.label"
                        defaultValue=""
                        className=" md:col-4"
                    />
                    <CustomInputText
                        control={control}
                        errors={errors}
                        name="lastName"
                        labelId="lastName.label"
                        defaultValue=""
                        required={required}
                        requiredMsg="lastName.required"
                        className=" md:col-4"
                    />
                </div>
                <div className="flex  m-auto">
                    <CustomInputText
                        control={control}
                        errors={errors}
                        name="ssnNumber"
                        labelId="ssnNumber.label"
                        defaultValue=""
                        required={required}
                        requiredMsg="ssnNumber.required"
                        className=" md:col-4"
                    />

                    <CustomInputText
                        control={control}
                        errors={errors}
                        name="primaryEmailId"
                        labelId="primaryEmailId.label"
                        defaultValue=""
                        required={required}
                        requiredMsg="primaryEmailId.required"
                        className=" md:col-4"
                    />
                    <CustomInputPhoneNbr
                        control={control}
                        errors={errors}
                        name="phoneNumber"
                        labelId="phoneNumber.label"
                        defaultValue=""
                        required={required}
                        requiredMsg="phoneNumber.required"
                        className=" md:col-4"
                    />
                </div>
            </div>
        </>
    );
};

export default ResourceProfile;
