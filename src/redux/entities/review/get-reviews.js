import { createAsyncThunk } from "@reduxjs/toolkit";

export const getReviews = createAsyncThunk(
  `codec/getReviews`,
  async (productId, { rejectWithValue, fulfillWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?productId=${productId}`
    );

    const result = await response.json();

    if (!result.length) {
      rejectWithValue("empty result");
    }

    return fulfillWithValue(result);
  }
);
