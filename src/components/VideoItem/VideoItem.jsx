import { Link } from "react-router-dom";
import { useUserDetails } from "../../contexts";
import { handleLikeVideo, handleUnlikeVideo } from "../../utils/handleLikeUnlike";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./VideoItem.module.css";

const VideoItem = ({ videoData }) => {
  const { category, title, videoId, creator, thumbnail } = videoData;
  const { userState, dispatchUser } = useUserDetails();
  const { isLoggedIn, likes } = userState;
  console.log("From Lisiting page", userState);

  const findIfLiked = (video) => {
    return likes?.find((item) => video._id === item._id);
  };

  const handleWatchLater = () => {
    //handle watch later
  };

  const likeClickHandler = () => {
     handleLikeVideo(videoData, "authToken", isLoggedIn, dispatchUser)
  };

  const unlikeClickHandler = () => {
    handleUnlikeVideo(videoData, "authToken", isLoggedIn, dispatchUser)
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
                  ? unlikeClickHandler()
                  : likeClickHandler();
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
