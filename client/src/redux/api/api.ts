import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Project, Task } from "../types";
import { updateTaskStatus } from '../../../../server/src/controllers/task.controller';
import { error } from "console";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL
    }),
    reducerPath: "api",
    tagTypes: ["Projects", "Tasks"],
    endpoints: (builder) => ({
        getProjects: builder.query<Project[], void>({
            query: () => "/projects",
            providesTags: ["Projects"],
        }),
        createProject: builder.mutation<Project, Partial<Project>>({
            query: (project) => ({
                url: "/projects",
                method: "POST",
                body: project
            }),
            invalidatesTags: ["Projects"],
        }),
        getTasks: builder.query<Task[], { projectId: number }>({
            query: (projectId) => `/tasks?projectId=${projectId}`,
            providesTags: (result) => result ? result.map(({ id }) => ({ type: "Tasks" as const, id })) : [{ type: "Tasks" as const }],
        }),
        createTask: builder.mutation<Task, Partial<Task>>({
            query: (task) => ({
                url: "/tasks",
                method: "POST",
                body: task
            }),
            invalidatesTags: ["Tasks"],
        }),
        updateTaskStatus: builder.mutation<Task, { taskId: number, status: string }>({
            query: ({ taskId, status }) => ({
                url: `/tasks/${taskId}/status`,
                method: "PATCH",
                body: { status }
            }),
            invalidatesTags: (result, error, { taskId }) => [{ type: "Tasks", id: taskId }],
        })
    })
});

export const {
    useGetProjectsQuery,
    useCreateProjectMutation
} = api;