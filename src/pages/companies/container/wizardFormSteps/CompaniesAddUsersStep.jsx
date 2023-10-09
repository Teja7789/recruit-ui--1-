import React from 'react';
import CustomInputText from '../../../../components/controls/CustomInputText';
import CustomDropdown from '../../../../components/controls/CustomDropdown';

function CompaniesAddUsersStep({ control, errors }) {
  let required = false

  const options = [
    { value: 'option1', label: 'option1' },
    { value: 'option2', label: 'option2' },
    { value: 'option3', label: 'option3' },
    { value: 'option4', label: 'option4' },
  ];

  return (
    <>
      <div className=" flex-wrap mb-4 p-fluid">
        <div className="md:flex">
          <CustomInputText
            control={control}
            errors={errors}
            name="firstName"
            labelId="firstName"
            defaultValue=""
            required={required}
            placeholder="First Name"
            requiredMsg="firstName.required"
            className="md:col-6  sm:col-12"
          />
          <CustomInputText
            control={control}
            errors={errors}
            name="lastName"
            labelId="lastName"
            defaultValue=""
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
            className="md:col-12  sm:col-12"
          />
        </div>
        <div className="md:flex">
          <CustomInputText
            control={control}
            errors={errors}
            name="emailID"
            labelId="emailID"
            defaultValue=""
            required={required}
            placeholder="Email id"
            requiredMsg="emailID.required"
            className="md:col-6  sm:col-12"
          />
          <CustomDropdown
            control={control}
            errors={errors}
            name="emailType"
            labelId="emailType"
            defaultValue=""
            options={options}
            required={required}
            requiredMsg="emailType.required"
            placeholder="Select email type"
            className="md:col-6"
          />
        </div>
        <div className="md:flex">
          <CustomInputText
            control={control}
            errors={errors}
            name="phoneNumber"
            labelId="phoneNumber"
            defaultValue=""
            required={required}
            placeholder="Phone number"
            requiredMsg="phoneNumber.required"
            className="md:col-6  sm:col-12"
          />
          <CustomDropdown
            control={control}
            errors={errors}
            name="phoneType"
            labelId="phoneType"
            defaultValue=""
            options={options}
            required={required}
            requiredMsg="phoneType.required"
            placeholder="Select phone type"
            className="md:col-6"
          />
        </div>
      </div>
    </>
  );
}

export default CompaniesAddUsersStep;
