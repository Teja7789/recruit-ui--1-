import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import RequiredLabel from "../../../components/RequiredLabel";
import { Dialog } from "primereact/dialog";
import timesheetContractDropdown from "../../../__mockdata__/timesheetContractDropdown.json"
import CustomDropdown from "../../../components/controls/CustomDropdown";

function Timesheet({ onNext }) {
  const [options, setOptions] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [selectedContract, setSelectedContract] = useState(null);
  const [timings, setTimings] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileTableData, setFileTableData] = useState([]);
  const [displayFileDialog, setDisplayFileDialog] = useState(false);
  const [selectedFileContent, setSelectedFileContent] = useState(null);
  const [fileValidationError, setFileValidationError] = useState("");

  const handleFileView = (file) => {
    setSelectedFileContent(file);
    setDisplayFileDialog(true);
  };

  const hideFileDialog = () => {
    setDisplayFileDialog(false);
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];

    // const documentHandling = useDocumentHandling();
    
    // Check file type
    if (!validateFileType(file)) {
      setFileValidationError("File types are allowed: jpeg, jpg, gif, pdf, svg, png, doc, docx, xls, xlsx");
      setSelectedFile(null);
      return;
    }

    // Check file size
    if (!validateFileSize(file)) {
      setFileValidationError("Maximum file size allowed is 30MB");
      setSelectedFile(null);
      return;
    }

    setFileValidationError("");
    setSelectedFile(file);
  };

  const validateFileType = (file) => {
    const allowedFileTypes = [
      "image/jpeg",
      "image/jpg",
      "image/gif",
      "application/pdf",
      "image/svg+xml",
      "image/png",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ];

    return allowedFileTypes.includes(file.type);
  };

  const validateFileSize = (file) => {
    const maxSizeBytes = 30 * 1024 * 1024;
    return file.size <= maxSizeBytes;
  };

  const addFileToTable = () => {
    if (selectedFile) {
      setFileTableData([...fileTableData, selectedFile]);
      setSelectedFile(null);
      formik.setErrors({ fileTableData: '' });
    }
  };

  const removeFileFromTable = (index) => {
    const updatedTableData = [...fileTableData];
    updatedTableData.splice(index, 1);
    setFileTableData(updatedTableData);
  };


  const renderFileTable = () => {
    return (
      <div>
        <h5>Selected Files:</h5>
        <table className="table">
          <thead>
            <tr>
              <th className="l-width-70">File Name</th>
              <th className="l-width-30">Actions</th>
            </tr>
          </thead>
          <tbody>
            {fileTableData.map((file, index) => (
              <tr key={index}>
                <td className="text-start">{file.name}</td>
                <td className="text-start">
                  <span
                    className="cursorPointer pe-3"
                    onClick={() => handleFileView(file)}
                  >
                    <i className="pi pi-eye"></i>
                  </span>
                  <span
                    className="cursorPointer"
                    onClick={() => removeFileFromTable(index)}
                  >
                    <i className="pi pi-trash"></i>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  useEffect(() => {
    const getData = timesheetContractDropdown.contracts?.map((contract) => ({
      value: contract.id,
      label: contract.name,
      timings: contract.timings,
      employees: contract.employees
    }));
    setOptions(getData);
  }, [])

  const getValidationSchema = (timings) => {
    // Create a dynamic validation schema based on the available timings
    const schema = {};
    timings.forEach((timing) => {
      schema[timing.replace(' ', '').toLowerCase()] = Yup.number().required(`${timing} is required`);
    });
    return Yup.object().shape(schema);
  };

  const validationSchema = Yup.object().shape({
    contract: Yup.string().required('Contract is required'),
    employee: Yup.string().required('Employee is required'),
    startDate: Yup.date().required('Start Date is required').nullable(),
    endDate: Yup.date()
      .required('End Date is required')
      .nullable()
      .min(
        Yup.ref('startDate'),
        'End Date must be greater than or equal to Start Date'
      ),
    uploadFile: Yup.mixed().required('Document is required'),
    // Add validation for the dynamically generated timing fields
    ...getValidationSchema(timings).fields,
  });

  const calculateTotalDays = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const timeDifference = end - start;
    const daysDifference = timeDifference / (1000 * 3600 * 24);

    // Add 1 to include both start and end dates in the count
    return Math.floor(daysDifference) + 1;
  };


  const formik = useFormik({
    initialValues: {
      contract: "",
      employee: "",
      startDate: null,
      endDate: null,
      uploadFile: []
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

      if (fileTableData.length === 0) {
        // Set an error message in formik's errors object
        formik.setErrors({ fileTableData: 'Please add at least one file before proceeding.' });
        return; // Prevent form submission
      }
      // Include selected files in the values object
      values.uploadFile = fileTableData;

      const totalDays = calculateTotalDays(values.startDate, values.endDate);
      console.log("Timesheet Details", { timesheet: values });
      onNext("hours", {
        timesheet: values,
        contract: selectedContract,
        timings: timings,
        timingValues: { ...values },
        startDate: values.startDate,
        endDate: values.endDate,
        totalDays: totalDays,
      });
    }
  });

  const handleContractChange = (event) => {
    const contractId = event.value;
    setSelectedContract(contractId);

    const selectedContract = options.find((opt) => opt.value === contractId);

    if (selectedContract && selectedContract.timings) {
      setTimings(selectedContract.timings);
      const timingInitialValues = {};
      selectedContract.timings.forEach((timing) => {
        timingInitialValues[timing.replace(' ', '').toLowerCase()] = "";
      });

      // Update formik values first
      formik.setValues({
        ...formik.values,
        ...timingInitialValues,
        contract: contractId,  // Set the contract value
      });
    } else {
      setTimings([]);

      // Update formik values even if there are no timings
      formik.setValues({
        ...formik.values,
        contract: contractId,  // Set the contract value
      });
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
        <RequiredLabel label={timing} required />
        <InputText
          name={timing.replace(' ', '').toLowerCase()}
          type="text"
          value={formik.values[timing.replace(' ', '').toLowerCase()]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="---"
          className={
            formik.errors[timing.replace(' ', '').toLowerCase()] && formik.touched[timing.replace(' ', '').toLowerCase()] ? 'p-invalid' : ''
          }
        />
        {formik.errors[timing.replace(' ', '').toLowerCase()] && formik.touched[timing.replace(' ', '').toLowerCase()] && (
          <small className="p-error">{formik.errors[timing.replace(' ', '').toLowerCase()]}</small>
        )}
      </div>
    ));
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='text-center'>
        <h4>TimeSheet</h4>
        <p>Lorem Ipsum is simply dummy text of the printing</p>
      </div>
      <div className='flex flex-wrap gap-3 p-fluid'>
        <div className='row mb-3'>
          <div className='flex-auto col-md-6'>
          <CustomDropdown
                        control={control}
                        errors={errors}
                        name="contract"
                        labelId="contract"
                        defaultValue=""
                        options={options}
                        required={required}
                        errorId="contract.required"
                        placeholder="Select Contract"
                        className="md:col-6"
                    />
            {/* <RequiredLabel label='Contract' required />
            <Dropdown
              name="contract"
              value={formik.values.contract}
              options={options}
              onChange={handleContractChange}
              onBlur={formik.handleBlur}
              placeholder="---"
              className={formik.errors.contract && formik.touched.contract ? 'p-invalid' : ''}
            />
            {formik.errors.contract && formik.touched.contract && (
              <small className="p-error">{formik.errors.contract}</small>
            )} */}
          </div>
          <div className="flex-auto col-md-6">
            <RequiredLabel label="Employee" required />
            <Dropdown
              name="employee"
              value={formik.values.employee}
              options={filteredEmployees}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="---"
              className={
                formik.errors.employee && formik.touched.employee
                  ? "p-invalid"
                  : ""
              }
            />
            {formik.errors.employee && formik.touched.employee && (
              <small className="p-error">{formik.errors.employee}</small>
            )}
          </div>
        </div>

        <div className="row mb-3 gap">
          <div className="col-md-6">
            <label htmlFor="startDate">
              Start Date <span className="text-danger"> *</span>
            </label>
            <Calendar
              id="startDate"
              name="startDate"
              value={formik.values.startDate}
              onChange={(e) => {
                const selectedStartDate = e.value;
                const currentDate = new Date();

                if (selectedStartDate > currentDate) {
                  // If selected start date is after current date, set start date to current date
                  formik.setFieldValue("startDate", currentDate);
                } else {
                  formik.setFieldValue("startDate", selectedStartDate);
                }
              }}
              onBlur={formik.handleBlur}
              placeholder="Start Date"
              dateFormat="mm/dd/yy"
              showIcon
              className={`date-pick-icon ${formik.errors.startDate && formik.touched.startDate ? "p-invalid" : ""
                }`}
            />
            {formik.errors.startDate && formik.touched.startDate && (
              <small className="p-error">{formik.errors.startDate}</small>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="endDate">
              End Date <span className="text-danger"> *</span>
            </label>
            <Calendar
              id="endDate"
              name="endDate"
              placeholder="End Date"
              value={formik.values.endDate}
              onChange={(e) => {
                const selectedEndDate = e.value;
                const currentDate = new Date();

                if (selectedEndDate > currentDate) {
                  // If selected end date is after current date, set end date to current date
                  formik.setFieldValue("endDate", currentDate);
                } else {
                  formik.setFieldValue("endDate", selectedEndDate);
                }
              }}
              onBlur={formik.handleBlur}
              dateFormat="mm/dd/yy"
              showIcon
              className={`date-pick-icon ${formik.errors.endDate && formik.touched.endDate ? "p-invalid" : ""
                }`}
            />

            {formik.errors.endDate && formik.touched.endDate && (
              <small className="p-error">{formik.errors.endDate}</small>
            )}
          </div>
        </div>

        <div className='d-flex gap-3'>
          {renderTimingsFields()}
        </div>

        <div className='flex-auto mb-3 d-flex'>
          <div className='col-md-10'>
            <RequiredLabel label='Upload Document' required />
            <input
              type='file'
              className='form-control'
              name='selectedFile'
              onChange={handleFileInputChange}
            />
            {fileValidationError && (
              <small className="p-error">{fileValidationError}</small>
            )}
            {/* Error message */}
            {formik.errors.fileTableData && (
              <div className="p-error">{formik.errors.fileTableData}</div>
            )}
          </div>
          {/* Add button */}
          <div className='col-md-2'>
            <label className='form-label'> </label>
            <Button
              label='Add'
              severity='secondary'
              className='border border-2 ms-1'
              outlined
              type='button'
              onClick={addFileToTable}
            />
          </div>
        </div>

        <div>
          {/* Display selected files in a table */}
          {fileTableData.length > 0 && renderFileTable()}
        </div>

        {/* Dialog to view file */}
        <Dialog
          visible={displayFileDialog}
          onHide={hideFileDialog}
          header="File Viewer"
          maximizable
          style={{ width: "50vw" }}
          footer={
            <div className="p-d-flex p-ai-center p-jc-between">
              <Button
                label="Close"
                icon="pi pi-times"
                onClick={hideFileDialog}
                className="p-button-text"
              />
            </div>
          }
        >
          <div className="p-fluid">
            {selectedFileContent && (
              <iframe
                src={URL.createObjectURL(selectedFileContent)}
                style={{ width: "100%", height: "500px" }}
                title="File Viewer"
              ></iframe>
            )}
          </div>
        </Dialog>

        <div className="p-mt-4 form-btns">
          <Button label="Next" className='company-primary-btn' type="submit" />
        </div>
      </div>
    </form>
  );
}

export default Timesheet;
