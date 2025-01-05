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
  }),
});

export const { useFetchAllMetricsQuery } = focusApi;
