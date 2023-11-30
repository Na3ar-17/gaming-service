import React, { FC } from "react";
import styles from "./NavBar.module.scss";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import Image from "next/image";
import avatar from "../../../../public/avatar.jpg";
import SearchIcon from "@mui/icons-material/Search";
import Switch from "../../ui/Switch/Switch";
import CounterStrike from "../../ui/CsIcon/CounterStrike";
const NavBar: FC = () => {
  return (
    <nav className={styles.nav}>
      <section className={styles.search}>
        <div className={styles.utils}>
          <div className={styles.input}>
            <input type="text" placeholder="Search..." />
            <SearchIcon className={styles.searchIcon} />
          </div>
          <NotificationsNoneIcon className={styles.icons} />
          <TextsmsOutlinedIcon className={styles.icons} />
        </div>
      </section>
      <section className={styles.user}>
        <div>
          <CounterStrike />
          <Switch />
        </div>
        <div className={styles.avatar}>
          <Image className={styles.image} src={avatar} alt="avatar" />
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
