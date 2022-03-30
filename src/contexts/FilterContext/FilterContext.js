import { createContext, useContext, useState } from "react";

const FilterContext = createContext(null);

const useFilter = () => useContext(FilterContext);

const FilterProvider = ({children}) => {

    const [filterValue, setFilterValue] = useState("All");

    return <FilterContext.Provider value={{filterValue, setFilterValue}}>
                {children}
           </FilterContext.Provider>
}

export {
    FilterProvider,
    useFilter
}