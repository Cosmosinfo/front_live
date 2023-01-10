import { selector, atom } from "recoil";
import axios from "axios";

export const mainStageDateState = atom({
  key: "mainStageDateState",
  default: [],
});

export const mainArtistDateState = atom({
  key: "mainArtistDateState",
  default: [],
});

export const getMainStageData = selector({
  key: `getMainStageData`,
  get: async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/main/mainInfo`);
    return response.data;
  },
});

export const getMainArtistData = selector({
  key: "getMainArtistData",
  get: async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/artist/findNewArtistList`);
    return response.data;
  },
});
