import { SET_CURRENT_PAGE_NAME } from "../actions/headerTitleActions";

const initialState = {
    currentPageName: 'Dashboard', // Default page name
  };

  const headerTitleReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CURRENT_PAGE_NAME:
        return {
          ...state,
          currentPageName: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default headerTitleReducer;