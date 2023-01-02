import { call, put, takeEvery } from "redux-saga/effects";
import { SEARCH } from "store/actions/actionTypes";
import * as actions from "store/actions/search";
import axios from "axios";

function searchAPI(data: any) {
  return axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/main/mainInfo`);
}

function* fetchSearchSaga(action: any) {
  try {
    const { data } = yield call(searchAPI, action.data);
    yield put(actions.searchSuccess(data));
  } catch (error) {
    yield put(actions.searchFail("error"));
  }
}

/**
 * SEARCH DISPATH EVENT WATCH
 * 이벤트기 감지되었을때 동작한다.
 */
export default function* watchSearch() {
  yield takeEvery(SEARCH, fetchSearchSaga);
}
