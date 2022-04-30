import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const superheroAPI = createApi({
    reducerPath: 'superheroAPI',
    baseQuery: fetchBaseQuery({baseUrl: '/api'}),
    tagTypes: ["Superhero"],
    endpoints: (build) => ({
        creatSuperheros: build.mutation({
        query: (body) => ({
            url: '/superhero',
            method: 'POST',
            body,
            }),
            invalidatesTags: ["Superhero"]
        }),
        //
        getAllSuperheros: build.query({
            query: (id) => ({
                url: '/superhero',
            }),
            providesTags: result => ["Superhero"]
        }),

        //
        deleteSuperheros: build.mutation({
            query: (id) => ({
                url: `/superhero/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["Superhero"]
        }),
        updateSuperheros: build.mutation({
            query: (body) => ({
                url: `/superhero`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ["Superhero"]
        }),
        getPage: build.query({
            query: (page) => ({
                url: `/superhero/page/${page}`,
            }),
            providesTags: result => ["Superhero"]
        }),
        getOne:build.query({
            query: (id) => ({
                url: `/superhero/${id}`,
            }),
        }),

    }),
})
export const {useCreatSuperherosMutation,
    useGetAllSuperherosQuery,
    useDeleteSuperherosMutation,
    useUpdateSuperherosMutation,
    useGetPageQuery,
    useGetOneQuery,
    } = superheroAPI
