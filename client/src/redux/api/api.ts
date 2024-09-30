import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Project } from "../types";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL
    }),
    reducerPath: "api",
    tagTypes: ["Projects"],
    endpoints: (builder) => ({
        getProjects: builder.query<Project[], void>({
            query: () => "/projects",
            providesTags: ["Projects"],
        })
    })
});

export const {} = api;