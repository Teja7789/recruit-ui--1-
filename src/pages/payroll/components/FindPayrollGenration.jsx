import React from 'react';
import { Button } from 'primereact/button';
import CustomDropdown from '../../../components/controls/CustomDropdown';
import { useForm } from 'react-hook-form';
import CustomCalender from '../../../components/controls/CustomCalender';
const FindPayrollGenration = () => {

  let required = false;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form>
      <div className='flex-wrap p-fluid flex gap-4'>
        <div className='md:col-2 sm:col-12'>
          <CustomDropdown
            control={control}
            errors={errors}
            name="payruntype"
            labelId="payRunType.label"
            defaultValue=""
            required={required}
            placeholder="--"
          />
        </div>
        <div className='md:col-2  sm:col-12'>
          <CustomCalender
            control={control}
            errors={errors}
            name="startDate"
            labelId="startDate.label"
            defaultValue=''
            showIcon={true}
            required={required}
            className=""
          />
        </div>
        <div className='md:col-2  sm:col-12'>
          <CustomCalender
            control={control}
            errors={errors}
            name="endDate"
            labelId="endDate.label"
            defaultValue=''
            showIcon={true}
            required={required}
            className=""
          />
        </div>
        <div className='mt-5'>
          <Button className='justify-content-center fs-5' style={{ width: "130px", height: "45px" }}>Find</Button>
        </div>
      </div>
    </form>
  )
}

export default FindPayrollGenration