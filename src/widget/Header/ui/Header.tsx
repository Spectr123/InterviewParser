import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
      <Link to="/"><h3>Interview Insights</h3></Link>
      <div className={styles.line}>
        <Link to="/interview"><h5>Voice interview</h5></Link>
        <h5>Analytics</h5>
        <h5>Profile</h5>
      </div>
    </div>
  );
}

export default Header;
