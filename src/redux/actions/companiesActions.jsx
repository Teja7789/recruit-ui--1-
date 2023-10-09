// companiesActions.js
export const FETCH_COMPANIES_REQUEST = 'FETCH_COMPANIES_REQUEST';
export const FETCH_COMPANIES_SUCCESS = 'FETCH_COMPANIES_SUCCESS';
export const FETCH_COMPANIES_FAILURE = 'FETCH_COMPANIES_FAILURE';
 
export const fetchCompaniesRequest = () => ({
    type: FETCH_COMPANIES_REQUEST,
});

export const fetchCompaniesSuccess = (companies) => ({
    type: FETCH_COMPANIES_SUCCESS,
    payload: companies,
});

export const fetchCompaniesFailure = (error) => ({
    type: FETCH_COMPANIES_FAILURE,
    payload: error,
});
