// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { CountryDto } from './types/types'

// Define a service using a base URL and expected endpoints
export const countryApi = createApi({
    reducerPath: 'countryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
    endpoints: (builder) => ({
        getCountryByName: builder.query<[CountryDto], string>({
            query: (name) => `name/${name}`,
        }),
        getAllCountries: builder.query<Array<CountryDto>, string>({
            query: () => `all`,
        }),
        getCountriesByCodes: builder.query<[CountryDto], string>({
            query: (codes) => `alpha?codes=${codes}`,
        }),
    }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetCountryByNameQuery, useGetAllCountriesQuery, useGetCountriesByCodesQuery } = countryApi