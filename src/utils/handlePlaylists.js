import axios from "axios";
import checkLogin from "./checkLogin";
import toast from "./toast";

const addAPlaylist = async (playlistData, tokenName, isLoggedIn, dispatchUser) => {
    if (checkLogin(isLoggedIn)) {
      try {
        const res = await axios.post(
          "/api/user/playlists",
          { playlist: playlistData },
          {
            headers: {
              authorization: localStorage.getItem(tokenName),
            },
          }
        );
        if (res.status === 200 || res.status === 201) {
          const { playlists } = res.data;
          dispatchUser({type: "ADD_TO_PLAYLIST", payload: playlists})
          toast({type:"success", message: "Playlist Created"})
        }
      } catch (err) {
        console.log("Something bad happened", err);
        toast({type:"error", message: "Couldn't complete the reuqest"})
      }
    }
  };

  const addVideoToPlaylist = async (videoData, tokenName, isLoggedIn, dispatchUser, playlistId) => {
    if (checkLogin(isLoggedIn)) {
      try {
        const res = await axios.post(
          `/api/user/playlists/${playlistId}`,
          { video: videoData },
          {
            headers: {
              authorization: localStorage.getItem(tokenName),
            },
          }
        );
        if (res.status === 200 || res.status === 201) {
          const { playlist } = res.data;
          dispatchUser({type: "ADD_VIDEO_TO_PLAYLIST", payload: playlist})
          toast({type:"success", message: "Video Added to Playlist"})
        }
      } catch (err) {
        console.log("Something bad happened", err);
        toast({type:"error", message: "Couldn't complete the reuqest"})
      }
    }
  };

  export {addAPlaylist, addVideoToPlaylist};