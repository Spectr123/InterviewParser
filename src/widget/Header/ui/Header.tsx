import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        <h3>Interview Insights</h3>
      </NavLink>

      <div className={styles.line}>
        <NavLink
          to="/interview"
          className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }
        >
          <h5>Voice interview</h5>
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }
        >
          <h5>Analytics</h5>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }
        >
          <h5>Profile</h5>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
