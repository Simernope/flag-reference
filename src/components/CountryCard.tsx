import {CountryDto} from "../redux/api/types/types";
import {FC} from "react";

type CountryCardProps = {
    country: CountryDto
}

const CountryCard: FC<CountryCardProps> = ({country}) => {
    const countryName = country.name.official.length > 30
        ? country.name.official.slice(0, 35) + '...'
        : country.name.official
    return (
        <div className='flex flex-col h-full rounded-md shadow-md dark:bg-slate-700 dark:shadow-slate-500 '>
                <img className='object-center h-1/2 w-full rounded-md' src={country.flags.png} alt={country.flags.alt}/>
            <div className='flex flex-col p-2 h-1/2 grow justify-end'>
                <div className='font-bold py-2 text-lg flex grow '>{countryName}</div>
                <div>
                    <span className='font-bold'>Population: </span>
                    {country.population.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}
                </div>
                <div>
                    <span className='font-bold'>Region: </span>
                    {country.region}
                </div>
                <div>
                    <span className='font-bold'>Capital: </span>
                    {country.capital}
                </div>
            </div>
        </div>
    )
}

export default CountryCard