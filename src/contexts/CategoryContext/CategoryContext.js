import { createContext, useContext, useState, useEffect } from "react"; 
import { useAxios } from "../../utils";

const CategoryContext = createContext(null);

const useCategories = () => useContext(CategoryContext);

const CategoryProvider = ({ children }) => {
  const { responseData, isLoading, errorFlag } = useAxios("/api/categories");
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    if (isLoading === false && errorFlag === false) {
      setCategories(responseData?.categories)
      console.log("From djnsadjkcnakjnc",responseData);
    }
  },[isLoading])

  return (
    <CategoryContext.Provider value={{ categories, isLoading }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryProvider, useCategories };
