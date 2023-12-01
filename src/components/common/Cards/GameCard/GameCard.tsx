import { NextPage } from "next";

interface Props {}
import styles from "./GameCard.module.scss";

const GameCard: NextPage<Props> = ({}) => {
  return <main className={styles.card}></main>;
};

export default GameCard;
