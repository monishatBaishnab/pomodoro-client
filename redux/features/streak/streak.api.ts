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
  }),
});

export const { useFetchAllStreaksQuery } = streaksApi;
