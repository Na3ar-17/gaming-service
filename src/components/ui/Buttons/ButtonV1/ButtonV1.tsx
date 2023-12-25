import { FC } from "react";
import styles from "./Button.module.scss";
interface IProps {
  text?: string;
}
const ButtonV1: FC<IProps> = ({ text = "Stream" }) => {
  return <button className={styles.button}>{text}</button>;
};

export default ButtonV1;
