import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./get-users";

const entityAdapter = createEntityAdapter();

export const UserSlice = createSlice({
  name: "user",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectUserById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
});

export const { selectUserById } = UserSlice.selectors;
