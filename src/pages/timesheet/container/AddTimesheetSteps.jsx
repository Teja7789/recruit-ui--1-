import ExpensesStep from "./ExpensesStep";
import HoursStep from "./HoursStep";
import TimesheetStep from "./TimesheetStep";


const AddTimesheetSteps = [
    {
        name: 'Timesheet',
        component: TimesheetStep,
        nextStep : 'Hours'
    },
    {
        name: 'Hours',
        component: HoursStep,
        nextStep : 'Expenses'
    },
    {
        name: 'Expenses',
        component: ExpensesStep,
        nextStep : 'Finish '
    },
];

export default AddTimesheetSteps