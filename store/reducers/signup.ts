import * as actions from "store/actions/actionTypes";

const initialState = {
  data: [],
  payload: {},
  error: "",
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case actions.SIGNUP_EMAIL_DUPLICATE_CHECK:
      return {
        ...state,
        payload: action.payload,
      };
    case actions.SIGNUP_EMAIL_DUPLICATE_CHECK_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    case actions.SIGNUP_EMAIL_DUPLICATE_CHECK_FAIL:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
