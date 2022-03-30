import React from "react";
import { useFilter, useVideos } from "../../contexts";
import VideoItem from "../VideoItem/VideoItem";
import styles from "./VideoList.module.css";

const VideoList = () => {
  const getFilteredVideos = () => {
    if (filterValue === "All") {
      return videoList;
    } else {
      return videoList.filter((item) => item.category === filterValue);
    }
  };

  const { videoState, isLoading } = useVideos();
  const { videoList } = videoState;
  const { filterValue } = useFilter();
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
