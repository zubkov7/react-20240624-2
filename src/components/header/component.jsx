import { Link } from "react-router-dom";

import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header>
      <Link className={styles.link} to='about'>
        about
      </Link>
      <Link className={styles.link} to='/'>
        main
      </Link>
      <Link className={styles.link} to='/headphones'>
        headphones
      </Link>
    </header>
  );
};
