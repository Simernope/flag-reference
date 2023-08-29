import {Link, useSearchParams} from "react-router-dom";
import {FC} from "react";
import CountryCard from "../../components/CountryCard";
import {useAppSelector} from "../../redux/hooks/hooks";

const CountriesList: FC = () => {
    const countries = useAppSelector(state => state.countries.countriesList)
    let [searchParams,] = useSearchParams()

    const countryName = searchParams.get('countryName') || ''
    const filteredByRegion = searchParams.get('filteredByRegion') || ''
    const page = searchParams.get('page') || '1'

    const filteredCountries = countries.filter((country) => {
        return ((country.name.official.toLowerCase().indexOf(countryName) !== -1) &&
            (
                filteredByRegion && filteredByRegion !== 'All' ?
                    filteredByRegion === country.region
                    : true
            )

        )
    })

    const slicedCountries = filteredCountries.slice(Number(page) * 25 - 25, Number(page) * 25)

    return (
        <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16  mb-12 min-h-screen'>
            {
                slicedCountries &&
                slicedCountries.map((country) => (
                    <Link
                        to={country.name.official}
                        key={country.name.official}>
                        <CountryCard country={country}/>
                    </Link>
                ))
            }
            {
                slicedCountries.length === 0 &&
                <h5>
                    No data... :(
                </h5>
            }
        </div>
    )
}

export default CountriesList