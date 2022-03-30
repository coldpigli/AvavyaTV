import {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useFilter, useVideos } from "../../contexts";
import VideoItem from "../VideoItem/VideoItem";
import styles from "./VideoList.module.css";

const VideoList = () => {

  const { videoState, isLoading } = useVideos();
  const { videoList } = videoState;
  const { filterValue, setFilterValue } = useFilter();
  const {category} = useParams();

  const getFilteredVideos = () => {
    if (filterValue === "All") {
      return videoList;
    } else {
      return videoList.filter((item) => item.category === filterValue);
    }
  };

  useEffect(() => {
    setFilterValue(category);
  }, [])
  
  const filteredVideos = getFilteredVideos();
  return (
    <div className={`${styles.videoList}`}>
      {filteredVideos?.map((item) => (
        <VideoItem videoData={item} key={item.id} />
      ))}
    </div>
  );
};

export default VideoList;
