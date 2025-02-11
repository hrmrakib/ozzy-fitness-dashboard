import baseAPI from "@/redux/api/baseAPI";


const UserAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<any, void>({
      query: () => ({
        url: "/user/all-user",
        method: "GET",
      }),
      providesTags: ["Users"],
    }),

    getUser: builder.query<any, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: ["Users"],
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserQuery } = UserAPI;
