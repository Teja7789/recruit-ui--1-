// tenantActions.js
export const FETCH_TIMESHEETS_REQUEST = 'FETCH_TIMESHEETS_REQUEST';
export const FETCH_TIMESHEETS_SUCCESS = 'FETCH_TIMESHEETS_SUCCESS';
export const FETCH_TIMESHEETS_FAILURE = 'FETCH_TIMESHEETS_FAILURE';

export const fetchTimesheetsRequest = () => ({
    type: FETCH_TIMESHEETS_REQUEST,
});

export const fetchTimesheetsSuccess = (timesheets) => ({
    type: FETCH_TIMESHEETS_SUCCESS,
    payload: timesheets,
});

export const fetchTimesheetsFailure = (error) => ({
    type: FETCH_TIMESHEETS_FAILURE,
    payload: error,
});
