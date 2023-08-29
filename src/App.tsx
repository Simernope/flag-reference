import React, {useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import {CountryPage, HomePage, NotFoundPage} from "./pages";
import Layout from "./components/Layout";
import {useGetAllCountriesQuery} from "./redux/api/countriesApi";
import {useAppDispatch} from "./redux/hooks/hooks";
import {setCountries} from "./redux/reducers/countriesReducer";

function App() {
    const {data, isLoading} = useGetAllCountriesQuery('')
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!isLoading) {
            dispatch(setCountries(data))
        }
    }, [data, dispatch, isLoading])

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<HomePage isLoading={isLoading}/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
                <Route path="/:countryName" element={<CountryPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
