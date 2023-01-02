import { combineReducers } from "redux";
import mainStage from "./mainStage";
import mainArtist from "./mainArtist";

const rootReducer = combineReducers({
  mainStage: mainStage,
  mainArtist: mainArtist,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
