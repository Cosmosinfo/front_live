import { SEARCH, SEARCH_SUCCESS, SEARCH_FAIL } from "./actionTypes";

export const search = (payload: any) => {
  return {
    type: SEARCH,
    payload: payload,
  };
};

export const searchSuccess = (data: any) => {
  return {
    type: SEARCH_SUCCESS,
    data: data,
  };
};

export const searchFail = (error: any) => {
  return {
    type: SEARCH_FAIL,
    error: error,
  };
};
