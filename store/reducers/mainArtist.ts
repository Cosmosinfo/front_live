import * as actions from "store/actions/actionTypes";

const initialState = {
  data: [],
  payload: {},
  error: "",
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case actions.MAINARTIST:
      return {
        ...state,
        payload: action.payload,
      };
    case actions.MAINARTIST_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    case actions.MAINARTIST_FAIL:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
