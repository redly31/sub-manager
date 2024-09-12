import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISub } from "../../models/ISub";

export const subsApi = createApi({
  reducerPath: "subsApi",
  tagTypes: ["Subs"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (build) => ({
    getSubs: build.query<ISub[], number>({
      query: () => `subs`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: ISub) => ({
                type: "Subs" as const,
                id,
              })),
              { type: "Subs", id: "LIST" },
            ]
          : [{ type: "Subs", id: "LIST" }],
    }),
    addSub: build.mutation<ISub, ISub>({
      query: (body: ISub) => ({
        url: "subs",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Subs", id: "LIST" }],
    }),
    deleteSub: build.mutation<ISub, string>({
      query: (id) => ({
        url: `subs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Subs", id: "LIST" }],
    }),
  }),
});

export const { useGetSubsQuery, useAddSubMutation, useDeleteSubMutation } = subsApi;
