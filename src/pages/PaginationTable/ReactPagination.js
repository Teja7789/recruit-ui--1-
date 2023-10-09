import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Ripple } from "primereact/ripple";
import { Paginator } from "primereact/paginator";
import { classNames } from "primereact/utils";
import { fetchOrganizations } from "./actions";

const ReactPagination = () => {
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

export default ReactPagination;