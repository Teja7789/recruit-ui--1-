import React, { useEffect, useState } from "react";
import CustomDropdown from "../../../components/controls/CustomDropdown";
import timesheetContractDropdown from "../../../assets/__mockData__/timesheetContractDropdown.json"
import CustomInputText from "../../../components/controls/CustomInputText";
import CustomCalender from "../../../components/controls/CustomCalender";

function TimesheetStep({ control, errors, setValue, formData }) {
  const [options, setOptions] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [timings, setTimings] = useState([]);
 

  let required = true

  useEffect(() => {
    const getData = timesheetContractDropdown.contracts?.map((contract) => ({
      value: contract.id,
      label: contract.name,
      timings: contract.timings,
      employees: contract.employees
    }));
    setOptions(getData);
  }, [])


  const handleContractChange = (event) => {
    const contractId = event.value;

    const selectedContract = options.find((opt) => opt.value === contractId);

    if (selectedContract && selectedContract.timings) {
      setTimings(selectedContract.timings);
      const timingInitialValues = {};
      selectedContract.timings.forEach((timing) => {
        timingInitialValues[timing.replace(' ', '').toLowerCase()] = "";
      });

      // Update form values using React Hook Form's setValue
      Object.keys(timingInitialValues).forEach((fieldName) => {
        setValue(fieldName, timingInitialValues[fieldName]);
      });
      // Set the contract value
      setValue('contract', contractId);
    } else {
      setTimings([]);

      // Update form values using React Hook Form's setValue
      setValue('contract', contractId);
    }

    if (selectedContract && selectedContract.employees) {
      const contractEmployees = selectedContract.employees.map((employee) => ({
        value: employee.id,
        label: employee.name,
      }));
      setFilteredEmployees(contractEmployees);
    } else {
      setFilteredEmployees([]);
    }
  };

  const renderTimingsFields = () => {
    return timings.map((timing) => (
      <div className='flex-auto' key={timing}>
        <CustomInputText
          control={control}
          errors={errors}
          name={timing.replace(' ', '').toLowerCase()}
          labelId={timing}
          defaultValue=""
          required={required}
          requiredMsg='companme.required'
          className=" md:col-12"
        />
      </div>
    ));
  };

  return (
    <form >
      <div className=' flex-wrap p-fluid mb-5'>
        <div className="flex">
          <CustomDropdown
            control={control}
            errors={errors}
            name="contract"
            labelId="contract.label"
            defaultValue=""
            options={options}
            required={required}
            onChange={handleContractChange}
            requiredMsg="contract.required"
            placeholder="Select Contract"
            className="md:col-6"
          />

          <CustomDropdown
            control={control}
            errors={errors}
            name="employee"
            labelId="employee.label"
            defaultValue=""
            options={filteredEmployees}
            required={required}
            requiredMsg="employee.required"
            placeholder="Select Employee"
            className="md:col-6"
          />

        </div>
        <div className='flex mt-2 gap-2'>
          <CustomCalender
            control={control}
            errors={errors}
            name="startDate"
            labelId="startDate.label"
            requiredMsg="startDate.required"
            defaultValue=''
            showIcon={true}
            required={required}
            className="md:col-6  sm:col-12"
          />
          <CustomCalender
            control={control}
            errors={errors}
            name="endDate"
            labelId="endDate.label"
            requiredMsg="endDate.required"
            defaultValue=''
            showIcon={true}
            required={required}
            className="md:col-6  sm:col-12"
          />
        </div>

        <div className='d-flex gap-3'>
          {renderTimingsFields()}
        </div>

      </div>
    </form>
  );
}

export default TimesheetStep;
