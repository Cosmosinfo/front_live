import { MAINSTAGE, MAINSTAGE_SUCCESS, MAINSTAGE_FAIL, MAINARTIST, MAINARTIST_SUCCESS, MAINARTIST_FAIL } from "./actionTypes";

export const mainStage = (payload: any) => {
  return {
    type: MAINSTAGE,
    payload: payload,
  };
};

export const mainStageSuccess = (data: any) => {
  return {
    type: MAINSTAGE_SUCCESS,
    data: data,
  };
};

export const mainStageFail = (error: any) => {
  return {
    type: MAINSTAGE_FAIL,
    error: error,
  };
};

export const mainArtist = (payload: any) => {
  return {
    type: MAINARTIST,
    payload: payload,
  };
};

export const mainArtistSuccess = (data: any) => {
  return {
    type: MAINARTIST_SUCCESS,
    data: data,
  };
};

export const mainArtistFail = (error: any) => {
  return {
    type: MAINARTIST_FAIL,
    error: error,
  };
};
