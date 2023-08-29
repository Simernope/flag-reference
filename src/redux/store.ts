import {configureStore} from '@reduxjs/toolkit'
import {countryApi} from "./api/countriesApi";
import countriesSlice from "./reducers/countriesReducer";

export const store = configureStore({
    reducer: {
        [countryApi.reducerPath]: countryApi.reducer,
        countries: countriesSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(countryApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch