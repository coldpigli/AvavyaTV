const userDetailsReducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      console.log(action.payload);
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
    case "UPDATE_PLAYLIST":
      return {
        ...state, playlists: action.payload
      }
    case "ADD_VIDEO_TO_PLAYLIST":
      const playlist = action.payload
      const whichPlaylist = state.playlists.find((item)=>item._id===playlist._id);
      const temp = state.playlists.map((item)=>(item._id===whichPlaylist._id)?playlist:item);
      return {...state, playlists: temp}
    case "DELETE_VIDEO_FROM_PLAYLIST":
      const newPlaylist = action.payload
      const findPlaylist = state.playlists.find((item)=>item._id===newPlaylist._id);
      const newALlPlaylist = state.playlists.map((item)=>(item._id===findPlaylist._id)?newPlaylist:item);
      return {...state, playlists: newALlPlaylist}

    default:
     return state;
  }
};

export default userDetailsReducer;
