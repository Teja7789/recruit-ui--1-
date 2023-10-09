// tenantSaga.js
import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchTimesheetsSuccess, fetchTimesheetsFailure, FETCH_TIMESHEETS_REQUEST } from '../actions/timesheetActions';

function* fetchTimesheets() {
    try {
        console.log('******* Fetching the data *********');
        const response = yield call(axios.get, 'http://192.168.40.61:8081/api/raves/v1/timeCard?offset=0&limit=100');
        console.log(response.data,"add")
        yield put(fetchTimesheetsSuccess(response.data.content));
    } catch (error) {
        yield put(fetchTimesheetsFailure(error.message));
    }
}

function* timesheetSaga() {
    yield takeLatest(FETCH_TIMESHEETS_REQUEST, fetchTimesheets);
}

export default timesheetSaga;

