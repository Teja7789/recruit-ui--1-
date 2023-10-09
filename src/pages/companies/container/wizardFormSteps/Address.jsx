import React, { useEffect } from 'react';
import CustomInputText from '../../../../components/controls/CustomInputText';
import CustomInputPhoneNbr from '../../../../components/controls/CustomInputPhoneNbr';
import CustomDropdown from '../../../../components/controls/CustomDropdown';
import CustomInputMask from '../../../../components/controls/CustomInputMask';

function Address({ control, errors, setSkip }) {

    useEffect(() => {
        setSkip(true)
    })

    const options = [
        { value: 'option1', label: 'option1' },
        { value: 'option2', label: 'option2' },
        { value: 'option3', label: 'option3' },
        { value: 'option4', label: 'option4' },
    ];

    let required = true

    return (
        <>
            <div className=" flex-wrap mb-4 p-fluid">
                <CustomInputText
                    control={control}
                    errors={errors}
                    name="addressName"
                    labelId="addressName"
                    defaultValue=""
                    placeholder="Ex: office, home etc.."
                    required={required}
                    requiredMsg='addressName.required'
                    className=" md:col-12"
                />
                <CustomInputText
                    control={control}
                    errors={errors}
                    name="address1"
                    labelId="address1"
                    defaultValue=""
                    placeholder="Address line 1"
                    required={required}
                    requiredMsg='address1.required'
                    className=" md:col-12"
                />
                <CustomInputText
                    control={control}
                    errors={errors}
                    name="address2"
                    labelId="address2"
                    placeholder="Address line 2"
                    defaultValue=""
                    className=" md:col-12"
                />
                <div className="flex">
                    <CustomDropdown
                        control={control}
                        errors={errors}
                        name="city"
                        labelId="city"
                        defaultValue=""
                        options={options}
                        required={required}
                        requiredMsg="city.required"
                        placeholder="Select city"
                        className="md:col-3"
                    />
                    <CustomDropdown
                        control={control}
                        errors={errors}
                        name="state"
                        labelId="state"
                        defaultValue=""
                        options={options}
                        required={required}
                        requiredMsg="state.required"
                        placeholder="Select state"
                        className="md:col-3"
                    />
                    <CustomDropdown
                        control={control}
                        errors={errors}
                        name="countryCode"
                        labelId="countryCode"
                        defaultValue=""
                        options={options}
                        required={required}
                        requiredMsg="countryCode.required"
                        placeholder="Select country"
                        className="md:col-3"
                    />
                    <CustomInputText
                        control={control}
                        errors={errors}
                        name="postalCode"
                        labelId="postalCode"
                        defaultValue=""
                        placeholder="Zip"
                        required={required}
                        requiredMsg="postalCode.required"
                        className=" md:col-3"
                    />
                </div>
            </div>
        </>
    );
}

export default Address;
