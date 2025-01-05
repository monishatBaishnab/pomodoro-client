import { baseApi } from "@/redux/base.api";

const badgeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchAllBadges: builder.query({
      query: () => {
        return {
          url: "/badges/user",
          method: "GET",
        };
      },
      providesTags: ["badges"],
    }),
    createUserBadge: builder.mutation({
      query: (data) => {
        return {
          url: "/badges/user",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ['badges']
    }),
  }),
});

export const { useFetchAllBadgesQuery, useCreateUserBadgeMutation } = badgeApi;
