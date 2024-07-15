import { createSlice } from "@reduxjs/toolkit";
import { normalizedCodecs } from "../../constants/normalized-mock";

export const CodecSlice = createSlice({
  name: "codec",
  initialState: {
    entities: normalizedCodecs.reduce((acc, item) => {
      acc[item.id] = item;

      return acc;
    }, {}),
    ids: normalizedCodecs.map((item) => item.id),
  },
  selectors: {
    selectCodecById: (state, id) => state.entities[id],
  },
});

export const { selectCodecById } = CodecSlice.selectors;
