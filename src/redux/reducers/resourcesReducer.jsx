// companiesReducer.js

import { FETCH_RESOURCE_REQUEST, FETCH_RESOURCE_SUCCESS, FETCH_RESOURCE_FAILURE } from '../actions/resourceActions';

const initialState = {
    resources: [],
    loading: false,
    error: null,
};

const resourceReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RESOURCE_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_RESOURCE_SUCCESS:
            return { ...state, loading: false, resources: action.payload };
        case FETCH_RESOURCE_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default resourceReducer;
