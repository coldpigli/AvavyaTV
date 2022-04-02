import axios from "axios";
import checkLogin from "./checkLogin";
import toast from "./toast";

const handleLikeVideo = async (videoData, tokenName, isLoggedIn, dispatchUser) => {
    if (checkLogin(isLoggedIn)) {
      try {
        const res = await axios.post(
          "/api/user/likes",
          { video: videoData },
          {
            headers: {
              authorization: localStorage.getItem(tokenName),
            },
          }
        );
        if (res.status === 200 || res.status === 201) {
          const { likes } = res.data;
          toast({ type: "success", message: "Added to Liked Videos" });
          dispatchUser({type: "ADD_TO_LIKED", payload: likes})
        }
      } catch (err) {
        console.log("Something bad happened", err);
        toast({ type: "error", message: "Couldn't complete request" });
      }
    }
  };


const handleUnlikeVideo = async (videoData, tokenName, isLoggedIn, dispatchUser) => {
    if (checkLogin(isLoggedIn)) {
      try {
        const res = await axios.delete(`/api/user/likes/${videoData._id}`, {
          headers: {
            authorization: localStorage.getItem(tokenName),
          },
        });
        if (res.status === 200 || res.status === 201) {
          const { likes } = res.data;
          toast({ type: "success", message: "Removed from Liked Videos" });
          dispatchUser({type: "REMOVE_FROM_LIKED", payload: likes})   
        }
      } catch (err) {
        console.log("oops something bad happed", err);
        toast({ type: "error", message: "Couldn't complete request" });
      }
    }
};  


export {handleLikeVideo, handleUnlikeVideo};