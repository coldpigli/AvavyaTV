import { useState } from "react";
import { useUserDetails } from "../../contexts";
import { toast } from "../../utils";
import { addAPlaylist, addVideoToPlaylist } from "../../utils/handlePlaylists";
import styles from "./Modal.module.css";

const Modal = ({ showModal, setShowModal, videoMetaData }) => {
  const { userState, dispatchUser } = useUserDetails();
  const [newPlaylist, setNewPlaylist] = useState({
    title: "",
    description: "",
  });
  const { isLoggedIn, playlists } = userState;

  const handleAddingPlaylist = () => {  
    if(newPlaylist.title===""){
      toast({type:"error", message:"Playlist name cannot be empty"});
      return;
    }
    setNewPlaylist({ title: "", description: "" });
    addAPlaylist(newPlaylist, "authToken", isLoggedIn, dispatchUser);
  };

  const findIfVideoInPlaylist = (playlist) => {
    return playlist.videos.find((video)=>video._id===videoMetaData._id)
  }

  const handleAddingVideo = (playlistId) => {
    addVideoToPlaylist(
      videoMetaData,
      "authToken",
      isLoggedIn,
      dispatchUser,
      playlistId
    );
  };

  return (
    <div
      className={`${styles.modalContainer} ${
        showModal ? styles.showModal : styles.hideModal
      }`}
    >
      <div className={`${styles.modal}`}>
        <div className={`flex ${styles.heading}`}>
          <h2 className={`heading2 brand-color`}>Save to Playlist</h2>
          <span
            className="material-icons md-24 heading1"
            onClick={() => setShowModal(false)}
          >
            cancel
          </span>
        </div>
        <div className={`${styles.playlist} gap-u30`}>
          {playlists?.map((item) => {
            return (
              <div className={`${styles.playlistItem} flex`}>
                <span
                  className={`material-icons md-24 txt-gray ${styles.addToExisting} ${findIfVideoInPlaylist(item)?"brand-color": ""}`}
                  onClick={() => handleAddingVideo(item._id)}
                >
                  {findIfVideoInPlaylist(item)?"check_circle":"add_circle"}
                </span>
                <div>{item.title}</div>
              </div>
            );
          })}
        </div>
        <div className={`${styles.modalInput}`}>
          <input
            type="text"
            placeholder="Add a new playlist"
            value={newPlaylist.title}
            onChange={(e) =>
              setNewPlaylist({ ...newPlaylist, title: e.target.value })
            }
          />
          <span
            className={`material-icons md-24 txt-gray ${styles.addNewPlaylist}`}
            onClick={handleAddingPlaylist}
          >
            add
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
