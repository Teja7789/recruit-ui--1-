// contractActions.js
export const FETCH_CONTRACTS_REQUEST = 'FETCH_CONTRACTS_REQUEST';
export const FETCH_CONTRACTS_SUCCESS = 'FETCH_CONTRACTS_SUCCESS';
export const FETCH_CONTRACTS_FAILURE = 'FETCH_CONTRACTS_FAILURE';

export const DELETE_CONTRACTS_REQUEST = 'DELETE_CONTRACTS_REQUEST';
export const DELETE_CONTRACTS_SUCCESS = 'DELETE_CONTRACTS_SUCCESS';
export const DELETE_CONTRACTS_FAILURE = 'DELETE_CONTRACTS_FAILURE';
//edit-patch
export const UPDATE_CONTRACT_REQUEST = 'UPDATE_CONTRACT_REQUEST';
export const UPDATE_CONTRACT_SUCCESS = 'UPDATE_CONTRACT_SUCCESS';
export const UPDATE_CONTRACT_FAILURE = 'UPDATE_CONTRACT_FAILURE';

export const fetchContractsRequest = () => ({
    type: FETCH_CONTRACTS_REQUEST,
});

export const fetchContractsSuccess = (contracts) => ({
    type: FETCH_CONTRACTS_SUCCESS,
    payload: contracts,
});

export const fetchContractsFailure = (error) => ({
    type: FETCH_CONTRACTS_FAILURE,
    payload: error,
});

export const deleteContractsRequest = (id) => ({
    type: DELETE_CONTRACTS_REQUEST,
    payload: id,
})

export const deleteContractsSuccess = (contractsId) => ({
    type: DELETE_CONTRACTS_SUCCESS,
    payload: contractsId,
});

export const deleteContractsFailure = (error) => ({
    type: DELETE_CONTRACTS_FAILURE,
    payload:error,
})
//update-edit
export const updateContractStart = (selectedContract) => ({
    type:UPDATE_CONTRACT_REQUEST,
    payload: selectedContract,
});

export const updateContractSuccuess = () => ({
    type:UPDATE_CONTRACT_SUCCESS,
});

export const updateContractError = (error) => ({
    type: UPDATE_CONTRACT_FAILURE,
    payload: error,
});


// export const updateUserStart = (userInfo) => ({
//     type: types.UPDATE_USER_START,
//     payload: userInfo,
//   });
  
//   export const updateUserSuccess = () => ({
//     type: types.UPDATE_USER_SUCCESS,
//   });
  
//   export const updateUserError = (error) => ({
//     type: types.UPDATE_USER_ERROR,
//     payload: error,
//   });