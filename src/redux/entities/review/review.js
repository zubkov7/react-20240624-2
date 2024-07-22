import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./get-reviews";

const entityAdapter = createEntityAdapter();

export const ReviewSlice = createSlice({
  name: "review",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectReviewIds: (state) => state.ids,
    selectReviewById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder.addCase(getReviews.fulfilled, (state, { payload }) => {
      entityAdapter.addMany(state, payload);
    }),
});

export const { selectReviewIds, selectReviewById } = ReviewSlice.selectors;
