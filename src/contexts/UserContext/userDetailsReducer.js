const userDetailsReducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      const { firstName, history, likes, playlists, watchlater } = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        firstName: firstName,
        history: history,
        likes: likes,
        watchlater: watchlater,
        playlists: playlists,
      };
    case "USER_LOGOUT":
      localStorage.removeItem("authToken");
      return {
        isLoggedIn: false,
        firstName: "",
        history: [],
        likes: [],
        watchlater: [],
        playlists: []
      }  
    case "ADD_TO_LIKED":
      return {
        ...state, likes: action.payload
      }  
    case "REMOVE_FROM_LIKED":
      return {
        ...state, likes: action.payload
      }  
    case "ADD_TO_WATCHLATER":
      return {
        ...state, watchlater: action.payload
      }
    case "REMOVE_FROM_WATCHLATER":
      return {
        ...state, watchlater: action.payload
      }
    case "ADD_TO_HISTORY":
      return {
        ...state, history: action.payload
      }
    case "REMOVE_FROM_HISTORY":
      return {
        ...state, history: action.payload
      }
    case "CLEAR_HISTORY":
      return {
        ...state, history: action.payload
      }
    default:
     return state;
  }
};

export default userDetailsReducer;
