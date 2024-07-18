import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getCodecs } from "./get-codecs";

const entityAdapter = createEntityAdapter();

export const CodecSlice = createSlice({
  name: "codec",
  initialState: entityAdapter.getInitialState({
    requestStatus: "idle",
  }),
  selectors: {
    selectCodecById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder
      .addCase(getCodecs.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getCodecs.fulfilled, (state, { payload }) => {
        state.requestStatus = "fulfilled";

        entityAdapter.addMany(state, payload);
      })
      .addCase(getCodecs.rejected, (state) => {
        state.requestStatus = "rejected";
      }),
});

export const { selectCodecById } = CodecSlice.selectors;
