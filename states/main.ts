import { selector } from "recoil";
import axios from "axios";

export const getMainStageData = selector({
  key: `getMainStageData`,
  get: async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/main/mainInfo`);
    console.log(response.data);
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
