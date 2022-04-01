import styles from "./RedirectToLogin.module.css";
import { Link } from 'react-router-dom'

const RedirectToLogin = () => {
  return (
    <div className={`children-middle flex-vertical ${styles.redirect}`}>
        <h1 className={`heading1`}>You need to login to access this</h1>
        <Link to="/login" className={`btn btn-primary`}>Go to Login</Link>
    </div>
  )
}

export default RedirectToLogin