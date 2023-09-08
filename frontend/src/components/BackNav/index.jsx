import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import styles from "./back-nav.module.css";

const BackNav = () => {
  return (
    <Link to=".." relative="path" className={styles.wrapper}>
      <Icon icon="mingcute:arrow-left-fill" />
      back
    </Link>
  );
};

export default BackNav;
