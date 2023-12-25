import { NextPage } from "next";
import styles from "./SideBar.module.scss";
import { AiOutlineUser, AiOutlineGold } from "react-icons/ai";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { TbMessageCircle2 } from "react-icons/tb";
import {
  IoIosGitNetwork,
  IoIosHelpCircleOutline,
  IoIosSearch,
} from "react-icons/io";
import {
  MdOutlineScoreboard,
  MdOutlineSecurity,
  MdOutlineAccountBalanceWallet,
} from "react-icons/md";
import { GrTask } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import { BiBox } from "react-icons/bi";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import Switch from "@/components/ui/Switch/Switch";
import Socials from "@/components/ui/Socials/Socials";
import Link from "next/link";

const SideBar: NextPage = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.logo}>
        <span>GOOD</span>
        <span>GAMES</span>
      </div>
      <div className={styles.play}>
        <Switch />
      </div>
      <div className={styles.menu}>
        <ul className={styles.list}>
          <li>
            <AiOutlineUser className={styles.icon} />
            Profile
          </li>
          <li>
            <IoIosSearch className={styles.icon} />
            Search
          </li>
          <li>
            <LiaUserFriendsSolid className={styles.icon} />
            Friends
          </li>
          <li>
            <TbMessageCircle2 className={styles.icon} />
            Messages
          </li>
          <li>
            <IoIosGitNetwork className={styles.icon} />
            Developments
          </li>
          <li>
            <AiOutlineGold className={styles.icon} />
            Matches
          </li>
          <li>
            <MdOutlineScoreboard className={styles.icon} />
            Score
          </li>
          <li>
            <GrTask className={styles.icon} />
            Tasks
          </li>
          <li>
            <FaRegHeart className={styles.icon} />
            Favourite
          </li>
          <li>
            <EmojiEventsOutlinedIcon className={styles.icon} />
            Tournaments
          </li>
          <li>
            <MdOutlineAccountBalanceWallet className={styles.icon} />
            Balance
          </li>
          <li>
            <BiBox className={styles.icon} />
            Suggestion
          </li>
        </ul>
        <Socials />
        <div className={styles.suport}>
          <ul className={styles.list}>
            <li>
              <IoIosHelpCircleOutline className={styles.icon} />
              Help
            </li>
            <li>
              <ReportGmailerrorredIcon className={styles.icon} />
              Conditions
            </li>
            <li>
              <MdOutlineSecurity className={styles.icon} />
              Confidentiality
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
