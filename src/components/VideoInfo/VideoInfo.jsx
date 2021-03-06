import styles from "./VideoInfo.module.css";
import { useState } from "react";
import { useUserDetails } from "../../contexts";
import { checkLogin } from "../../utils";
import { handleLikeVideo, handleUnlikeVideo } from "../../utils/handleLikeUnlike";
import { addToWatchlater, removeFromWatchlater } from "../../utils/handleWatchLater";

const VideoInfo = ({ videoMetaData, setShowModal }) => {
  const [toggleDesc, setToggleDesc] = useState(false);
  const { category, creator, description, title } = videoMetaData;
  const { userState, dispatchUser } = useUserDetails();
  const { isLoggedIn, likes, watchlater } = userState;
  

  const findIfLiked = (video) => {
      return likes?.find((item)=>video._id===item._id)
  }

  const findIfWatchlater = (video) => {
    return watchlater?.find((item)=>video._id===item._id)
  }


  const handleShare = () => {
    if (checkLogin(isLoggedIn)) {
      //handle like
    }
  };

  const handleAddToPlaylist = () => {
    if(checkLogin(isLoggedIn)){
      setShowModal(true);
    }
  }

  return (
    <div className={`flex-vertical`}>
      <section className={`flex-vertical`}>
        <span className={`brand-color txt-label`}>#{category}</span>
        <p className={`paragraph1 txt-bold`}>{title}</p>
        <div className={`${styles.callToAction} flex`}>
          <div
            className={`${styles.ctaButtons} flex-vertical ${findIfLiked(videoMetaData)?"brand-color":""}`}
            onClick={()=>{
                findIfLiked(videoMetaData)
                ?
                handleUnlikeVideo(videoMetaData, "authToken", isLoggedIn, dispatchUser)
                :
                handleLikeVideo(videoMetaData, "authToken", isLoggedIn, dispatchUser)
            }}
          >
            <span className="material-icons md-24">thumb_up</span>
            <p className={`txt-label`}>LIKE</p>
          </div>
          <div
            className={`${styles.ctaButtons} flex-vertical ${findIfWatchlater(videoMetaData)?"brand-color":""}`}
            onClick={()=>{
              findIfWatchlater(videoMetaData)
              ?
              removeFromWatchlater(videoMetaData, "authToken", isLoggedIn, dispatchUser)
              :
              addToWatchlater(videoMetaData, "authToken", isLoggedIn, dispatchUser)
            }}
          >
            <span className="material-icons md-24">watch_later</span>
            <p className={`txt-label`}>WATCH LATER</p>
          </div>
          <div
            className={`${styles.ctaButtons} flex-vertical`}
            onClick={handleAddToPlaylist}
          >
            <span className="material-icons md-24">playlist_add</span>
            <p className={`txt-label`}>SAVE</p>
          </div>
          <div
            className={`${styles.ctaButtons} flex-vertical`}
            onClick={handleShare}
          >
            <span className="material-icons md-24">ios_share</span>
            <p className={`txt-label`}>SHARE</p>
          </div>
        </div>
        <p className={`${styles.artist}`}>Artist: {creator}</p>
        <p className={`${toggleDesc ? "show" : "hide"} txt-label txt-gray`}>
          {description}
        </p>
        <p
          className={`${styles.description} paragraph2 brand-color`}
          onClick={() => setToggleDesc((prev) => !prev)}
        >
          {toggleDesc ? "Show Less" : "Show Description"}
        </p>
      </section>
    </div>
  );
};

export default VideoInfo;
