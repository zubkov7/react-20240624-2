import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getHeadphones } from "./get-headphones";

const entityAdapter = createEntityAdapter();

export const HeadphoneSlice = createSlice({
  name: "headphone",
  initialState: entityAdapter.getInitialState({
    requestStatus: "idle",
  }),
  selectors: {
    selectHeadphonesIds: (state) => state.ids,
    selectHeadphoneById: (state, id) => state.entities[id],
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getHeadphones.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getHeadphones.fulfilled, (state, { payload }) => {
        state.requestStatus = "fulfilled";

        entityAdapter.setAll(state, payload);
      })
      .addCase(getHeadphones.rejected, (state) => {
        state.requestStatus = "rejected";
      }),
});

export const { selectHeadphonesIds, selectHeadphoneById, selectRequestStatus } =
  HeadphoneSlice.selectors;
