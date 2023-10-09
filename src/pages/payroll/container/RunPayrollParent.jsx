import PayPeriodList from "./PayPeriodList";
import PayrollSubmited from "./PayrollSubmited";
import ReviewPayroll from "./ReviewPayroll";
import TimeOffList from "./TimeOffList";
import TotalHoursList from "./TotalHoursList";

const RunPayrollParent = [
    {
        // name: 'Step 1',
        component: <PayPeriodList />,
        nextstep : 'Total Hours'
    },
    {
        // name: 'Step 2',
        component: <TotalHoursList />,
        nextstep : 'Time Off'
    },
    {
        // name: 'Step 3',
        component: <TimeOffList />,
        nextstep : 'Review Payroll'
    },
    {
        // name: 'Step 3',
        component: <ReviewPayroll />,
        nextstep : 'Payroll Submitted'
    },
    {
        // name: 'Step 3',
        component: <PayrollSubmited />,
        nextstep : 'Review Payroll'
    },

];

export default RunPayrollParent;