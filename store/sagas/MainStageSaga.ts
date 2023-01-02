import { call, put, takeEvery } from "redux-saga/effects";
import { MAINSTAGE } from "store/actions/actionTypes";
import * as actions from "store/actions/main";
import axios from "axios";

function mainStageAPI(data: any) {
  return axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/main/mainInfo`);
}

function* fetchMainStageSaga(action: any) {
  try {
    const { data } = yield call(mainStageAPI, action.data);
    yield put(actions.mainStageSuccess(data));
  } catch (error) {
    yield put(actions.mainStageFail("error"));
  }
}

/**
 * SEARCH DISPATH EVENT WATCH
 * 이벤트기 감지되었을때 동작한다.
 */
export default function* watchMainStage() {
  yield takeEvery(MAINSTAGE, fetchMainStageSaga);
}
