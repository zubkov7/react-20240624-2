import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./ui/cart";
import { HeadphoneSlice } from "./entities/headphone/headphone";
import { ReviewSlice } from "./entities/review/review";
import { UserSlice } from "./entities/user/user";
import { CodecSlice } from "./entities/codec/codec";
import { RequestSlice } from "./ui/request";

export const store = configureStore({
  reducer: {
    [HeadphoneSlice.name]: HeadphoneSlice.reducer,
    [ReviewSlice.name]: ReviewSlice.reducer,
    [UserSlice.name]: UserSlice.reducer,
    [CodecSlice.name]: CodecSlice.reducer,
    [CartSlice.name]: CartSlice.reducer,
    [RequestSlice.name]: RequestSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(() => (next) => (action) => {
  //     console.log(action);
  //     next(action);
  //   }),
});
