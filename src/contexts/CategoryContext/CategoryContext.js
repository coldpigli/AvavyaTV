import { createContext, useContext } from "react";
import { useAxios } from "../../utils";

const CategoryContext = createContext(null);

const useCategories = () => useContext(CategoryContext);

const CategoryProvider = ({ children }) => {
  const { responseData, isLoading, errorFlag } = useAxios("/api/categories");
  let categories = [];
  if (isLoading === false && errorFlag === false) {
    categories = responseData?.categories;
  }

  return (
    <CategoryContext.Provider value={{ categories, isLoading }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryProvider, useCategories };
