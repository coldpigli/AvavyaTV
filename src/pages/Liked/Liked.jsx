import { HorizontalVideoCard, RedirectToLogin, TopNav } from "../../components";
import { useUserDetails } from "../../contexts";
import { checkLogin } from "../../utils";
import styles from "./Liked.module.css";

const Liked = () => {

  const { userState, dispatchUser } = useUserDetails();
  const { isLoggedIn, likes, firstName } = userState;

  return (
    <div className={`dark-theme generic-page ${styles.likedPage}`}>
      {
        (checkLogin(isLoggedIn))
        ?
        <div>
          <TopNav/>
          <section className={`${styles.likedSection} flex wrap`}>
              <div className={`${styles.likedLeft} flex-vertical`}>
                  <h1 className={`heading1 dark-font`}>See what you've liked <span className={`day-font`}>{firstName}</span></h1>
                  <p className={`paragraph1`}>So far you've liked <span className={`dark-font`}>{likes.length}</span> of our videos</p>
              </div>
              <div className={`${styles.likedRight} flex-vertical`}>
                {
                  likes.map((item)=><HorizontalVideoCard video={item}/>)
                }
              </div>
          </section>
        </div>
        :
        <RedirectToLogin/>
      }
    </div>
  )
}

export default Liked;