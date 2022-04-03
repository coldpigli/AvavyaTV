import { useNavigate, useParams } from "react-router-dom";
import { HorizontalVideoCard, TopNav } from "../../components";
import { useUserDetails } from "../../contexts";
import { deleteAPlaylist, deleteVideoFromPlaylist } from "../../utils/handlePlaylists";
import styles from "./SinglePlaylist.module.css";

const SinglePlaylist = () => {

    const {playlistId} = useParams();
    const navigate = useNavigate();
    const {userState, dispatchUser} = useUserDetails();
    const {isLoggedIn, playlists} = userState;
    const playlistToShow = playlists?.find((item)=>item._id===playlistId);
    const {videos} = playlistToShow;

    const deleteEntirePlaylist = (playlistId) => {
        deleteAPlaylist(playlistId, "authToken", isLoggedIn, dispatchUser)
        navigate("/playlist")
    }

  return (
    <div className={`dark-theme generic-page ${styles.playlistPage}`}>
          <TopNav />
          <div className={`${styles.playlistDelete}`}>
            <button class="btn btn-failure" onClick={()=>deleteEntirePlaylist(playlistId)}>DELETE PLAYLIST</button>
          </div>
          <section className={`${styles.playlistSection} flex wrap`}>
            <div className={`${styles.playlistLeft} flex-vertical`}>
              <h1 className={`heading1 dark-font`}>
                {playlistToShow.title}
              </h1>
              <p className={`paragraph1`}>
                You have 
                <span className={`dark-font`}> {playlistToShow.videos?.length} </span> videos in this playlist
              </p>
            </div>
            <div className={`${styles.playlistRight} flex-vertical`}>
              {videos?.map((item) => (
                <HorizontalVideoCard
                  playlist={playlistToShow}  
                  video={item}
                  handleClickAction={deleteVideoFromPlaylist}
                />
              ))}
            </div>
          </section>
        </div>
  )
}

export default SinglePlaylist