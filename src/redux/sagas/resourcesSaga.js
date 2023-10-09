// companiesSaga.js
import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchResourceFailure, fetchResourceSuccess, FETCH_RESOURCE_REQUEST } from '../actions/resourceActions';

function* fetchResources() {
    try {
        console.log('******* Fetching the data *********');
        const response = yield call(axios.get, 'http://40.114.32.67:8080/recruit-0.0.1-SNAPSHOT/api/raves/v1/worker');
        console.log(response.data.content);
        yield put(fetchResourceSuccess(response.data.content));
    } catch (error) {
        yield put(fetchResourceFailure(error.message));
    }
}

function* resourcesSaga() {
    yield takeLatest(FETCH_RESOURCE_REQUEST, fetchResources);
}

export default resourcesSaga;
