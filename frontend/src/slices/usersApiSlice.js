import { apiSlice } from "./apiSlice";
const USER_URL = "/api/users";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        query: (data) => ({
          url: `${USER_URL}/auth`,
          mehtod: "POST",
          body: data,
        }),
      }),
    }),
  }),
});

export const { useLoginMutation } = usersApiSlice;
