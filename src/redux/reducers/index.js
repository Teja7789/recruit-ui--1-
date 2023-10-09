// reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import msgTemplateReducer from './msgTemplateReducer';
import sidebarReducer from './sidebarReducer';
import signupReducer from './signupReducer';
import companiesReducer from './companiesReducer';
import timesheetReducer from './timesheetReducer';
import contractReducer from './contractReducer';
import headerTitleReducer from './headerTitleReducer';
import resourceReducer from './resourcesReducer';
import payrollReducer from './payrollReducer';
import yourReducer from '../../pages/PaginationTable/reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    msgTemplate: msgTemplateReducer,
    signup: signupReducer,
    sidebar: sidebarReducer,
    company: companiesReducer,
    timesheet: timesheetReducer,
    contract: contractReducer,
    headerTitle: headerTitleReducer,
    resource: resourceReducer,
    payroll: payrollReducer,
    // Add other reducers here
    yourReducer:yourReducer,
});

export default rootReducer;
