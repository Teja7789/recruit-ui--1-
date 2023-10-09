import FindPayrollGenration from "../components/FindPayrollGenration";
import PayrollGenrationTab from "../components/PayrollGenrationTab";
import PayrollSummaryListTab from "../components/PayrollSummaryListTab";


const payrollTabs =({ columnConfig, handleFilterClick,dataTableRef })=> [
    {
        id: 'payrollGenration',
        label: 'Payroll Genration',

        content: (<div>
            <FindPayrollGenration />
            <PayrollGenrationTab />
        </div>)
    },
    {
        id: 'payrollSummary',
        label: 'Payroll Summary',

        content: <PayrollSummaryListTab
        columnConfig={columnConfig}
        handleFilterClick={handleFilterClick}
        dataTableRef={dataTableRef}
         />,
    },
]

export default payrollTabs;