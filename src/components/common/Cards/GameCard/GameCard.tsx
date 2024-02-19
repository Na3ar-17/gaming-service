import ButtonV1 from '@/components/ui/Buttons/ButtonV1/ButtonV1'
import { IGameCardData } from '@/interfaces/game-card.interface'
import { NextPage } from 'next'
import Image from 'next/image'
import { FaBookmark } from 'react-icons/fa'
import { FaCrown } from 'react-icons/fa6'
import styles from './GameCard.module.scss'

const GameCard: NextPage<IGameCardData> = ({
  description,
  id,
  image,
  title,
  underTitle,
}) => {
  const lastLetters = underTitle.slice(underTitle.length - 4)
  const word = underTitle.slice(0, underTitle.length - 4)

  return (
    <main className={styles.card}>
      <div className={styles.icons}>
        <FaBookmark className={styles.bookMark} />
        <FaCrown className={styles.icon} />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.underTitle}>
          {word}
          <span>{lastLetters}</span>
        </p>
        <p className={styles.description}>{description}</p>
        <ButtonV1 height={35} text="PLAY NOW" />
      </div>
      <div className={styles.image}>
        <Image className={styles.hero} alt="hero" src={image} />
      </div>
    </main>
  )
}

export default GameCard
