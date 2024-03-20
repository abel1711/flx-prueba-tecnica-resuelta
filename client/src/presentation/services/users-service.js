import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => `/users`
        }),
        getUsersByName: builder.query({
            query: (name) => `/users?name ${name}`,
        }),
    }),
})
export const { useGetUsersByNameQuery, useGetUsersQuery } = usersApi;
