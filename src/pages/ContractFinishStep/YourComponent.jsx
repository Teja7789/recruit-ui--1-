// import React, { useEffect, useState } from 'react';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import axios from 'axios';

// const YourComponent = () => {
//   const [data, setData] = useState([]);
//   const [pageNumber, setPageNumber] = useState(2); // Initial page number
//   const [pageSize, setPageSize] = useState(3); // Initial page size
//   const [totalRecords, setTotalRecords] = useState(0);

//   useEffect(() => {
//     fetchData();
//   }, [pageNumber, pageSize]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         `http://40.114.32.67:8080/recruit-0.0.1-SNAPSHOT/api/raves/v1/organization?offset=${pageNumber}&limit=${pageSize}`
//       );
//       setData(response.data.content);
//       setTotalRecords(response.data.totalElements);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const onPageChange = (event) => {
//     setPageNumber(event.page);
//     setPageSize(event.rows);
//   };

//   return (
//     <div>
//       <DataTable
//         value={data}
//         paginator
//         rows={pageSize}
//         totalRecords={totalRecords}
//         onPage={onPageChange}
//         page={pageNumber}
//       >
//         {/* Define your columns here */}
//         <Column field="name" header="Name" />
//         <Column field="authSignataryEmail" header="Email" />
//         {/* Add more columns as needed */}
//       </DataTable>
//     </div>
//   );
// };

// export default YourComponent;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { Button } from "primereact/button";
// import { Ripple } from "primereact/ripple";
// import { Dropdown } from "primereact/dropdown";
// import { InputText } from "primereact/inputtext";
// import { classNames } from "primereact/utils";

// const YourComponent = () => {
//   const [organizations, setOrganizations] = useState([]);
//   const [first, setFirst] = useState(5);
//   const [rows, setRows] = useState(5);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalRecords, setTotalRecords] = useState(0);
//   const [pageInputTooltip, setPageInputTooltip] = useState(
//     "Press 'Enter' key to go to this page."
//   );

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `http://40.114.32.67:8080/recruit-0.0.1-SNAPSHOT/api/raves/v1/organization?offset=${first}&limit=${rows}`
//         );
//         setOrganizations(response.data.content);
//         setTotalRecords(response.data.totalElements);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [first, rows]);

//   const onCustomPage = (event) => {
//     setFirst(event.first);
//     setRows(event.rows);
//     setCurrentPage(event.page + 1);
//   };

//   const onPageInputKeyDown = (event, options) => {
//     if (event.key === "Enter") {
//       const page = parseInt(currentPage);
//       if (page < 1 || page > options.totalPages) {
//         setPageInputTooltip(
//           `Value must be between 1 and ${options.totalPages}.`
//         );
//       } else {
//         const newFirst = currentPage ? options.rows * (page - 1) : 0;
//         setFirst(newFirst);
//         setPageInputTooltip("Press 'Enter' key to go to this page.");
//       }
//     }
//   };

//   const onPageInputChange = (event) => {
//     setCurrentPage(event.target.value);
//   };

//   const template = {
//     layout: "PrevPageLink PageLinks NextPageLink CurrentPageReport",
//     PrevPageLink: (options) => {
//       return (
//         <button
//           type="button"
//           className={options.className}
//           onClick={options.onClick}
//           disabled={options.disabled}
//         >
//           <span className="p-3">Previous</span>
//           <Ripple />
//         </button>
//       );
//     },
//     NextPageLink: (options) => {
//       return (
//         <button
//           type="button"
//           className={options.className}
//           onClick={options.onClick}
//           disabled={options.disabled}
//         >
//           <span className="p-3">Next</span>
//           <Ripple />
//         </button>
//       );
//     },
//     PageLinks: (options) => {
//       if (
//         (options.view.startPage === options.page &&
//           options.view.startPage !== 0) ||
//         (options.view.endPage === options.page &&
//           options.page + 1 !== options.totalPages)
//       ) {
//         const className = classNames(options.className, { "p-disabled": true });

//         return (
//           <span className={className} style={{ userSelect: "none" }}>
//             ...
//           </span>
//         );
//       }

//       return (
//         <button
//           type="button"
//           className={options.className}
//           onClick={options.onClick}
//         >
//           {options.page + 1}
//           <Ripple />
//         </button>
//       );
//     },
//     RowsPerPageDropdown: (options) => {
//       const dropdownOptions = [
//         { label: 10, value: 10 },
//         { label: 20, value: 20 },
//         { label: 50, value: 50 },
//         { label: "All", value: options.totalRecords },
//       ];

//       return (
//         <Dropdown
//           value={options.value}
//           options={dropdownOptions}
//           onChange={options.onChange}
//         />
//       );
//     },
//     CurrentPageReport: (options) => {
//       return (
//         <span
//           className="mx-3"
//           style={{ color: "var(--text-color)", userSelect: "none" }}
//         >
//           Go to{" "}
//           <InputText
//             size="2"
//             className="ml-1"
//             value={currentPage}
//             tooltip={pageInputTooltip}
//             onKeyDown={(e) => onPageInputKeyDown(e, options)}
//             onChange={onPageInputChange}
//           />
//         </span>
//       );
//     },
//   };

//   return (
//     <div>
//       <div className="card">
//         <h5>Organization Data with Paginator</h5>
//         <DataTable
//           value={organizations}
//           paginator
//           paginatorTemplate={template}
//           first={first}
//           rows={rows}
//           onPage={onCustomPage}
//           totalRecords={totalRecords}
//         >
//           <Column field="name" header="Name"></Column>
//           <Column field="authSignataryFn" header="Auth Signatory First Name"></Column>
//           <Column field="authSignataryLn" header="Auth Signatory Last Name"></Column>
//           <Column field="authSignataryEmail" header="Auth Signatory Email"></Column>
//           <Column field="authSignataryPhone" header="Auth Signatory Phone"></Column>
//           <Column field="createdDt" header="Created Date"></Column>
//           <Column field="statusCode" header="Status Code"></Column>
//         </DataTable>
//       </div>
//     </div>
//   );
// };

// export default YourComponent;

// import "primeicons/primeicons.css";
// import "primereact/resources/themes/lara-light-indigo/theme.css";
// import "primereact/resources/primereact.css";
// import "primeflex/primeflex.css";
// import "../../index.css";
// import ReactDOM from "react-dom";

// import React, { useState, useEffect } from "react";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { Button } from "primereact/button";
// import { Ripple } from "primereact/ripple";
// import { Dropdown } from "primereact/dropdown";
// import { InputText } from "primereact/inputtext";
// // import { CustomerService } from "../service/CustomerService";
// import { classNames } from "primereact/utils";

// const YourComponent = () => {
//   const [customers1, setCustomers1] = useState([]);
//   const [customers2, setCustomers2] = useState([]);
//   const [customers3, setCustomers3] = useState([]);
//   const [first1, setFirst1] = useState(0);
//   const [rows1, setRows1] = useState(10);
//   const [currentPage, setCurrentPage] = useState(1);
//   // const [pageInputTooltip, setPageInputTooltip] = useState(
//   //   "Press 'Enter' key to go to this page."
//   // );

//   // const customerService = new CustomerService();

//   const onCustomPage1 = (event) => {
//     setFirst1(event.first);
//     setRows1(event.rows);
//     setCurrentPage(event.page + 1);
//   };

//   // const onPageInputKeyDown = (event, options) => {
//   //   if (event.key === "Enter") {
//   //     const page = parseInt(currentPage);
//   //     if (page < 1 || page > options.totalPages) {
//   //       setPageInputTooltip(
//   //         `Value must be between 1 and ${options.totalPages}.`
//   //       );
//   //     } else {
//   //       const first = currentPage ? options.rows * (page - 1) : 0;

//   //       setFirst1(first);
//   //       // setPageInputTooltip("Press 'Enter' key to go to this page.");
//   //     }
//   //   }
//   // };

//   const onPageInputChange = (event) => {
//     setCurrentPage(event.target.value);
//   };
//  useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(response => response.json())
//       .then(json => setCustomers2(json))
//   }, [])
//   // useEffect(() => {
//   //   // customerService.getCustomersLarge().then((data) => setCustomers1(data));
//   //   // customerService.getCustomersLarge().then((data) => {
//   //     setCustomers2(data);
//   //     console.log(data);
//   //   // });
//   //   // customerService.getCustomersLarge().then((data) => setCustomers3(data));
//   // }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   const template1 = {
//     layout: "PrevPageLink PageLinks NextPageLink CurrentPageReport",
//     PrevPageLink: (options) => {
//       return (
//         <button
//           type="button"
//           className={options.className}
//           onClick={options.onClick}
//           disabled={options.disabled}
//         >
//           <span className="p-3">Previous</span>
//           <Ripple />
//         </button>
//       );
//     },
//     NextPageLink: (options) => {
//       return (
//         <button
//           type="button"
//           className={options.className}
//           onClick={options.onClick}
//           disabled={options.disabled}
//         >
//           <span className="p-3">Next</span>
//           <Ripple />
//         </button>
//       );
//     },
//     PageLinks: (options) => {
//       if (
//         (options.view.startPage === options.page &&
//           options.view.startPage !== 0) ||
//         (options.view.endPage === options.page &&
//           options.page + 1 !== options.totalPages)
//       ) {
//         const className = classNames(options.className, { "p-disabled": true });

//         return (
//           <span className={className} style={{ userSelect: "none" }}>
//             ...
//           </span>
//         );
//       }

//       return (
//         <button
//           type="button"
//           className={options.className}
//           onClick={options.onClick}
//         >
//           {options.page + 1}
//           <Ripple />
//         </button>
//       );
//     },
//     RowsPerPageDropdown: (options) => {
//       const dropdownOptions = [
//         { label: 10, value: 10 },
//         { label: 20, value: 20 },
//         { label: 50, value: 50 },
//         { label: "All", value: options.totalRecords }
//       ];

//       return (
//         <Dropdown
//           value={options.value}
//           options={dropdownOptions}
//           onChange={options.onChange}
//         />
//       );
//     },
//     // CurrentPageReport: (options) => {
//     //   return (
//     //     <span
//     //       className="mx-3"
//     //       style={{ color: "var(--text-color)", userSelect: "none" }}
//     //     >
//     //       Go to{" "}
//     //       <InputText
//     //         size="2"
//     //         className="ml-1"
//     //         value={currentPage}
//     //         tooltip={pageInputTooltip}
//     //         onKeyDown={(e) => onPageInputKeyDown(e, options)}
//     //         onChange={onPageInputChange}
//     //       />
//     //     </span>
//     //   );
//     // }
//   };

//   return (
//     <div>
//       <div className="card">
//         <h5>Custom Paginator Template</h5>
//         <DataTable
//           id="newTable"
//           scrollable="true"
//           scrollDirection="horizontal"
//           scrollableWidth="250px"
//           value={customers2}
//           paginator
//           paginatorTemplate={template1}
//           first={first1}
//           rows={rows1}
//           onPage={onCustomPage1}
//           responsiveLayout="scroll"
//         >
//           {/* <Column
//             field="name"
//             header="Name"
//             footer="12"
//             style={{ width: "16.66%" }}
//           ></Column> */}
//           <Column
//             field="title"
//             header="Name"
//             // footer="12"
//             style={{ width: "16.66%" }}
//           ></Column>
//           <Column
//             field="body"
//             header="Name"
//             // footer="12"
//             style={{ width: "16.66%" }}
//           ></Column>
//           {/* <Column
//             field="country.name"
//             header="Country"
//             footer="12"
//             style={{ width: "16.66%" }}
//           ></Column> */}
//           {/* <Column
//             field="company"
//             header="Company"
//             footer="5"
//             style={{ width: "16.66%" }}
//           ></Column> */}
//           {/* <Column
//             field="representative.name"
//             header="Representative"
//             footer="24"
//             style={{ width: "16.66%" }}
//           ></Column> */}
//         </DataTable>
//       </div>
//     </div>
//   );
// };

// export default YourComponent;


// import React, { useState, useEffect } from "react";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { Ripple } from "primereact/ripple";

// import { classNames } from "primereact/utils";

// const YourComponent = () => {
//   const [customers2, setCustomers2] = useState([]);

//   const [first1, setFirst1] = useState(0);
//   const [rows1, setRows1] = useState(10);


//   const onCustomPage1 = (event) => {
//     setFirst1(event.first);
//     setRows1(event.rows);
//   };




//  useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(response => response.json())
//       .then(json => setCustomers2(json))
//   }, [])


//   const template1 = {
//     layout: "PrevPageLink PageLinks NextPageLink CurrentPageReport",
//     PrevPageLink: (options) => {
//       return (
//         <button
//           type="button"
//           className={options.className}
//           onClick={options.onClick}
//           disabled={options.disabled}
//         >
//           <span className="p-3">Previous</span>
//           <Ripple />
//         </button>
//       );
//     },
//     NextPageLink: (options) => {
//       return (
//         <button
//           type="button"
//           className={options.className}
//           onClick={options.onClick}
//           disabled={options.disabled}
//         >
//           <span className="p-3">Next</span>
//           <Ripple />
//         </button>
//       );
//     },
//     PageLinks: (options) => {
//       if (
//         (options.view.startPage === options.page &&
//           options.view.startPage !== 0) ||
//         (options.view.endPage === options.page &&
//           options.page + 1 !== options.totalPages)
//       ) {
//         const className = classNames(options.className, { "p-disabled": true });

//         return (
//           <span className={className} style={{ userSelect: "none" }}>
//             ...
//           </span>
//         );
//       }

//       return (
//         <button
//           type="button"
//           className={options.className}
//           onClick={options.onClick}
//         >
//           {options.page + 1}
//           <Ripple />
//         </button>
//       );
//     },

//   };

//   return (
//     <div>
//       <div className="card">
//         <h5>Custom Paginator Template</h5>
//         <DataTable
//           id="newTable"
//           scrollable="true"
//           scrollDirection="horizontal"
//           scrollableWidth="250px"
//           value={customers2}
//           paginator
//           paginatorTemplate={template1}
//           first={first1}
//           rows={rows1}
//           onPage={onCustomPage1}
//         >
          
//           <Column
//             field="title"
//             header="Name"
           
//             style={{ width: "16.66%" }}
//           ></Column>
//           <Column
//             field="body"
//             header="Name"
            
//             style={{ width: "16.66%" }}
//           ></Column>
//         </DataTable>
//       </div>
//     </div>
//   );
// };

// export default YourComponent;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { Button } from "primereact/button";
// import { Ripple } from "primereact/ripple";
// import { Dropdown } from "primereact/dropdown";
// import { InputText } from "primereact/inputtext";
// import { classNames } from "primereact/utils";

// const YourComponent = () => {
//   const [organizations, setOrganizations] = useState([]);
//   const [first, setFirst] = useState(11);
//   const [rows, setRows] = useState(6);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalRecords, setTotalRecords] = useState(0);
//   const [pageInputTooltip, setPageInputTooltip] = useState(
//     "Press 'Enter' key to go to this page."
//   );

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `http://40.114.32.67:8080/recruit-0.0.1-SNAPSHOT/api/raves/v1/organization?offset=${first}&limit=${rows}`
//         );
//         setOrganizations(response.data.content);
//         setTotalRecords(response.data.totalElements);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [first, rows]);

//   const onCustomPage = (event) => {
//     setFirst(event.first);
//     setRows(event.rows);
//     setCurrentPage(event.page + 1);
//   };

//   const onPageInputKeyDown = (event, options) => {
//     if (event.key === "Enter") {
//       const page = parseInt(currentPage);
//       if (page < 1 || page > options.totalPages) {
//         setPageInputTooltip(
//           `Value must be between 1 and ${options.totalPages}.`
//         );
//       } else {
//         const newFirst = currentPage ? options.rows * (page - 1) : 0;
//         setFirst(newFirst);
//         setPageInputTooltip("Press 'Enter' key to go to this page.");
//       }
//     }
//   };

//   const onPageInputChange = (event) => {
//     setCurrentPage(event.target.value);
//   };

//   const template = {
//     layout: "PrevPageLink PageLinks NextPageLink CurrentPageReport",
//     PrevPageLink: (options) => {
//       return (
//         <button
//           type="button"
//           className={options.className}
//           onClick={options.onClick}
//           disabled={options.disabled}
//         >
//           <span className="p-3">Previous</span>
//           <Ripple />
//         </button>
//       );
//     },
//     NextPageLink: (options) => {
//       return (
//         <button
//           type="button"
//           className={options.className}
//           onClick={options.onClick}
//           disabled={options.disabled}
//         >
//           <span className="p-3">Next</span>
//           <Ripple />
//         </button>
//       );
//     },
//     PageLinks: (options) => {
//       if (
//         (options.view.startPage === options.page &&
//           options.view.startPage !== 0) ||
//         (options.view.endPage === options.page &&
//           options.page + 1 !== options.totalPages)
//       ) {
//         const className = classNames(options.className, { "p-disabled": true });

//         return (
//           <span className={className} style={{ userSelect: "none" }}>
//             ...
//           </span>
//         );
//       }

//       return (
//         <button
//           type="button"
//           className={options.className}
//           onClick={options.onClick}
//         >
//           {options.page + 1}
//           <Ripple />
//         </button>
//       );
//     },
//     RowsPerPageDropdown: (options) => {
//       const dropdownOptions = [
//         { label: 10, value: 10 },
//         { label: 20, value: 20 },
//         { label: 50, value: 50 },
//         { label: "All", value: options.totalRecords },
//       ];

//       return (
//         <Dropdown
//           value={options.value}
//           options={dropdownOptions}
//           onChange={options.onChange}
//         />
//       );
//     },
//     // CurrentPageReport: (options) => {
//     //   return (
//     //     <span
//     //       className="mx-3"
//     //       style={{ color: "var(--text-color)", userSelect: "none" }}
//     //     >
//     //       Go to{" "}
//     //       <InputText
//     //         size="2"
//     //         className="ml-1"
//     //         value={currentPage}
//     //         tooltip={pageInputTooltip}
//     //         onKeyDown={(e) => onPageInputKeyDown(e, options)}
//     //         onChange={onPageInputChange}
//     //       />
//     //     </span>
//     //   );
//     // },
//   };

//   return (
//     <div>
//       <div className="card">
//         <h5>Organization Data with Paginator</h5>
//         <DataTable
//           value={organizations}
//           paginator
//           paginatorTemplate={template}
//           first={first}
//           rows={rows}
//           onPage={onCustomPage}
//           totalRecords={totalRecords}
//         >
//           <Column field="name" header="Name"></Column>
//           <Column field="authSignataryFn" header="Auth Signatory First Name"></Column>
//           <Column field="authSignataryLn" header="Auth Signatory Last Name"></Column>
//           <Column field="authSignataryEmail" header="Auth Signatory Email"></Column>
//           <Column field="authSignataryPhone" header="Auth Signatory Phone"></Column>
//           <Column field="createdDt" header="Created Date"></Column>
//           <Column field="statusCode" header="Status Code"></Column>
//         </DataTable>
//       </div>
//     </div>
//   );
// };

// export default YourComponent;


// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { Dropdown } from "primereact/dropdown";
// import { InputText } from "primereact/inputtext";
// import { fetchOrganizations } from "../PaginationTable/actions";
// // import { fetchOrganizations } from "./actions";

// const YourComponent = () => {
//   const dispatch = useDispatch();
//   const organizations = useSelector((state) => state.yourReducer.organizations);
//   const totalRecords = useSelector((state) => state.yourReducer.totalRecords);
// // console.log(organizations,"org")
// console.log(totalRecords,"totalRecords")
//   useEffect(() => {
//     dispatch(fetchOrganizations(0, 6));
//   }, [dispatch]);

// //   ... (rest of your component remains the same)
// };

// export default YourComponent;


// YourComponent.js

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { Dropdown } from "primereact/dropdown";
// import { InputText } from "primereact/inputtext";
// import { fetchOrganizations } from "../PaginationTable/actions";
// import { Ripple } from "primereact/ripple";
// import { classNames } from "primereact/utils";

// const YourComponent = () => {
//  const dispatch = useDispatch();
//   const organizations = useSelector((state) => state.yourReducer.organizations);
//   const totalRecords = useSelector((state) => state.yourReducer.totalRecords);
//   const [first, setFirst] = useState(3); // Change the initial state to 0
//   const [rows, setRows] = useState(3);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageInputTooltip, setPageInputTooltip] = useState(
//     "Press 'Enter' key to go to this page."
//   );

//   useEffect(() => {
//     dispatch(fetchOrganizations(first, rows));
//   }, [dispatch, first, rows]);

//   const onCustomPage = (event) => {
//     setFirst(event.first);
//     setRows(event.rows);
//     setCurrentPage(event.page + 1);
//   };

//   const onPageInputKeyDown = (event, options) => {
//     if (event.key === "Enter") {
//       const page = parseInt(currentPage);
//       if (page < 1 || page > options.totalPages) {
//         setPageInputTooltip(
//           `Value must be between 1 and ${options.totalPages}.`
//         );
//       } else {
//         const newFirst = currentPage ? options.rows * (page - 1) : 0;
//         setFirst(newFirst);
//         setPageInputTooltip("Press 'Enter' key to go to this page.");
//       }
//     }
//   };

//   const onPageInputChange = (event) => {
//     setCurrentPage(event.target.value);
//   };

//   // const template = {
//   //   // ... (your existing template definition)
//   // };

//     const template = {
//     layout: "PrevPageLink PageLinks NextPageLink CurrentPageReport",
//     PrevPageLink: (options) => {
//       return (
//         <button
//           type="button"
//           className={options.className}
//           onClick={options.onClick}
//           disabled={options.disabled}
//         >
//           <span className="p-3">Previous</span>
//           <Ripple />
//         </button>
//       );
//     },
//     NextPageLink: (options) => {
//       return (
//         <button
//           type="button"
//           className={options.className}
//           onClick={options.onClick}
//           disabled={options.disabled}
//         >
//           <span className="p-3">Next</span>
//           <Ripple />
//         </button>
//       );
//     },
//     PageLinks: (options) => {
//       if (
//         (options.view.startPage === options.page &&
//           options.view.startPage !== 0) ||
//         (options.view.endPage === options.page &&
//           options.page + 1 !== options.totalPages)
//       ) {
//         const className = classNames(options.className, { "p-disabled": true });

//         return (
//           <span className={className} style={{ userSelect: "none" }}>
//             ...
//           </span>
//         );
//       }

//       return (
//         <button
//           type="button"
//           className={options.className}
//           onClick={options.onClick}
//         >
//           {options.page + 1}
//           <Ripple />
//         </button>
//       );
//     },
//     RowsPerPageDropdown: (options) => {
//       const dropdownOptions = [
//         { label: 10, value: 10 },
//         { label: 20, value: 20 },
//         { label: 50, value: 50 },
//         { label: "All", value: options.totalRecords },
//       ];

//       return (
//         <Dropdown
//           value={options.value}
//           options={dropdownOptions}
//           onChange={options.onChange}
//         />
//       );
//     },
//     CurrentPageReport: (options) => {
//       return (
//         <span
//           className="mx-3"
//           style={{ color: "var(--text-color)", userSelect: "none" }}
//         >
//           Go to{" "}
//           <InputText
//             size="2"
//             className="ml-1"
//             value={currentPage}
//             tooltip={pageInputTooltip}
//             onKeyDown={(e) => onPageInputKeyDown(e, options)}
//             onChange={onPageInputChange}
//           />
//         </span>
//       );
//     },
//   };


//   return (
//     <div>
//       <div className="card">
//         <h5>Organization Data with Paginator</h5>
//         <DataTable
//           value={organizations}
//           paginator
//           paginatorTemplate={template}
//           first={first}
//           rows={rows}
//           onPage={onCustomPage}
//           totalRecords={totalRecords}
//         >
//           <Column field="name" header="Name"></Column>
//           <Column
//             field="authSignataryFn"
//             header="Auth Signatory First Name"
//           ></Column>
//           <Column
//             field="authSignataryLn"
//             header="Auth Signatory Last Name"
//           ></Column>
//           <Column
//             field="authSignataryEmail"
//             header="Auth Signatory Email"
//           ></Column>
//           <Column
//             field="authSignataryPhone"
//             header="Auth Signatory Phone"
//           ></Column>
//           <Column field="createdDt" header="Created Date"></Column>
//           <Column field="statusCode" header="Status Code"></Column>
//         </DataTable>
//       </div>
//     </div>
//   );
// };

// export default YourComponent;

// Working
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { Dropdown } from "primereact/dropdown";
// import { InputText } from "primereact/inputtext";
// import { fetchOrganizations } from "../PaginationTable/actions";
// import { Ripple } from "primereact/ripple";
// import { Paginator } from "primereact/paginator";
// import { classNames } from "primereact/utils";

// const YourComponent = () => {
//   const dispatch = useDispatch();
//   const organizations = useSelector((state) => state.yourReducer.organizations);
//   const totalRecords = useSelector((state) => state.yourReducer.totalRecords);
//   const {pageable , navigationData} = useSelector((state) => state.yourReducer);
//   // const [update,setUpdate] = useState({
//   //   // pageable.offset
//   // });

//   console.log(navigationData ,"navigation - pageable");
//   // console.log(totalRecords,"totalRecords");
//   // const [naviagation,setNavigation] = useState({})
//   const [first, setFirst] = useState(1);
//   const [rows, setRows] = useState(1);
//   const [currentPage, setCurrentPage] = useState(1);
//   // const [pageInputTooltip, setPageInputTooltip] = useState(
//   //   "Press 'Enter' key to go to this page."
//   // );

//   useEffect(() => {
//     dispatch(fetchOrganizations(first, rows));
//   }, 
//   [dispatch, first, rows]
//   );

//   const onPageChange = (event) => {
//     setFirst(event.first);
//     // setRows(event.page +1);
//     // setFirst(event.pageable.offset);
//     setCurrentPage(event.page + 1);
//   };

//   // const onPageInputKeyDown = (event, options) => {
//   //   if (event.key === "Enter") {
//   //     const page = parseInt(currentPage);
//   //     if (page < 1 || page > options.totalPages) {
//   //       setPageInputTooltip(
//   //         `Value must be between 1 and ${options.totalPages}.`
//   //       );
//   //     } else {
//   //       const newFirst = currentPage ? options.rows * (page - 1) : 0;
//   //       setFirst(newFirst);
//   //       setPageInputTooltip("Press 'Enter' key to go to this page.");
//   //     }
//   //   }
//   // };

//   // const onPageInputChange = (event) => {
//   //   setCurrentPage(event.target.value);
//   // };

//   // const template = {
//   //   layout: "PrevPageLink PageLinks NextPageLink CurrentPageReport",
//   //   PrevPageLink: (options) => {
//   //     return (
//   //       <button
//   //         type="button"
//   //         className={options.className}
//   //         onClick={options.onClick}
//   //         disabled={options.disabled}
//   //       >
//   //         <span className="p-3">Previous</span>
//   //         <Ripple />
//   //       </button>
//   //     );
//   //   },
//   //   NextPageLink: (options) => {
//   //     return (
//   //       <button
//   //         type="button"
//   //         className={options.className}
//   //         onClick={options.onClick}
//   //         disabled={options.disabled}
//   //       >
//   //         <span className="p-3">Next</span>
//   //         <Ripple />
//   //       </button>
//   //     );
//   //   },
//   //   PageLinks: (options) => {
//   //     if (
//   //       (options.view.startPage === options.page &&
//   //         options.view.startPage !== 0) ||
//   //       (options.view.endPage === options.page &&
//   //         options.page + 1 !== options.totalPages)
//   //     ) {
//   //       const className = classNames(options.className, { "p-disabled": true });

//   //       return (
//   //         <span className={className} style={{ userSelect: "none" }}>
//   //           ...
//   //         </span>
//   //       );
//   //     }

//   //     return (
//   //       <button
//   //         type="button"
//   //         className={options.className}
//   //         onClick={options.onClick}
//   //       >
//   //         {options.page + 1}
//   //         <Ripple />
//   //       </button>
//   //     );
//   //   },
//   //   RowsPerPageDropdown: (options) => {
//   //     const dropdownOptions = [
//   //       { label: 10, value: 10 },
//   //       { label: 20, value: 20 },
//   //       { label: 50, value: 50 },
//   //       { label: "All", value: options.totalRecords },
//   //     ];

//   //     return (
//   //       <Dropdown
//   //         value={options.value}
//   //         options={dropdownOptions}
//   //         onChange={options.onChange}
//   //       />
//   //     );
//   //   },
//   //   CurrentPageReport: (options) => {
//   //     return (
//   //       <span
//   //         className="mx-3"
//   //         style={{ color: "var(--text-color)", userSelect: "none" }}
//   //       >
//   //         Go to{" "}
//   //         <InputText
//   //           size="2"
//   //           className="ml-1"
//   //           value={currentPage}
//   //           tooltip={pageInputTooltip}
//   //           onKeyDown={(e) => onPageInputKeyDown(e, options)}
//   //           onChange={onPageInputChange}
//   //         />
//   //       </span>
//   //     );
//   //   },
//   // };

//   return (
//     <div>
//       <div className="card">
//         <h5 className="text-center">Organization Data 
//           {/* with Paginator */}


//         </h5>

//         <DataTable
//           value={organizations}
//           first={first}
//           rows={rows}
//           onPage={onPageChange}
//           // paginatorTemplate={template}
//           totalRecords={totalRecords}
//         >
//           <Column field="name" header="Name"></Column>
//           <Column
//             field="authSignataryFn"
//             header="Auth Signatory First Name"
//           ></Column>
//           <Column
//             field="authSignataryLn"
//             header="Auth Signatory Last Name"
//           ></Column>
//           <Column
//             field="authSignataryEmail"
//             header="Auth Signatory Email"
//           ></Column>
//           <Column
//             field="authSignataryPhone"
//             header="Auth Signatory Phone"
//           ></Column>
//           <Column field="createdDt" header="Created Date"></Column>
//           <Column field="statusCode" header="Status Code"></Column>
//         </DataTable>
//       </div>
//       <Paginator
//           first={first}
//           rows={rows}
//           totalRecords={totalRecords}
//           onPageChange={onPageChange}
//         />
//     </div>
//   );
// };

// export default YourComponent;

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// export default function YourComponent(){
//   const Data = [
//     {
//       "id": 1,
//       "username": "username2",
//       "roleID": "roleID",
//       "userType": "userType",
//       "emailID": "emailID",
//       "phoneNbr": "phoneNbr",
//       "createdDt": "createdDt",
//       "statusStr": "statusStr",
//       "name": "test",
//       "email": "test@gmail.com"
//     },
//     {
//       "id": 2,
//       "username": "username3",
//       "roleID": "roleID",
//       "userType": "userType",
//       "emailID": "emailID",
//       "phoneNbr": "phoneNbr",
//       "createdDt": "createdDt",
//       "statusStr": "statusStr",
//       "name": "test",
//       "email": "test@gmail.com"
//     },
//     {
//       "id": 3,
//       "username": "username3",
//       "roleID": "roleID",
//       "userType": "userType",
//       "emailID": "emailID",
//       "phoneNbr": "phoneNbr",
//       "createdDt": "createdDt",
//       "statusStr": "statusStr",
//       "name": "test",
//       "email": "test@gmail.com"
//     },
//     {
//       "id": 4,
//       "username": "username3",
//       "roleID": "roleID",
//       "userType": "userType",
//       "emailID": "emailID",
//       "phoneNbr": "phoneNbr",
//       "createdDt": "createdDt",
//       "statusStr": "statusStr",
//       "name": "test",
//       "email": "test@gmail.com"
//     },
//     {
//       "id": 5,
//       "username": "username3",
//       "roleID": "roleID",
//       "userType": "userType",
//       "emailID": "emailID",
//       "phoneNbr": "phoneNbr",
//       "createdDt": "createdDt",
//       "statusStr": "statusStr",
//       "name": "test",
//       "email": "test@gmail.com"
//     },
//     {
//       "id": 6,
//       "username": "username3",
//       "roleID": "roleID",
//       "userType": "userType",
//       "emailID": "emailID",
//       "phoneNbr": "phoneNbr",
//       "createdDt": "createdDt",
//       "statusStr": "statusStr",
//       "name": "test",
//       "email": "test@gmail.com"
//     },
//     {
//       "id": 7,
//       "username": "username3",
//       "roleID": "roleID",
//       "userType": "userType",
//       "emailID": "emailID",
//       "phoneNbr": "phoneNbr",
//       "createdDt": "createdDt",
//       "statusStr": "statusStr",
//       "name": "test",
//       "email": "test@gmail.com"
//     },
//     {
//       "id": 8,
//       "username": "username2",
//       "roleID": "roleID",
//       "userType": "userType",
//       "emailID": "emailID",
//       "phoneNbr": "phoneNbr",
//       "createdDt": "createdDt",
//       "statusStr": "statusStr",
//       "name": "test",
//       "email": "test@gmail.com"
//     },
//     {
//       "id": 9,
//       "username": "username3",
//       "roleID": "roleID",
//       "userType": "userType",
//       "emailID": "emailID",
//       "phoneNbr": "phoneNbr",
//       "createdDt": "createdDt",
//       "statusStr": "statusStr",
//       "name": "test",
//       "email": "test@gmail.com"
//     },
//     {
//       "id": 10,
//       "username": "username3",
//       "roleID": "roleID",
//       "userType": "userType",
//       "emailID": "emailID",
//       "phoneNbr": "phoneNbr",
//       "createdDt": "createdDt",
//       "statusStr": "statusStr",
//       "name": "test",
//       "email": "test@gmail.com"
//     },
//     {
//       "id": 11,
//       "username": "username3",
//       "roleID": "roleID",
//       "userType": "userType",
//       "emailID": "emailID",
//       "phoneNbr": "phoneNbr",
//       "createdDt": "createdDt",
//       "statusStr": "statusStr",
//       "name": "test",
//       "email": "test@gmail.com"
//     },
//     {
//       "id": 12,
//       "username": "username3",
//       "roleID": "roleID",
//       "userType": "userType",
//       "emailID": "emailID",
//       "phoneNbr": "phoneNbr",
//       "createdDt": "createdDt",
//       "statusStr": "statusStr",
//       "name": "test",
//       "email": "test@gmail.com"
//     },
//     {
//       "id": 13,
//       "username": "username3",
//       "roleID": "roleID",
//       "userType": "userType",
//       "emailID": "emailID",
//       "phoneNbr": "phoneNbr",
//       "createdDt": "createdDt",
//       "statusStr": "statusStr",
//       "name": "test",
//       "email": "test@gmail.com"
//     },
//     {
//       "id": 14,
//       "username": "username3",
//       "roleID": "roleID",
//       "userType": "userType",
//       "emailID": "emailID",
//       "phoneNbr": "phoneNbr",
//       "createdDt": "createdDt",
//       "statusStr": "statusStr",
//       "name": "test",
//       "email": "test@gmail.com"
//     },
//     {
//       "id": 15,
//       "username": "username3",
//       "roleID": "roleID",
//       "userType": "userType",
//       "emailID": "emailID",
//       "phoneNbr": "phoneNbr",
//       "createdDt": "createdDt",
//       "statusStr": "statusStr",
//       "name": "test",
//       "email": "test@gmail.com"
//     },
//     {
//       "id": 16,
//       "username": "username3",
//       "roleID": "roleID",
//       "userType": "userType",
//       "emailID": "emailID",
//       "phoneNbr": "phoneNbr",
//       "createdDt": "createdDt",
//       "statusStr": "statusStr",
//       "name": "test",
//       "email": "test@gmail.com"
//     }
//   ];
  

//   const [organizations, setOrganizations] = useState([]);
// const [currentPage,setCurrentPage] = useState(1);
// const recordPerPage = 10;
// const lastIndex = currentPage * recordPerPage;
// const firstIndex = lastIndex - recordPerPage;

// const records = organizations.slice(firstIndex,lastIndex);
// const npage = Math.ceil(Data.length / recordPerPage);
// // const numbers =[...Array(npage + 1).keys()].slice(1);
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         'http://40.114.32.67:8080/recruit-0.0.1-SNAPSHOT/api/raves/v1/organization'
//       );
//       setOrganizations(response.data.content);
//       // setTotalRecords(response.data.totalElements);
//       console.error("response.data.content", response.data.content);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   fetchData();
// }, []);

// const nextPage = () => {
// if(currentPage !== npage){
//   setCurrentPage(currentPage +1);
// }
// }
// function changeCurrentPage(id){
//  setCurrentPage(id)
// }

// const prevPage = () => {
// if(currentPage !== 1){
//   setCurrentPage(currentPage -1);
// }
// }
// reqqqqqqqquired
//   const data = records.map((d,i)=>(
//     <div key={i}>
// <p>
//     <span>  {d.createdDt}</span>
//     <span>   {d.name} </span>
//       </p>
//       </div>
//   ))
//   return(<div>
  

      
//   {data}
//   <nav >
//         <ul className='pagination'>
//           <li className='page-item'><a href="#" className='page-link' onClick={prevPage}>Prev</a></li>
//           {/* {numbers.map((n,i) => (
//             <li className={`page-item ${currentPage === n ? 'active' : ''}`}    key={i}>
//               <a href='#' className='page-item'
//                onClick={() =>changeCurrentPage()} >{n}</a>
//             </li>
//           ))} */}
//           <li className='page-item'><a href="#" className='page-link' onClick={nextPage}>Next</a></li>
//         </ul>
//       </nav>
//   </div>)
// }






import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { fetchOrganizations } from "../PaginationTable/actions";
import { Ripple } from "primereact/ripple";
import { Paginator } from "primereact/paginator";
import { classNames } from "primereact/utils";

const YourComponent = () => {
  const dispatch = useDispatch();
  const organizations = useSelector((state) => state.yourReducer.organizations);
  const totalRecords = useSelector((state) => state.yourReducer.totalRecords);
  console.log(organizations,"organizations");
  console.log(totalRecords,"totalRecords");
 
  const [first, setFirst] = useState(1);
  const [rows, setRows] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInputTooltip, setPageInputTooltip] = useState(
    "Press 'Enter' key to go to this page."
  );

  useEffect(() => {
    dispatch(fetchOrganizations(first, rows));
  }, [dispatch, first, rows]);

  const onPageChange = (event) => {
    setFirst(event.first);
    setCurrentPage(event.page + 1);
  };

  const onPageInputKeyDown = (event, options) => {
    if (event.key === "Enter") {
      const page = parseInt(currentPage);
      if (page < 1 || page > options.totalPages) {
        setPageInputTooltip(
          `Value must be between 1 and ${options.totalPages}.`
        );
      } else {
        const newFirst = currentPage ? options.rows * (page - 1) : 0;
        setFirst(newFirst);
        setPageInputTooltip("Press 'Enter' key to go to this page.");
      }
    }
  };

  const onPageInputChange = (event) => {
    setCurrentPage(event.target.value);
  };

  const template = {
    layout: "PrevPageLink PageLinks NextPageLink CurrentPageReport",
    PrevPageLink: (options) => {
      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <span className="p-3">Previous</span>
          <Ripple />
        </button>
      );
    },
    NextPageLink: (options) => {
      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <span className="p-3">Next</span>
          <Ripple />
        </button>
      );
    },
    PageLinks: (options) => {
      if (
        (options.view.startPage === options.page &&
          options.view.startPage !== 0) ||
        (options.view.endPage === options.page &&
          options.page + 1 !== options.totalPages)
      ) {
        const className = classNames(options.className, { "p-disabled": true });

        return (
          <span className={className} style={{ userSelect: "none" }}>
            ...
          </span>
        );
      }

      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
        >
          {options.page + 1}
          <Ripple />
        </button>
      );
    },
    RowsPerPageDropdown: (options) => {
      const dropdownOptions = [
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 50, value: 50 },
        { label: "All", value: options.totalRecords },
      ];

      return (
        <Dropdown
          value={options.value}
          options={dropdownOptions}
          onChange={options.onChange}
        />
      );
    },
    CurrentPageReport: (options) => {
      return (
        <span
          className="mx-3"
          style={{ color: "var(--text-color)", userSelect: "none" }}
        >
          Go to{" "}
          <InputText
            size="2"
            className="ml-1"
            value={currentPage}
            tooltip={pageInputTooltip}
            onKeyDown={(e) => onPageInputKeyDown(e, options)}
            onChange={onPageInputChange}
          />
        </span>
      );
    },
  };

  return (
    <div>
      <div className="card">
        <h5>Organization Data 
          {/* with Paginator */}


        </h5>

        <DataTable
          value={organizations}
          first={first}
          rows={rows}
          onPage={onPageChange}
          paginatorTemplate={template}
          totalRecords={totalRecords}
        >
          <Column field="name" header="Name"></Column>
          <Column
            field="authSignataryFn"
            header="Auth Signatory First Name"
          ></Column>
          <Column
            field="authSignataryLn"
            header="Auth Signatory Last Name"
          ></Column>
          <Column
            field="authSignataryEmail"
            header="Auth Signatory Email"
          ></Column>
          <Column
            field="authSignataryPhone"
            header="Auth Signatory Phone"
          ></Column>
          <Column field="createdDt" header="Created Date"></Column>
          <Column field="statusCode" header="Status Code"></Column>
        </DataTable>
      </div>
      <Paginator
          first={first}
          rows={rows}
          totalRecords={totalRecords}
          onPageChange={onPageChange}
        />
    </div>
  );
};

export default YourComponent;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { Dropdown } from "primereact/dropdown";
// import { InputText } from "primereact/inputtext";
// import { fetchOrganizations } from "../PaginationTable/actions";
// import { Ripple } from "primereact/ripple";
// import { Paginator } from "primereact/paginator";
// import { classNames } from "primereact/utils";

// const YourComponent = () => {
//   const dispatch = useDispatch();
//   const organizations = useSelector((state) => state.yourReducer.organizations);
//   const totalRecords = useSelector((state) => state.yourReducer.totalRecords);
//   const {pageable , navigationData} = useSelector((state) => state.yourReducer);

//   console.log(navigationData ,"navigation - pageable");
//   // console.log(totalRecords,"totalRecords");
//   // const [naviagation,setNavigation] = useState({})
//   const [first, setFirst] = useState(1);
//   const [rows, setRows] = useState(1);
//   const [currentPage, setCurrentPage] = useState(1);
//   // const [pageInputTooltip, setPageInputTooltip] = useState(
//   //   "Press 'Enter' key to go to this page."
//   // );

//   useEffect(() => {
//     dispatch(fetchOrganizations(first, rows));
//   }, 
//   [dispatch, first, rows]
//   );

//   const onPageChange = (event) => {
//     console.log(event.page,"adddd");
//     setFirst(event.first);
//     setRows(event.page +1);
//     // setFirst(event.pageable.offset);
//     setCurrentPage(event.page + 1);
//   };


//   return (
//     <div>
//       <div className="card">
//         <h5 className="text-center">Organization Data 
//           {/* with Paginator */}


//         </h5>

//         <DataTable
//           value={organizations}
//           first={first}
//           rows={rows}
//           onPage={onPageChange}
//           // paginatorTemplate={template}
//           totalRecords={totalRecords}
//         >
//           <Column field="name" header="Name"></Column>
//           <Column
//             field="authSignataryFn"
//             header="Auth Signatory First Name"
//           ></Column>
//           <Column
//             field="authSignataryLn"
//             header="Auth Signatory Last Name"
//           ></Column>
//           <Column
//             field="authSignataryEmail"
//             header="Auth Signatory Email"
//           ></Column>
//           <Column
//             field="authSignataryPhone"
//             header="Auth Signatory Phone"
//           ></Column>
//           <Column field="createdDt" header="Created Date"></Column>
//           <Column field="statusCode" header="Status Code"></Column>
//         </DataTable>
//       </div>
//       <Paginator
//           first={first}
//           rows={rows}
//           totalRecords={totalRecords}
//           onPageChange={onPageChange}
//         />
//     </div>
//   );
// };

// export default YourComponent;