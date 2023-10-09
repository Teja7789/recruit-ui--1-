import React, { useState, useEffect } from 'react';
import CustomInputText from '../../../../components/controls/CustomInputText';
import CustomInputPhoneNbr from '../../../../components/controls/CustomInputPhoneNbr';
import CustomDropdown from '../../../../components/controls/CustomDropdown';
import CustomInputMask from '../../../../components/controls/CustomInputMask';
import plusIcon from '../../../../assets/images/plusIcon.svg'
import CustomDomainInput from './../../../../components/controls/CustomDomainInput';

function CompanyProfileStep({ control, errors, watch, setValue }) {
    const [add, setAdd] = useState([]);

    const options = [
        { value: 'option1', label: 'option1' },
        { value: 'option2', label: 'option2' },
        { value: 'option3', label: 'option3' },
        { value: 'option4', label: 'option4' },
    ];

    // desable validations
    let required = true;

    const watchFields = watch();
    const final = watchFields.domain;


    const normalizeDomain = (domain) => {
        // Ensure the domain is lowercase and remove "http://" or "https://"
        const lowerDomain = domain.toLowerCase().replace(/^(https?:\/\/)?(www\.)?/, '');
        return `https://www.${lowerDomain}`;
    };

    const isValidUrl = (url) => {
        const urlPattern = /^(https:\/\/www\.|http:\/\/www\.|www\.)[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*(\.[A-Za-z]{2,6})(:[0-9]{1,5})?(\/.*)?$/;
        return urlPattern.test(url);
    };

    const getTopLevelDomain = (domain) => {
        // Split the domain by periods and get the last two parts
        const parts = domain.split('.');
        const topLevelDomain = parts.slice(-2).join('.');
        return topLevelDomain;
    };

    const isSubdomain = (newDomain, existingDomains) => {
        const topLevelDomain = getTopLevelDomain(newDomain);
        return existingDomains.some((existingDomain) => {
            const normalizedExistingDomain = normalizeDomain(existingDomain);
            const existingTopLevelDomain = getTopLevelDomain(normalizedExistingDomain);
            return topLevelDomain === existingTopLevelDomain;
        });
    };

    const handleDomainAdd = () => {
        const domainToAdd = final.trim();
        const normalizedDomain = normalizeDomain(domainToAdd);

        if (
            domainToAdd &&
            !add.includes(normalizedDomain) &&
            isValidUrl(normalizedDomain) &&
            !isSubdomain(normalizedDomain, add)
        ) {
            setAdd([...add, normalizedDomain]);
            setValue('domain', ''); // Clear the domain field
        } else {
            // alert("invalid URL or duplicate domain")
        }
    };

    const handleDomainDelete = (domainToDelete) => {
        setAdd((current) =>
            current.filter((domain) => {
                return domain !== domainToDelete;
            })
        );
    };
    // console.log(add, 'add1');
    return (
        <>
            <div className=" flex-wrap p-fluid mb-8">
                <CustomInputText
                    control={control}
                    errors={errors}
                    name="name"
                    labelId="companyName"
                    defaultValue=""
                    required={required}
                    requiredMsg="companyName.required"
                    className=" md:col-12"
                />
                <div className="flex">
                    <CustomInputPhoneNbr
                        control={control}
                        errors={errors}
                        name="phoneNumber"
                        labelId="phoneNbr"
                        maskFormat="(999) 999-9999"
                        defaultValue=""
                        required={required}
                        requiredMsg="phoneNumber.required"
                        className=" md:col-6"
                    />
                    <CustomInputMask
                        control={control}
                        errors={errors}
                        name="fax"
                        labelId="faxNbr"
                        mask="(999) 999-9999"
                        defaultValue=""
                        // required={required}
                        requiredMsg="fax.required"
                        className="md:col-6"
                    />
                </div>
                <div className="flex">
                    <CustomDropdown
                        control={control}
                        errors={errors}
                        name="taxClassification"
                        labelId="taxClassification"
                        defaultValue=""
                        options={options}
                        required={required}
                        requiredMsg="taxClassification.required"
                        placeholder="Select Tax Classification"
                        className="md:col-6"
                    />
                    <CustomDropdown
                        control={control}
                        errors={errors}
                        name="stateOfIncorporation"
                        labelId="stateIncorporation"
                        defaultValue=""
                        options={options}
                        required={required}
                        placeholder="Select State of incorporation"
                        requiredMsg="stateOfIncorporation.required"
                        className="md:col-3"
                    />
                    <CustomInputMask
                        control={control}
                        errors={errors}
                        name="taxId"
                        labelId="ein"
                        mask="99-9999999"
                        defaultValue=""
                        required={required}
                        requiredMsg="ein.required"
                        className="md:col-3"
                    />
                </div>

                <div className="flex">
                    <CustomDomainInput
                        control={control}
                        errors={errors}
                        name="domain"
                        labelId="domain"
                        defaultValue=""
                        required={required}
                        requiredMsg="domain.required"
                        rules={{
                            validate: (value) => {
                                const normalizedDomain = normalizeDomain(value);
                                if (!isValidUrl(normalizedDomain)) {
                                    return "Invalid URL format";
                                }
                                if (isSubdomain(normalizedDomain, add)) {
                                    return "Domain already exists";
                                }
                                return true;
                            },
                        }}
                        className="md:col-11"
                    />
                    <img src={plusIcon} alt="plusIcon" className="cursor-pointer ms-2" onClick={handleDomainAdd} />
                </div>

                <div>
                    {add.length > 0 && (
                        <>
                            <h4 className='mb-3 ms-2'>Approved Domains</h4>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Domain Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {add.map((i) => (
                                        <tr key={i}>
                                            <td>{i}</td>
                                            <td>
                                                <i className="pi pi-trash cursor-pointer" onClick={() => handleDomainDelete(i)}></i>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    )}
                </div>

            </div>
        </>
    );
}

export default CompanyProfileStep;
