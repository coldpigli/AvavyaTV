import React from 'react'
import styles from "./CategorySection.module.css";
import { Link } from "react-router-dom";

const CategorySection = ({children, title, variation, nextUrl}) => {
  return (
    <section className={`${styles.categorySection} flex-vertical`}>
        <div className="children-centered">
            <h1 className="heading2">{title}</h1>
            <div className="category-cta">
              <Link to={`/${nextUrl}`}>
                <button className="btn btn-primary-outline">See all</button>
              </Link>
            </div>
        </div>
        {children}
    </section>
  )
}

export default CategorySection