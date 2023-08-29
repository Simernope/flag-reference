import {useSearchParams} from "react-router-dom";

type Params = {
    countryName?: string
    filteredByRegion: string
    page: string
}

const SelectFilter = () => {

    let [searchParams, setSearchParams] = useSearchParams()
    const countryName = searchParams.get('countryName') || ''

    const handleFilter = (filteredByRegion: string) => {
        const params: Params = {
            filteredByRegion: filteredByRegion,
            page: '1'
        }
        if (countryName) {
            params.countryName = countryName
        }
        setSearchParams(params)
    }

    return (
        <label className="relative block w-[230px] my-4">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <span className="material-symbols-outlined">
                        search
                    </span>
            </span>
            <select
                value={searchParams.get("filteredByRegion") || 'All'}
                onChange={event => {
                    let filteredByRegion = event.target.value
                    handleFilter(filteredByRegion)
                }}
                className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-slate-700 focus:ring-slate-500 focus:ring-1 sm:text-sm"
            >
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </label>
    )
}

export default SelectFilter