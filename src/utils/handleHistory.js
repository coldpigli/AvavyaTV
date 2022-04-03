import axios from "axios";
import checkLogin from "./checkLogin";
import toast from "./toast";

const addToHistory = async (videoData, tokenName, isLoggedIn, dispatchUser) => {
    if (checkLogin(isLoggedIn)) {
      try {
        const res = await axios.post(
          "/api/user/history",
          { video: videoData },
          {
            headers: {
              authorization: localStorage.getItem(tokenName),
            },
          }
        );
        if (res.status === 200 || res.status === 201) {
          const { history } = res.data;
          dispatchUser({type: "ADD_TO_HISTORY", payload: history})
        }
      } catch (err) {
        console.log("Something bad happened", err);
      }
    }
  };

  const removeFromHistory = async (videoData, tokenName, isLoggedIn, dispatchUser) => {
    if (checkLogin(isLoggedIn)) {
      try {
        const res = await axios.delete(`/api/user/history/${videoData._id}`, {
          headers: {
            authorization: localStorage.getItem(tokenName),
          },
        });
        if (res.status === 200 || res.status === 201) {
          const { history } = res.data;
          toast({ type: "success", message: "Removed from History" });
          dispatchUser({type: "REMOVE_FROM_HISTORY", payload: history})   
        }
      } catch (err) {
        console.log("oops something bad happed", err);
        toast({ type: "error", message: "Couldn't complete request" });
      }
    }
};

const clearHistory = async (tokenName, isLoggedIn, dispatchUser) => {
    if (checkLogin(isLoggedIn)) {
      try {
        const res = await axios.delete(`/api/user/history/all`, {
          headers: {
            authorization: localStorage.getItem(tokenName),
          },
        });
        if (res.status === 200 || res.status === 201) {
          const { history } = res.data;
          toast({ type: "success", message: "Cleared your History" });
          dispatchUser({type: "CLEAR_HISTORY", payload: history})   
        }
      } catch (err) {
        console.log("oops something bad happed", err);
        toast({ type: "error", message: "Couldn't complete request" });
      }
    }
};

export {addToHistory, removeFromHistory, clearHistory};

  