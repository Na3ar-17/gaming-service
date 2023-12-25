import { FC } from "react";
import styles from "./Button.module.scss";
interface IProps {
  text?: string;
}
const ButtonV2: FC<IProps> = ({ text = "Donate" }) => {
  return <button className={styles.button}>{text}</button>;
};

export default ButtonV2;
