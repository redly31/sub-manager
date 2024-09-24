import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISub } from "../../models/ISub";

export const patternsApi = createApi({
  reducerPath: "patternsApi",
  tagTypes: ["Patterns"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (build) => ({
    getPatterns: build.query<ISub[], number>({query: () => `patterns`}),
  }),
});

export const { useGetPatternsQuery } = patternsApi;
