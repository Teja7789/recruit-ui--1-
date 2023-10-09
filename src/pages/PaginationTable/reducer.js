// reducer.js

import {
    FETCH_ORGANIZATIONS_SUCCESS,
    FETCH_ORGANIZATIONS_FAILURE,
  } from "./actions";
  const selectedData = {
    offset:0,
    pageNumber:0
  }
  const initialState = {
    organizations: [],
    totalRecords: 0,
    pageable:{},
    navigationData:{},
    error: null,
  };
  
  const yourReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ORGANIZATIONS_SUCCESS:
        return {
          ...state,
          organizations: action.payload.content,
          totalRecords: action.payload.totalElements,
          // pageable:action.payload.pageable,
          pageable: action.payload.pageable ,
          navigationData:action.payload,
          error: null,
        };
      case FETCH_ORGANIZATIONS_FAILURE:
        return {
          ...state,
          organizations: [],
          totalRecords: 0,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default yourReducer;
  