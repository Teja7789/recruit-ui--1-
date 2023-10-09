// actions.js

export const FETCH_ORGANIZATIONS = "FETCH_ORGANIZATIONS";
export const FETCH_ORGANIZATIONS_SUCCESS = "FETCH_ORGANIZATIONS_SUCCESS";
export const FETCH_ORGANIZATIONS_FAILURE = "FETCH_ORGANIZATIONS_FAILURE";

export const fetchOrganizations = (first, rows, navigation) => ({
  type: FETCH_ORGANIZATIONS,
  payload: { first, rows , navigation},
});

export const fetchOrganizationsSuccess = (organizations) => ({
  type: FETCH_ORGANIZATIONS_SUCCESS,
  payload: organizations,
});

export const fetchOrganizationsFailure = (error) => ({
  type: FETCH_ORGANIZATIONS_FAILURE,
  payload: error,
});
