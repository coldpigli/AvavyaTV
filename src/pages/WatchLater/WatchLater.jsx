import { HorizontalVideoCard, RedirectToLogin, TopNav } from "../../components";
import { useUserDetails } from '../../contexts';
import { checkLogin } from '../../utils';
import { removeFromWatchlater } from '../../utils/handleWatchLater';
import styles from './WatchLater.module.css';

const WatchLater = () => {
    const { userState} = useUserDetails();
    const { isLoggedIn, watchlater, firstName } = userState;

  return (

    <div className={`dark-theme generic-page ${styles.watchPage}`}>
      {
        (checkLogin(isLoggedIn))
        ?
        <div>
          <TopNav/>
          <section className={`${styles.watchSection} flex wrap`}>
              <div className={`${styles.watchLeft} flex-vertical`}>
                  <h1 className={`heading1 dark-font`}>See what you've saved for later <span className={`day-font`}>{firstName}</span></h1>
                  <p className={`paragraph1`}>So far you want to watch <span className={`dark-font`}>{watchlater.length}</span> of our videos</p>
              </div>
              <div className={`${styles.watchRight} flex-vertical`}>
                {
                  watchlater.map((item)=><HorizontalVideoCard video={item} handleClickAction={removeFromWatchlater}/>)
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

export default WatchLater