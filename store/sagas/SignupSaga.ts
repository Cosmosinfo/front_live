import { call, put, takeEvery } from "redux-saga/effects";
import { SIGNUP_EMAIL_DUPLICATE_CHECK } from "store/actions/actionTypes";
import * as actions from "store/actions/signup";
import axios from "axios";

function signupAPI(data: any) {
  console.log("data", data);
  return axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/joinIdChk`);
}

function* fetchSignupSaga(action: any) {
  try {
    const { data } = yield call(signupAPI, action.data);
    yield put(actions.signupEmailDuplicateCheckSuccess(data));
  } catch (error) {
    yield put(actions.signupEmailDuplicateCheckFail("error"));
  }
}

/**
 * SEARCH DISPATH EVENT WATCH
 * 이벤트기 감지되었을때 동작한다.
 */
export default function* watchSignup() {
  yield takeEvery(SIGNUP_EMAIL_DUPLICATE_CHECK, fetchSignupSaga);
}
