import React from 'react'
import { useCategories } from '../../contexts';

import CategoryCard from '../CategoryCard/CategoryCard';
import styles from "./CategoryList.module.css";

const CategoryList = () => {

  const {categories, isLoading} = useCategories();

  return (
    <div className={`${styles.categoryList} flex wrap`}>
      {
        categories.slice(1).map((item)=><CategoryCard category={item}/>)
      }
    </div>
  )
}

export default CategoryList