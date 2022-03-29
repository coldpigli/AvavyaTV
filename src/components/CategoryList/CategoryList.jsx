import React from 'react'
import { useAxios } from '../../utils';
import styles from "./CategoryList.module.css";
import CategoryCard from '../CategoryCard/CategoryCard';

const CategoryList = () => {

  const {responseData, isLoading, errorFlag} = useAxios("/api/categories");
  let categories = []
  if(isLoading===false && errorFlag === false){
     categories = responseData?.categories
  }

  return (
    <div className={`${styles.categoryList} flex wrap`}>
      {
        categories.map((item)=><CategoryCard category={item}/>)
      }
    </div>
  )
}

export default CategoryList