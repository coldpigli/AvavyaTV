import React from "react";
import { CategoryCard, CategoryList, CategorySection, TopNav } from "../../components";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={`${styles.homepage} dark-theme generic-page`}>
      <TopNav />
      <div className={`${styles.heroContainer}`}>
        <div className={`${styles.heroImage}`}>
          <img src="https://ik.imagekit.io/avavya/VideoLib/sabysingh_KM09Ln7j9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648500041757"></img>
        </div>
        <div className={`${styles.heroInfo}`}>
          <h1 className={`${styles.heroHeading} gap-d20`}>Welcome to <span className="brand-color">AvavyaTV</span></h1>
          <h3 className="gap-d30">
            A place to watch your favourite Indie Artists.
          </h3>
          <p className="paragraph2 txt-gray gap-d30">
            Independent music (often referred to as indie music or indie) is
            music produced independently from commercial record labels or their
            subsidiaries, a process that may include an autonomous,
            do-it-yourself approach to recording and publishing.
          </p>
          <Link to="/explore" className="btn btn-primary">
            Explore
          </Link>
        </div>
      </div>
      <CategorySection title="Browse Genres" nextUrl = "explore">
        <CategoryList/>
      </CategorySection>
    </div>
  );
};

export default Home;
