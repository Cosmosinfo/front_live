import { all } from "redux-saga/effects";
import watchMainArtist from "./MainArtistSaga";
import watchMainStage from "./MainStageSaga";

export default function* rootSaga() {
  yield all([watchMainStage(), watchMainArtist()]);
}
