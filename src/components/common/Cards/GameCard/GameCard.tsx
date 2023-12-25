import { NextPage } from "next";

interface Props {}
import styles from "./GameCard.module.scss";
import ButtonV1 from "@/components/ui/Buttons/ButtonV1/ButtonV1";

const GameCard: NextPage<Props> = ({}) => {
  return (
    <section className={styles.container}>
      <main className={styles.card}>
        <div className={styles.icons}>Icon</div>
        <div className={styles.info}>
          <p className={styles.title}>Counter Strike</p>
          <p className={styles.underTitle}>
            Global Offen<span>sive</span>
          </p>
          <p className={styles.description}>
            Do not miss the begining of a new battle season
          </p>
          <ButtonV1 text="PLAY NOW" />
        </div>
      </main>
    </section>
  );
};

export default GameCard;
