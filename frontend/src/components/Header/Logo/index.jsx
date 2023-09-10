import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import styles from "./logo.module.css";

const Logo = () => {
  return (
    <Link to="/" className={styles.wrapper}>
      <Icon icon="logos:formkeep" style={{ fontSize: "48px" }} />
      <h1>Board Game Keep</h1>
    </Link>
  );
};

export default Logo;
