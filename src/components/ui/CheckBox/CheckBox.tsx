"use client";
import { FC, useState } from "react";
import styles from "./CheckBox.module.scss";
interface IProps {
  size?: number;
}
const CheckBox: FC<IProps> = ({ size = 1.2 }) => {
  const [isChecked, setChecked] = useState<boolean>(false);
  return (
    <label
      style={{ width: size + "em", height: size + "em" }}
      className={styles.container}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setChecked(!isChecked)}
      />
      <div className={styles.checkmark}></div>
    </label>
  );
};

export default CheckBox;
