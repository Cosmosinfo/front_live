import { call, put, takeEvery } from "redux-saga/effects";
import { MAINARTIST } from "store/actions/actionTypes";
import * as actions from "store/actions/main";
import axios from "axios";

function mainArtistAPI(data: any) {
  return axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/artist/findNewArtistList`);
}

function* fetchMainArtistSaga(action: any) {
  try {
    const { data } = yield call(mainArtistAPI, action.data);
    yield put(actions.mainArtistSuccess(data));
  } catch (error) {
    yield put(actions.mainArtistFail("error"));
  }
}

export default function* watchMainArtist() {
  yield takeEvery(MAINARTIST, fetchMainArtistSaga);
}
