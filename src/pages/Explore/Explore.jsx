import React from 'react'
import { useParams } from 'react-router-dom';
import { FilterPills, TopNav, VideoList } from '../../components';

const Explore = () => {

  const {category} = useParams();

  return (
    <div className={`dark-theme generic-page`} >
      <TopNav/>
      <FilterPills/>
      <VideoList/>
    </div>
  )
}

export default Explore;