import {FC, useEffect} from "react";
import CountriesList from "./CountriesList";
import Pagination from "../../components/Pagination";
import {useSearchParams} from "react-router-dom";
import Spinner from "../../components/Spinner";
import FilterSection from "./FilterSection";

type Params = {
    countryName?: string
    filteredByRegion: string
    page: string
}

type HomePageProps = {
    isLoading: boolean
}

const HomePage: FC<HomePageProps> = ({isLoading}: HomePageProps) => {
    let [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        const countryName = searchParams.get('countryName')
        const params: Params = {
            filteredByRegion: searchParams.get('filteredByRegion') || 'All',
            page: searchParams.get('page') || '1'
        }
        if (countryName) {
            params.countryName = countryName
        }
        setSearchParams(params)
    }, [searchParams, setSearchParams])

    return (
        <>
            <FilterSection/>
            {
                isLoading
                    ? <Spinner/>
                    : <CountriesList/>
            }
            <Pagination/>
        </>
    )
}

export {HomePage}