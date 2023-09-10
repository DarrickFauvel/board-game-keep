import { Link } from "react-router-dom";

import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.wrapper}>
      <ul>
        <li>
          <Link to="/games">List games</Link>
        </li>
        <li>
          <Link to="/new">Add a game</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
