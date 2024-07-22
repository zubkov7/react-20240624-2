import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./ui/cart";
import { apiSlice } from "./services/api";

export const store = configureStore({
  reducer: {
    [CartSlice.name]: CartSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
