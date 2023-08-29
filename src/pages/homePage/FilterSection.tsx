import SearchInput from "../../components/filterComponents/SearchInput";
import SelectFilter from "../../components/filterComponents/SelectFilter";

const FilterSection = () => {
    return(
        <div className='flex justify-between mb-8 dark:text-black md:flex-row flex-col items-center'>
            <SearchInput/>
            <SelectFilter/>
        </div>
    )
}

export default FilterSection