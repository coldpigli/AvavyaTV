import { useState } from "react";
import { RedirectToLogin, TopNav } from "../../components";
import { useUserDetails } from "../../contexts";
import { checkLogin } from "../../utils";
import { addAPlaylist } from "../../utils/handlePlaylists";
import styles from "./Playlist.module.css";

const Playlist = () => {
  const { userState, dispatchUser } = useUserDetails();
  const [inputActive, setInputActive] = useState(false);
  const { isLoggedIn, firstName, playlists } = userState;
  const [newPlaylist, setNewPlaylist] = useState({
    title: "",
    description: "",
  });
  const handleAddingPlaylist = () => {
    setInputActive(false);
    setNewPlaylist({ title: "", description: "" });
    addAPlaylist(newPlaylist, "authToken", isLoggedIn, dispatchUser);
  };

  return (
    <div className={`dark-theme generic-page ${styles.playlistPage}`}>
      {checkLogin(isLoggedIn) ? (
        <div>
          <TopNav />
          <div className={`${styles.playlistSection}`}>
            <div className={`${styles.playlistHeading}`}>
              <h1>
                Hi <span className={`brand-color`}>{firstName}</span>, Browse
                your playlists
              </h1>
              {inputActive ? (
                <div className={`${styles.inputContainer}`}>
                  <input
                    type="text"
                    placeholder="Add new playlist"
                    className={`${styles.addPlaylist}`}
                    value={newPlaylist.title}
                    onChange={(e) =>
                      setNewPlaylist({ ...newPlaylist, title: e.target.value })
                    }
                  />
                  <span
                    className={`material-icons md-24 txt-gray ${styles.addPlaylistBtn}`}
                    onClick={handleAddingPlaylist}
                  >
                    add
                  </span>
                </div>
              ) : (
                <button
                  className={`btn btn-primary-outline`}
                  onClick={() => setInputActive(true)}
                >
                  Add a new playlist
                </button>
              )}
            </div>
            <div className={`${styles.playlistDisplay}`}>
              {playlists.map((playlist) => {
                return (
                  <div className={`${styles.playlistItem}`}>
                    {playlist.title}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <RedirectToLogin />
      )}
    </div>
  );
};

export default Playlist;
