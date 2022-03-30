import { useState } from "react";
import { useCategories } from "../../contexts";
import styles from "./FilterPills.module.css";

const FilterPills = () => {
  const { categories, isLoading } = useCategories();
  const addingActive = categories.map((item)=>((item.categoryName==="All")?{...item, isActive: true}:{...item, isActive: false}));
  const [filterList, setFilterList] = useState(addingActive);
  console.log(filterList);
    
  return (
    <div className={`${styles.filterBar} flex`}>
      {filterList.map((category) => {
        return (
          <div className={`${styles.filterChip} ${(category.isActive?styles.filterChipActive:"")} paragraph2`}>
            <div>{category.categoryName}</div>
          </div>
        );
      })}
    </div>
  );
};

export default FilterPills;
