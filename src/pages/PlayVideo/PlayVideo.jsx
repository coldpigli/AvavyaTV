import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';
import { Loader, TopNav } from '../../components';
import styles from "./PlayVideo.module.css";
import { useState } from 'react';
import { VideoInfo } from '../../components';
import { useUserDetails, useVideos } from '../../contexts';
import { addToHistory } from '../../utils/handleHistory';
import Modal from '../../components/Modal/Modal';

const PlayVideo = () => {

    const {videoId} = useParams();
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const opts = {
        height: '390',
        width: '780',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters for more info
          autoplay: 1,
        },
      };
    const { videoState } = useVideos();
    const {userState, dispatchUser} = useUserDetails();
    const {isLoggedIn} = userState;
    const { videoList } = videoState;

    const getVideoMetaData = (videoList) => {
        return videoList.find((item)=>item.videoId===videoId);
    }

    const handleOnReady = () => {
        setLoading(false);
        addToHistory(getVideoMetaData(videoList),"authToken",isLoggedIn,dispatchUser);
    }

  return (
    <div className={`${styles.playVideo} dark-theme generic-page`}>
        <TopNav/>
        <div className={`${styles.majorContainer} flex wrap`}>
            <div className={`${styles.videoFrame}`}>
                {loading?<Loader/>:null}
                <YouTube videoId={videoId} opts={opts} onReady={handleOnReady}/>
                
            </div>   
            <div className={`${styles.noteSection} flex-vertical`}>
                <h1 className={`heading1`}>
                    Notes Section
                </h1>
                <p>
                    Coming Soon
                </p>
            </div>
        </div>
        <div className={`${styles.videoInfo}`}>
            {
                loading ? null: <VideoInfo videoMetaData={getVideoMetaData(videoList)} setShowModal={setShowModal}/>
            }
        </div>
        {
            loading ? null: <Modal showModal={showModal} setShowModal={setShowModal} videoMetaData={getVideoMetaData(videoList)}/>
        }
    </div>
  )
}

export default PlayVideo