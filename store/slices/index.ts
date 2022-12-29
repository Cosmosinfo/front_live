import { IUser } from "../interface/user";
import { combineReducers, AnyAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import users from "./users";

export interface State {
  users: IUser;
}

const rootReducer = (state: State | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE");
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        users,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
