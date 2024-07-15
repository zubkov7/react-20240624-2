import { createSlice } from "@reduxjs/toolkit";
import { normalizedHeadphones } from "../../constants/normalized-mock";

export const HeadphoneSlice = createSlice({
  name: "headphone",
  initialState: {
    entities: normalizedHeadphones.reduce((acc, item) => {
      acc[item.id] = item;

      return acc;
    }, {}),
    ids: normalizedHeadphones.map((item) => item.id),
  },
  selectors: {
    selectHeadphonesIds: (state) => state.ids,
    selectHeadphoneById: (state, id) => state.entities[id],
  },
});

export const { selectHeadphonesIds, selectHeadphoneById } =
  HeadphoneSlice.selectors;
