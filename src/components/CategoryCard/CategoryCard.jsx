import React from 'react';
import styles from './CategoryCard.module.css'
import {Link} from "react-router-dom";

const CategoryCard = ({category}) => {

    const {categoryName, imageUrl} = category;

  return (
    <Link to="/explore">
        <div className={`${styles.categoryCard} flex-vertical`}>
        <div className={`${styles.categoryImage}`}>
            <img className={`avatar avatar-square avatar-lg`} src={imageUrl} />
        </div>
        <div className={`${styles.categoryInfo}`}>
            <h1 className={`heading3`}>{categoryName}</h1>
        </div>
    </div>
    </Link>
  )
}

export default CategoryCard;