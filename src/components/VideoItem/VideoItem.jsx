import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useUserDetails } from "../../contexts";
import { checkLogin, toast } from "../../utils";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./VideoItem.module.css";

const VideoItem = ({ videoData }) => {
  const { category, title, videoId, creator, thumbnail } = videoData;
  const { userState, dispatchUser } = useUserDetails();
  const { isLoggedIn, likes } = userState;

  const findIfLiked = (video) => {
    return likes.find((item) => video._id === item._id);
  };

  const handleWatchLater = () => {
    //handle watch later
  };

  const handleLikeVideo = async () => {
    if (checkLogin(isLoggedIn)) {
      try {
        const res = await axios.post(
          "/api/user/likes",
          { video: videoData },
          {
            headers: {
              authorization: localStorage.getItem("authToken"),
            },
          }
        );
        if (res.status === 200 || res.status === 201) {
          const { likes } = res.data;
          dispatchUser({ type: "ADD_TO_LIKED", payload: likes });
          toast({ type: "success", message: "Added to Liked Videos" });
        }
      } catch (err) {
        console.log("Something bad happened", err);
        toast({ type: "error", message: "Couldn't complete request" });
      }
    }
  };

  const handleUnlikeVideo = async () => {
    if (checkLogin(isLoggedIn)) {
      try {
        const res = await axios.delete(`/api/user/likes/${videoData._id}`, {
          headers: {
            authorization: localStorage.getItem("authToken"),
          },
        });
        if (res.status === 200 || res.status === 201) {
          const { likes } = res.data;
          dispatchUser({ type: "REMOVE_FROM_LIKED", payload: likes });
          toast({ type: "success", message: "Removed from Liked Videos" });
        }
      } catch (err) {
        console.log("oops something bad happed", err);
        toast({ type: "error", message: "Couldn't complete request" });
      }
    }
  };

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
            <div
              className={`${styles.dropdownItem}`}
              onClick={handleWatchLater}
            >
              <span className="material-icons md-24">watch_later</span>
              <div>Watch Later</div>
            </div>
            <div
              className={`${styles.dropdownItem}`}
              onClick={() => {
                findIfLiked(videoData)
                  ? handleUnlikeVideo()
                  : handleLikeVideo();
              }}
            >
              <span className="material-icons md-24">thumb_up</span>
              <div>{findIfLiked(videoData) ? "Unlike" : "Like"}</div>
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
