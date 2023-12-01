import { FC } from "react";
import styles from "./Avatar.module.scss";
import Image from "next/image";
import avatar from "../../../../public/avatar.jpg";

interface IProps {
  size?: number;
}
const Avatar: FC<IProps> = ({ size = 56 }) => {
  return (
    <div className={styles.avatar}>
      <Image
        style={{ width: size + "px" }}
        className={styles.image}
        src={avatar}
        alt="avatar"
      />
      <div
        style={{ width: size + 7 + "px", height: size + 7 + "px" }}
        className={styles.imageBG}
      ></div>
    </div>
  );
};

export default Avatar;
