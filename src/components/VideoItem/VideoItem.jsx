import { Link } from "react-router-dom";
import { useUserDetails } from "../../contexts";
import { handleLikeVideo, handleUnlikeVideo } from "../../utils/handleLikeUnlike";
import { addToWatchlater, removeFromWatchlater } from "../../utils/handleWatchLater";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./VideoItem.module.css";

const VideoItem = ({ videoData }) => {
  const { category, title, videoId, creator, thumbnail } = videoData;
  const { userState, dispatchUser } = useUserDetails();
  const { isLoggedIn, likes, watchlater } = userState;
  console.log("From Lisiting page", userState);

  const findIfLiked = (video) => {
    return likes?.find((item) => video._id === item._id);
  };

  const findIfWatchlater = (video) => {
    return watchlater?.find((item)=>video._id === item._id);
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
            <div
              className={`${styles.dropdownItem}`}
              onClick={()=>{
                findIfWatchlater(videoData)
                  ? removeFromWatchlater(videoData, "authToken", isLoggedIn, dispatchUser)
                  : addToWatchlater(videoData, "authToken", isLoggedIn, dispatchUser)
              }}
            >
              <span className="material-icons md-24">watch_later</span>
              <div>{findIfWatchlater(videoData) ? "Remove from Watch Later" : "Watch Later"}</div>
            </div>
            <div
              className={`${styles.dropdownItem}`}
              onClick={() => {
                findIfLiked(videoData)
                  ?  handleUnlikeVideo(videoData, "authToken", isLoggedIn, dispatchUser)
                  : handleLikeVideo(videoData, "authToken", isLoggedIn, dispatchUser);
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
