import { SIGNUP_EMAIL_DUPLICATE_CHECK, SIGNUP_EMAIL_DUPLICATE_CHECK_SUCCESS, SIGNUP_EMAIL_DUPLICATE_CHECK_FAIL } from "./actionTypes";

export const signupEmailDuplicateCheck = (payload: any) => {
  return {
    type: SIGNUP_EMAIL_DUPLICATE_CHECK,
    payload: payload,
  };
};

export const signupEmailDuplicateCheckSuccess = (data: any) => {
  return {
    type: SIGNUP_EMAIL_DUPLICATE_CHECK_SUCCESS,
    data: data,
  };
};

export const signupEmailDuplicateCheckFail = (error: any) => {
  return {
    type: SIGNUP_EMAIL_DUPLICATE_CHECK_FAIL,
    error: error,
  };
};
