import {useNavigate, useParams} from "react-router-dom";
import {useGetCountryByNameQuery} from "../../redux/api/countriesApi";
import {useEffect, useState} from "react";
import {CountryDto} from "../../redux/api/types/types";
import Spinner from "../../components/Spinner";

const CountryPage = () => {
    const [countryData, setCountryData] = useState<CountryDto>()
    const {countryName} = useParams()
    const {data, isLoading} = useGetCountryByNameQuery(countryName ? countryName : '')
    const navigate = useNavigate()

    useEffect(() => {
        if (data) {
            setCountryData(data[0])
        }
    }, [data])

    return (
        <section className='h-5/6'>
            <button
                className='dark:bg-gray-200 dark:text-black rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400 cursor-pointer'
                onClick={() => navigate(-1)}
            >
                Back
            </button>
            {
                isLoading
                    ? <Spinner/>
                    : countryData &&
                    <div className='grid grid-cols-12 md:gap-16 my-8 lg:items-center'>
                        <div className="col-span-12 lg:col-span-7 ">
                            <img className='rounded-md shadow-xl w-full sm:w-full'
                                 src={countryData?.flags.png}
                                 alt={countryData?.flags.alt}/>
                        </div>
                        <div className="col-span-12 lg:col-span-5 my-4 md:my-0">
                            <h1 className='text-4xl'>{countryData?.name.official}</h1>
                            <div className='my-8 grid sm:grid-cols-2 gap-1'>
                                <div>
                                    <span className='font-bold'>Native Name: </span>
                                    {countryData.name.nativeName[Object.keys(countryData.name.nativeName)[0]].official}
                                </div>
                                <div>
                                    <span className='font-bold'>Population: </span>
                                    {countryData.population.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}
                                </div>
                                <div>
                                    <span className='font-bold'>Region: </span>
                                    {countryData.region}
                                </div>
                                <div>
                                    <span className='font-bold'>Sub Region: </span>
                                    {countryData.subregion}
                                </div>
                                <div>
                                    <span className='font-bold'>Capital: </span>
                                    {countryData.capital}
                                </div>
                                <div>
                                    <span className='font-bold'>Top Level Domain: </span>
                                    {countryData.tld[0]}
                                </div>
                                <div>
                                    <span className='font-bold'>Currency: </span>
                                    {countryData.currencies[Object.keys(countryData.currencies)[0]].name}
                                    <span> ({countryData.currencies[Object.keys(countryData.currencies)[0]].symbol})</span>
                                </div>
                                <div>
                                    <span className='font-bold'>Languages: </span>
                                    {countryData.languages[Object.keys(countryData.languages)[0]]}
                                </div>
                            </div>
                            <div>
                                <span className='font-bold'>Border countries: </span>
                                <div className='flex gap-1 flex-wrap'>
                                    {
                                        countryData.borders && countryData.borders.length > 0 ? countryData.borders.map(country =>
                                            <div key={country}
                                                 className='dark:bg-gray-200 dark:text-black rounded-md bg-gray-200 px-2'>
                                                {country}
                                            </div>
                                        )
                                            : <>No borders</>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </section>
    )
}

export {CountryPage}