import { useNavigate } from "react-router-dom";
import { useUserDetails } from "../../contexts";
import styles from "./HorizontalVideoCard.module.css";

const HorizontalVideoCard = ({video, handleClickAction, playlist}) => {

    const {thumbnail, title, videoId, creator} = video;
    const { userState, dispatchUser} = useUserDetails();
    const {isLoggedIn} = userState;
    const navigate = useNavigate();


  return (
        <div className={`${styles.horizontalCard} flex`}>    
        <div className={`${styles.thumbnail}`} onClick={()=>navigate(`/video/${videoId}`)}>
            <img src={thumbnail}/>
        </div>
        <div className={`${styles.info} flex-vertical`}>
            <h1>{title}</h1> 
            <div className={`flex ${styles.cta}`}>
                <p>{creator}</p>
                <span className={`${styles.deleteBtn} material-icons md-24 brand-color`} onClick={()=>{
                 playlist?handleClickAction(playlist._id, video._id, "authToken", isLoggedIn, dispatchUser): handleClickAction(video, "authToken", isLoggedIn, dispatchUser );
                }}>delete</span>
            </div>
        </div>
        </div>
  )
}

export default HorizontalVideoCard