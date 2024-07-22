import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getCodecs } from "./get-codecs";

const entityAdapter = createEntityAdapter();

export const CodecSlice = createSlice({
  name: "codec",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectCodecById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder.addCase(getCodecs.fulfilled, (state, { payload }) => {
      entityAdapter.addMany(state, payload);
    }),
});

export const { selectCodecById } = CodecSlice.selectors;
