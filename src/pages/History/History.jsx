import { HorizontalVideoCard, RedirectToLogin, TopNav } from "../../components";
import { useUserDetails } from "../../contexts";
import { checkLogin } from "../../utils";
import { clearHistory, removeFromHistory } from "../../utils/handleHistory";
import styles from "./History.module.css";

const History = () => {
  const { userState, dispatchUser } = useUserDetails();
  const { isLoggedIn, history, firstName } = userState;

  const deleteEntireHistory = () => {
    clearHistory("authToken",isLoggedIn,dispatchUser);
  }

  return (
    <div className={`dark-theme generic-page ${styles.historyPage}`}>
      {checkLogin(isLoggedIn) ? (
        <div>
          <TopNav />
          <div className={`${styles.historyClean}`}>
            <button class="btn btn-failure" onClick={deleteEntireHistory}>CLEAR HISTORY</button>
          </div>
          <section className={`${styles.historySection} flex wrap`}>
            <div className={`${styles.historyLeft} flex-vertical`}>
              <h1 className={`heading1 dark-font`}>
                See your history <span className={`day-font`}>{firstName}</span>
              </h1>
              <p className={`paragraph1`}>
                So far you've seen{" "}
                <span className={`dark-font`}>{history.length}</span> of our
                videos
              </p>
            </div>
            <div className={`${styles.historyRight} flex-vertical`}>
              {history.map((item) => (
                <HorizontalVideoCard
                  video={item}
                  handleClickAction={removeFromHistory}
                />
              ))}
            </div>
          </section>
        </div>
      ) : (
        <RedirectToLogin />
      )}
    </div>
  );
};

export default History;
