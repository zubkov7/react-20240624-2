import { NavLink } from "react-router-dom";

import styles from "./styles.module.css";
import classNames from "classnames";

export const HeadphoneTab = ({ name, to }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames(styles.link, {
          [styles.activeLink]: isActive,
        })
      }
      to={to}
    >
      {name}
    </NavLink>
  );
};
