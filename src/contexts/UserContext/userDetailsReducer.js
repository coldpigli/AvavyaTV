const userDetailsReducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      const { firstName, history, likes, playlists } = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        firstName: firstName,
        history: history,
        likes: likes,
        playlists: playlists,
      };
    default:
     return state;
  }
};

export default userDetailsReducer;
