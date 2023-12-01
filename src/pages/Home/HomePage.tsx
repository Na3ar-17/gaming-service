import NavBar from "@/components/common/nav-bar/NavBar";
import SideBar from "@/components/common/side-bar/SideBar";
import { NextPage } from "next";
import styles from "./Home.module.scss";
import Title from "@/components/common/title/Title";
import GameCard from "@/components/common/Cards/GameCard/GameCard";
const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <NavBar />
      </div>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.content}>
        <Title />
        <GameCard />
      </div>
    </div>
  );
};

export default HomePage;
