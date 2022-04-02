import axios from "axios";
import checkLogin from "./checkLogin";
import toast from "./toast";

const addToWatchlater = async (videoData, tokenName, isLoggedIn, dispatchUser) => {
    if (checkLogin(isLoggedIn)) {
      try {
        const res = await axios.post(
          "/api/user/watchlater",
          { video: videoData },
          {
            headers: {
              authorization: localStorage.getItem(tokenName),
            },
          }
        );
        if (res.status === 200 || res.status === 201) {
          const { watchlater } = res.data;
          toast({ type: "success", message: "Added to Watch Later" });
          dispatchUser({type: "ADD_TO_WATCHLATER", payload: watchlater})
        }
      } catch (err) {
        console.log("Something bad happened", err);
        toast({ type: "error", message: "Couldn't complete request" });
      }
    }
  };

  const removeFromWatchlater = async (videoData, tokenName, isLoggedIn, dispatchUser) => {
    if (checkLogin(isLoggedIn)) {
      try {
        const res = await axios.delete(`/api/user/watchlater/${videoData._id}`, {
          headers: {
            authorization: localStorage.getItem(tokenName),
          },
        });
        if (res.status === 200 || res.status === 201) {
          const { watchlater } = res.data;
          toast({ type: "success", message: "Removed from Watchlater" });
          dispatchUser({type: "REMOVE_FROM_WATCHLATER", payload: watchlater})   
        }
      } catch (err) {
        console.log("oops something bad happed", err);
        toast({ type: "error", message: "Couldn't complete request" });
      }
    }
};

export {addToWatchlater, removeFromWatchlater};

  