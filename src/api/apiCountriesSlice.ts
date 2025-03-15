import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiCountriesSlice = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://restcountries.com/v3.1/',
    signal: new AbortController().signal,
  }),
  tagTypes: ['Countries'],
  endpoints: (builder) => ({
    getCountries: builder.query<string[], null>({
      providesTags: ['Countries'],
      query: () => 'independent?fields=name',
      transformResponse: async (response: { name: { common: string } }[]) =>
        response.map((country) => country.name.common),
    }),
  }),
});

export const { useGetCountriesQuery } = apiCountriesSlice;
