import React from 'react'
import { FilterPills, TopNav, VideoList } from '../../components';

const Explore = () => {
  return (
    <div className={`dark-theme generic-page`} >
      <TopNav/>
      <FilterPills/>
      <VideoList/>
    </div>
  )
}

export default Explore;