import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["Review"],
  keepUnusedDataFor: 100,
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    getHeadphones: builder.query({
      query: () => "/products",
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getCodecsByProductId: builder.query({
      query: (productId) => ({
        url: "codecs",
        params: { productId },
      }),
    }),
    getReviewsByProductId: builder.query({
      query: (productId) => ({
        url: "reviews",
        params: { productId },
      }),
      providesTags: (result, _, productId) =>
        result.concat({ type: "Review", productId }),
    }),
    createReview: builder.mutation({
      query: ({ productId, review }) => ({
        url: `/review/${productId}`,
        method: "POST",
        body: review,
      }),
      invalidatesTags: (result, _, { productId }) => [
        { type: "Review", id: result.id },
        { type: "Review", productId },
      ],
    }),
  }),
});

export const {
  useGetHeadphonesQuery,
  useGetCodecsByProductIdQuery,
  useGetReviewsByProductIdQuery,
  useCreateReviewMutation,
  useGetUsersQuery,
} = apiSlice;
