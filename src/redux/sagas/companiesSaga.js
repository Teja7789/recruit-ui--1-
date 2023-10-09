// companiesSaga.js
import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchCompaniesFailure, fetchCompaniesSuccess, FETCH_COMPANIES_REQUEST } from '../actions/companiesActions';
 
function* fetchCompanies() {
    try {
        console.log('******* Fetching the data *********');
        const response = yield call(axios.get, 'http://40.114.32.67:8080/recruit-0.0.1-SNAPSHOT/api/raves/v1/organization?offset=0&limit=100');
        console.log(response.data.content)
        yield put(fetchCompaniesSuccess(response.data.content));
    } catch (error) {
        yield put(fetchCompaniesFailure(error.message));
    }
}

function* companiesSaga() {
    yield takeLatest(FETCH_COMPANIES_REQUEST, fetchCompanies);
}

export default companiesSaga;
