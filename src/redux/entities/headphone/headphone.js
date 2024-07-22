import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getHeadphones } from "./get-headphones";

const entityAdapter = createEntityAdapter();

export const HeadphoneSlice = createSlice({
  name: "headphone",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectHeadphonesIds: (state) => state.ids,
    selectHeadphoneById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder.addCase(getHeadphones.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
});

export const { selectHeadphonesIds, selectHeadphoneById } =
  HeadphoneSlice.selectors;
