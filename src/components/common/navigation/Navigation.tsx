"use client";
import NavItem from "@/components/ui/Nav-item/NavItem";
import Socials from "@/components/ui/Socials/Socials";
import { navItemsData } from "@/data/navitems.data";
import { NextPage } from "next";
import { useState } from "react";
import styles from "./Navigation.module.scss";
interface Props {}

const Navigation: NextPage<Props> = ({}) => {
  const [category, setCategory] = useState<string>(navItemsData[0]);
  return (
    <section className={styles.navigation}>
      <div className={styles.links}>
        <ul>
          {navItemsData.map((item, index) => (
            <NavItem
              key={index}
              text={item}
              isActive={category == item}
              setActive={() => setCategory(item)}
            />
          ))}
        </ul>
      </div>
      <div className={styles.box}>
        <Socials style={{ gap: "15px" }} font={25} />
      </div>
    </section>
  );
};

export default Navigation;
