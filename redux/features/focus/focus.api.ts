import { baseApi } from "@/redux/base.api";

const focusApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchAllMetrics: builder.query({
      query: () => {
        return {
          url: "/focus-metrics",
          method: "GET",
        };
      },
      providesTags: ["metrics"],
    }),
    createFocusSession: builder.mutation({
      query: (data) => {
        return {
          url: "/focus-session",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ['metrics', 'streaks']
    }),
  }),
});

export const { useFetchAllMetricsQuery, useCreateFocusSessionMutation } = focusApi;
