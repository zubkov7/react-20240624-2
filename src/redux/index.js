import { configureStore } from "@reduxjs/toolkit";
import { HeadphoneSlice } from "./entities/headphone";
import { ReviewSlice } from "./entities/review";
import { UserSlice } from "./entities/user";
import { CodecSlice } from "./entities/codec";

export const store = configureStore({
  reducer: {
    [HeadphoneSlice.name]: HeadphoneSlice.reducer,
    [ReviewSlice.name]: ReviewSlice.reducer,
    [UserSlice.name]: UserSlice.reducer,
    [CodecSlice.name]: CodecSlice.reducer,
  },
});
