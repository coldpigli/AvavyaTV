import { useCategories, useFilter } from "../../contexts";
import styles from "./FilterPills.module.css";

const FilterPills = () => {
  const { categories, isLoading } = useCategories();
  const {filterValue, setFilterValue} = useFilter();

  const filterProducts = (category) => {
    setFilterValue(category.categoryName);
  }
  
  return (
    <div className={`${styles.filterBar} flex`}>
      {categories.map((category) => {
        return (
          <div className={`${styles.filterChip} ${(category.categoryName===filterValue? styles.filterChipActive:"")} paragraph2`} onClick={()=>filterProducts(category)}>
            <div>{category.categoryName}</div>
          </div>
        );
      })}
    </div>
  );
};

export default FilterPills;
