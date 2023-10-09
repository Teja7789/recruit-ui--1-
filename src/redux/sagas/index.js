// sagas/index.js
import { all } from 'redux-saga/effects';
import { watchLoginUser } from './authSaga';
import msgTemplateSaga from './msgTemplateSaga';
import signupSaga from './signupSaga';
import companiesSaga from './companiesSaga';
import timesheetSaga from './timesheetSaga';
import contractSaga from './contractSaga';
import payrollSaga from './payrollSaga';

function* rootSaga() {
    yield all([
        watchLoginUser(),
        msgTemplateSaga(),
        signupSaga(),
        companiesSaga(),
        timesheetSaga(),
        contractSaga(),
        payrollSaga(),
        
        // Add other sagas here
    ]);
}

export default rootSaga;
