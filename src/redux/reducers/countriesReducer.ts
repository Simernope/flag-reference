import {createSlice} from '@reduxjs/toolkit'
import {CountryDto} from "../api/types/types";

// Define the initial state using that type
interface CountryState {
    countriesList: Array<CountryDto>
    filteredCountries: Array<CountryDto>
}

const initialState: CountryState = {
    countriesList: [],
    filteredCountries: []
}

export const countriesSlice = createSlice({
    name: 'countries',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setCountries: (state, action) => {
            state.countriesList = action.payload
        },
    },
})

export const {setCountries} = countriesSlice.actions

export default countriesSlice.reducer