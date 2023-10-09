import React from 'react';
import CustomInputText from '../../../../components/controls/CustomInputText';
import CustomInputPhoneNbr from '../../../../components/controls/CustomInputPhoneNbr';

function CompanyContactDetailsStep({ control, errors }) {
    let required = true
    return (
        <>
            <div className=" flex-wrap gap-3 p-fluid">
                <div className="md:flex">
                    <CustomInputText
                        control={control}
                        errors={errors}
                        name="authSignataryFn"
                        labelId="authSignataryFn"
                        defaultValue={null}
                        required={required}
                        placeholder="First Name"
                        requiredMsg="authSignataryFn.required"
                        className="md:col-6  sm:col-12"
                    />
                    <CustomInputText
                        control={control}
                        errors={errors}
                        name="authSignataryLn"
                        labelId="authSignataryLn"
                        defaultValue={null}
                        placeholder="Last Name"
                        className="md:col-6  sm:col-12"
                    />
                </div>
                <div className="md:flex">
                    <CustomInputText
                        control={control}
                        errors={errors}
                        name="authSignataryEmail"
                        labelId="authSignataryEmail"
                        placeholder="admin@tech.com"
                        defaultValue=""
                        required={required}
                        requiredMsg="authSignataryEmail.required"
                        className="md:col-6  sm:col-12"
                    />
                    <CustomInputPhoneNbr
                        control={control}
                        errors={errors}
                        name="authSignataryPhone"
                        labelId="authSignataryPhone"
                        maskFormat="(999) 999-9999"
                        defaultValue=""
                        required={required}
                        requiredMsg="authSignataryPhone.required"
                        className="md:col-6 sm:col-12"
                    />
                </div>
            </div>
        </>
    );
}

export default CompanyContactDetailsStep;
