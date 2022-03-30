const videoReducer = (state, action) => {
    switch (action.type) {
        case "GET_VIDEOS":
            console.log("payload",action.payload)
            return {...state, videoList: action.payload}
        default:
            return state;
    }
}

export default videoReducer;