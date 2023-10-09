import React, { useState } from 'react';
import CustomInputText from '../../../components/controls/CustomInputText';
import CustomEditor from '../../../components/controls/CustomEditor';

function ExpensesStep({ control, errors }) {
  let required = true
  return (
    <form >
      <div className=' flex-wrap p-fluid mb-5'>

        <div className="flex">
          <CustomInputText
            control={control}
            errors={errors}
            name="title"
            labelId="title.label"
            defaultValue=""
            required={required}
            requiredMsg='title.required'
            className=" md:col-6"
          />

          <CustomInputText
            control={control}
            errors={errors}
            name="amount"
            labelId="amount.label"
            defaultValue=""
            required={required}
            requiredMsg='amount.required'
            className=" md:col-6"
          />
        </div>


        <div>
          <CustomEditor
            control={control}
            errors={errors}
            name="description"
            labelId="description.label"
            defaultValue=""
            className=" md:col-12"
            style={{height:"150px"}}

            // pt={{
            //   content: { style: { height: '320px' } },

            // }}
          />
        </div>

      </div>
    </form>
  )
}

export default ExpensesStep