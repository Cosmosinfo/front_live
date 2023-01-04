import { combineReducers } from "redux";
import mainStage from "./mainStage";
import mainArtist from "./mainArtist";
import signup from "./signup";

const rootReducer = combineReducers({
  mainStage: mainStage,
  mainArtist: mainArtist,
  signup: signup,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
