// tenantReducer.js
import { FETCH_TIMESHEETS_REQUEST, FETCH_TIMESHEETS_SUCCESS, FETCH_TIMESHEETS_FAILURE } from '../actions/timesheetActions';

const initialState = {
    timesheets: [],
    loading: false,
    error: null,
};

const timesheetReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TIMESHEETS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_TIMESHEETS_SUCCESS:
            return { ...state, loading: false, timesheets: action.payload };
        case FETCH_TIMESHEETS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default timesheetReducer;
