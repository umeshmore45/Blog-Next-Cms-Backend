import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import styles from "../styles/component/Footer.module.css";

function Footer(props) {
  return (
    <div className={styles["container"]}>
      <div>
        <Facebook className={styles["log"]} />
        <Instagram className={styles["log"]} />
        <Twitter className={styles["log"]} />
      </div>
      <p className={styles["copy"]}>Copyright © 2021 All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
