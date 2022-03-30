import React from 'react'
import { useVideos } from '../../contexts'
import VideoItem from '../VideoItem/VideoItem';
import styles from './VideoList.module.css';


const VideoList = () => {

    const {videoState, isLoading} = useVideos();
    const {videoList} = videoState;
    
  return (
    <div className={`${styles.videoList}`}>
        {
            videoList?.map((item)=><VideoItem videoData = {item} key={item.id}/>)
        }
    </div>
  )
}

export default VideoList