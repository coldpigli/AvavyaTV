import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';
import { Loader, TopNav } from '../../components';
import styles from "./PlayVideo.module.css";
import { useState } from 'react';

const PlayVideo = () => {

    const {videoId} = useParams();
    const [loading, setLoading] = useState(true);
    const opts = {
        height: '390',
        width: '780',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters gor more info
          autoplay: 1,
        },
      };

  return (
    <div className={`${styles.playVideo} dark-theme generic-page`}>
        <TopNav/>
        <div className={`${styles.majorContainer} flex wrap`}>
            <div className={`${styles.videoFrame}`}>
                {loading?<Loader/>:null}
                <YouTube videoId={videoId} opts={opts} onReady={()=>setLoading(false)}/>
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
    </div>
  )
}

export default PlayVideo