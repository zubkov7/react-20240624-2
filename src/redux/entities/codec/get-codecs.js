import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCodecs = createAsyncThunk(
  `codec/getCodecs`,
  async (productId, { rejectWithValue, fulfillWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/codecs?productId=${productId}`
    );

    const result = await response.json();

    if (!result.length) {
      rejectWithValue("empty result");
    }

    return fulfillWithValue(result);
  }
);
