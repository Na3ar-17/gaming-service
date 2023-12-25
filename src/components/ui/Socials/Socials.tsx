import { NextPage } from "next";
import styles from "./Socials.module.scss";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { LiaFacebookSquare } from "react-icons/lia";
import { LuTwitter } from "react-icons/lu";
import { CSSProperties } from "react";
interface IProps {
  font?: number;
  style?: CSSProperties | undefined;
}

const Socials: NextPage<IProps> = ({ font, style }) => {
  return (
    <div style={style} className={styles.socials}>
      <FaInstagram className={styles.icon} style={{ fontSize: font + "px" }} />
      <LiaFacebookSquare
        className={styles.icon}
        style={{ fontSize: font + "px" }}
      />
      <LuTwitter className={styles.icon} style={{ fontSize: font + "px" }} />
      <FiYoutube className={styles.icon} style={{ fontSize: font + "px" }} />
    </div>
  );
};

export default Socials;
