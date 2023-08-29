import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

type Params = {
    countryName?: string
    filteredByRegion: string
    page: string
}

const Pagination = () => {
    let [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = useState<string>(searchParams.get('page') || '1')

    const buttonStyle = `dark:bg-gray-200 rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400 cursor-pointer`

    useEffect(() => {
        setPage(searchParams.get('page') || '1')
        const countryName = searchParams.get('countryName')
        const params: Params = {
            filteredByRegion: searchParams.get('filteredByRegion') || 'All',
            page: page
        }
        if (countryName) {
            params.countryName = countryName
        }
        setSearchParams(params)
    }, [page, searchParams, setSearchParams])

    return (
        <div className="flex items-center justify-center">
            <div className="flex select-none space-x-1 text-gray-700">
                {
                    page !== '1' &&
                    <>
                        <div onClick={() => setPage((Number(page) - 1).toString())}
                             className={`${buttonStyle} ${page === '1' && 'cursor-not-allowed'}`}> Previous
                        </div>
                        <div onClick={() => setPage((Number(page) - 1).toString())} className={buttonStyle}>
                            {Number(page) - 1}
                        </div>
                    </>
                }
                <div className={`${buttonStyle} bg-gray-400`}>
                    {page}
                </div>
                {
                    page !== '10' &&
                    <>
                        <div onClick={() => setPage((Number(page) + 1).toString())} className={buttonStyle}>
                            {Number(page) + 1}
                        </div>
                        <div onClick={() => setPage((Number(page) + 1).toString())}
                             className={`${buttonStyle} ${page === '10' && 'cursor-not-allowed'}`}> Next
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Pagination