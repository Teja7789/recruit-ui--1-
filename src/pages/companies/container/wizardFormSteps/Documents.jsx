import React, { useEffect } from 'react';
import CustomInputText from '../../../../components/controls/CustomInputText';
import CustomCalender from '../../../../components/controls/CustomCalender';

function Documents({ control, errors, setSkip }) {

  useEffect(() => {
    setSkip(true)
  })

  let required = false
  return (
    <>
      <div className=" flex-wrap gap-3 p-fluid">
        <CustomInputText
          control={control}
          errors={errors}
          name="documentName"
          labelId="documentName"
          defaultValue=""
          required={required}
          placeholder="Document Name"
          requiredMsg="documentName.required"
          className="md:col-12 sm:col-12"
        />

        <div className="flex">
          <CustomInputText
            control={control}
            errors={errors}
            name="docNumber"
            labelId="docNumber"
            placeholder="123456ABC"
            defaultValue=""
            required={required}
            requiredMsg="docNumber.required"
            className="md:col-6  sm:col-12"
          />
          <div className='flex mt-2 gap-2'>
            <CustomCalender
              control={control}
              errors={errors}
              name="issuedDt"
              labelId="issuedDt"
              requiredMsg="issuedDt.required"
              defaultValue=''
              showIcon={true}
              required={required}
              className="md:col-3  sm:col-12"
            />
            <CustomCalender
              control={control}
              errors={errors}
              name="expirationDate"
              labelId="expirationDate"
              requiredMsg="expirationDate.required"
              defaultValue=''
              showIcon={true}
              required={required}
              className="md:col-3  sm:col-12"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Documents;
