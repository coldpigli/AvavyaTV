import { createContext, useContext, useReducer, useEffect } from "react";
import useAxios from "../../utils/useAxios";
import videoReducer from "./videoReducer";

const VideoContext = createContext(null);

const useVideos = () => useContext(VideoContext);

const VideoProvider = ({ children }) => {
  const { responseData, isLoading, errorFlag } = useAxios("/api/videos");
  const [videoState, videoDispatch] = useReducer(videoReducer, {
      videoList: []
  });

  useEffect(()=>{
        videoDispatch({type: "GET_VIDEOS", payload: responseData?.videos})
  }, [isLoading])
  
  return (
    <VideoContext.Provider
      value={{ videoState, videoDispatch, isLoading, errorFlag }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export { VideoProvider, useVideos };
