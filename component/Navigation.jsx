import Link from "next/link";
import fetchData from "../fetchData/entry";
import styles from "../styles/component/Navigation.module.css";

function Navigation(props) {
  return (
    <div className={styles["container"]}>
      <div className={styles["image-container"]}>
        <img
          src="https://images.contentstack.io/v3/assets/blt44c16d8c8020721b/blt2e9c3e486b15ca0e/6006f826533a1810075f447b/logo_header.svg"
          alt="logo"
        />
      </div>
      <ul className={styles["link"]}>
        {props.nav.map((list) => {
          return (
            <li className={styles["li"]} key={list._metadata.uid}>
              {list.navlink.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navigation;
