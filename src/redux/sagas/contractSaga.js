// tenantSaga.js
import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_CONTRACTS_REQUEST, fetchContractsFailure, fetchContractsSuccess } from '../actions/contractActions';

function* fetchContracts() {
    try {
        console.log('******* Fetching the data *********');
        const response = yield call(axios.get, 'http://localhost:5000/users');
        yield put(fetchContractsSuccess(response.data));
    } catch (error) {
        yield put(fetchContractsFailure(error.message));
    }
}

function* contractSaga() {
    yield takeLatest(FETCH_CONTRACTS_REQUEST, fetchContracts);
}

export default contractSaga;
