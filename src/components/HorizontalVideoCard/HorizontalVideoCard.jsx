import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useUserDetails } from "../../contexts";
import styles from "./HorizontalVideoCard.module.css";
import { toast } from "../../utils";

const HorizontalVideoCard = ({video}) => {

    const {thumbnail, title, videoId, creator} = video;
    const {dispatchUser} = useUserDetails();
    const navigate = useNavigate();

    const removeFromLiked = async () => {
            try {
              const res = await axios.delete(`/api/user/likes/${video._id}`, {
                headers: {
                  authorization: localStorage.getItem("authToken"),
                },
              });
              if (res.status === 200 || res.status === 201) {
                const { likes } = res.data;
                dispatchUser({ type: "REMOVE_FROM_LIKED", payload: likes });
                toast({ type: "success", message: "Removed from Liked Videos" });
              }
            } catch (err) {
              console.log("oops something bad happed", err);
              toast({ type: "error", message: "Couldn't complete request" });
            }
          }

  return (
        <div className={`${styles.horizontalCard} flex`}>    
        <div className={`${styles.thumbnail}`} onClick={()=>navigate(`/video/${videoId}`)}>
            <img src={thumbnail}/>
        </div>
        <div className={`${styles.info} flex-vertical`}>
            <h1>{title}</h1> 
            <div className={`flex ${styles.cta}`}>
                <p>{creator}</p>
                <span className={`${styles.deleteBtn} material-icons md-24 brand-color`} onClick={removeFromLiked}>delete</span>
            </div>
        </div>
        </div>
  )
}

export default HorizontalVideoCard