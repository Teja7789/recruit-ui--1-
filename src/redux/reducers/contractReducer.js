// tenantReducer.js
import { DELETE_CONTRACTS_FAILURE, DELETE_CONTRACTS_REQUEST, DELETE_CONTRACTS_SUCCESS, FETCH_CONTRACTS_FAILURE, FETCH_CONTRACTS_REQUEST, FETCH_CONTRACTS_SUCCESS, UPDATE_CONTRACT_FAILURE, UPDATE_CONTRACT_REQUEST, UPDATE_CONTRACT_SUCCESS } from '../actions/contractActions';
import { FETCH_TIMESHEETS_REQUEST, FETCH_TIMESHEETS_SUCCESS, FETCH_TIMESHEETS_FAILURE } from '../actions/timesheetActions';

const initialState = {
    contracts: [],
    loading: false,
    error: null,
    selectedContract:{},
};

const contractReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTRACTS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_CONTRACTS_SUCCESS:
            return { ...state, loading: false, contracts: action.payload };
        case FETCH_CONTRACTS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case DELETE_CONTRACTS_REQUEST: 
        return {...state, loading:true, error:null};
        case DELETE_CONTRACTS_SUCCESS:
            return {...state, loading:false, contracts: state.contracts.filter((item) => item.id !== action.payload),}
        case DELETE_CONTRACTS_FAILURE:
            return {...state,loading:false,error:action.payload};

            //Update
        case UPDATE_CONTRACT_REQUEST:
            return {...state, loading:true};
        case UPDATE_CONTRACT_SUCCESS:
            return {...state, loading: false};
        case UPDATE_CONTRACT_FAILURE:
            return {...state,loading:false, error: action.payload};

        default:
            return state;
    }
};

export default contractReducer;
