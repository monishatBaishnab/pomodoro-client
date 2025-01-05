import { baseApi } from "@/redux/base.api";

const streaksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchAllStreaks: builder.query({
      query: () => {
        return {
          url: "/streaks",
          method: "GET",
        };
      },
      providesTags: ["streaks"],
    }),
    createStreak: builder.mutation({
      query: (data) => {
        return {
          url: "/streaks",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ['streaks']
    }),
  }),
});

export const { useFetchAllStreaksQuery, useCreateStreakMutation } = streaksApi;
