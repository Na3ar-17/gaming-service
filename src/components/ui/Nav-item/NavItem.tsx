import { NextPage } from "next";
import styles from "./NavItem.module.scss";

interface Props {
  text: string;
  isActive: boolean;
  setActive: () => void;
}

const NavItems: NextPage<Props> = ({ text, isActive, setActive }) => {
  return (
    <li
      onClick={setActive}
      className={`${styles.item} ${isActive ? styles.active : ""}`}
    >
      {text}
    </li>
  );
};

export default NavItems;
