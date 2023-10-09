// resourceActions.js
export const FETCH_RESOURCE_REQUEST = 'FETCH_RESOURCE_REQUEST';
export const FETCH_RESOURCE_SUCCESS = 'FETCH_RESOURCE_SUCCESS';
export const FETCH_RESOURCE_FAILURE = 'FETCH_RESOURCE_FAILURE';

export const fetchResourceRequest = () => ({
    type: FETCH_RESOURCE_REQUEST,
});

export const fetchResourceSuccess = (resources) => ({
    type: FETCH_RESOURCE_SUCCESS,
    payload: resources,
});

export const fetchResourceFailure = (error) => ({
    type: FETCH_RESOURCE_FAILURE,
    payload: error,
});
