import React from "react";
import { Link } from "react-router-dom";
import { useUserDetails } from "../../contexts";
import { toast } from "../../utils";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./VideoItem.module.css";

const VideoItem = ({ videoData }) => {
  const { category, title, videoId, creator, thumbnail } = videoData;
  const {userState} = useUserDetails();
  const {isLoggedIn} = userState;

  const handleWatchLater = () => {
    if(isLoggedIn){
      //add to watch later
    }
    else{
      toast({
        type: "error",
        message: "You need to login first"
      })
    }
  }

  const handleLikeVideo = () => {
      if(isLoggedIn){
        //add to liked videos
      }
      else{
        toast({
          type: "error",
          message: "You need to login first"
        })
      }
  }

  return (
    <div className={`${styles.videoItem} flex-vertical`}>
      <Link to={`/video/${videoId}`} className={`${styles.videoImage}`}>
        <img src={thumbnail} alt="video-thumb" />
      </Link>
      <div>
        <p className={`${styles.ellipse}`}>{title}</p>
        <div className="children-centered">
          <div>
            <p className={`txt-label`}>{creator}</p>
            <p className={`txt-gray txt-label`}>{category}</p>
          </div>
          <Dropdown
            cta={<span className="material-icons md-24">more_vert</span>}
          >
            <div className={`${styles.dropdownItem}`} onClick={handleWatchLater}>
              <span className="material-icons md-24">watch_later</span>
              <div>Watch Later</div>
            </div>
            <div className={`${styles.dropdownItem}`} onClick={handleLikeVideo}>
              <span className="material-icons md-24">thumb_up</span>
              <div>Like Video</div>
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
