// saga.js

import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_ORGANIZATIONS,
  fetchOrganizationsSuccess,
  fetchOrganizationsFailure,
} from "./actions";

function* fetchOrganizationsSaga(action) {
  try {
    const { first, rows  } = action.payload;
    const response = yield call(
      axios.get,
      `http://40.114.32.67:8080/recruit-0.0.1-SNAPSHOT/api/raves/v1/organization?offset=${first}&limit=${rows}`
    );
    yield put(fetchOrganizationsSuccess(response.data));
  } catch (error) {
    yield put(fetchOrganizationsFailure(error));
  }
}

function* rootSaga() {
  yield takeLatest(FETCH_ORGANIZATIONS, fetchOrganizationsSaga);
}

export default rootSaga;
