import { NextPage } from 'next'
import styles from './Title.module.scss'
import Avatar from '@/components/ui/Avatar/Avatar'
import ButtonV1 from '@/components/ui/Buttons/ButtonV1/ButtonV1'
import ButtonV2 from '@/components/ui/Buttons/ButtonV2/ButtonV2'
import CheckBox from '@/components/ui/CheckBox/CheckBox'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import Navigation from '../navigation/Navigation'
import GameCard from '../Cards/GameCard/GameCard'
import { gameCardData } from '@/data/game-card.data'
const Title: NextPage = () => {
  return (
    <section className={styles.container}>
      <main className={styles.content}>
        <div className={styles.text}>
          <p>Online Soon</p>
          <p>
            Build your <span>team</span>
          </p>
          <div>more details</div>
        </div>
        <div className={styles.utils}>
          <Avatar />
          <ButtonV1 />
          <ButtonV2 />
          <div>
            <CheckBox />
            <p>Search: Team</p>
            <div className={styles.edit}>
              <ModeEditOutlineOutlinedIcon className={styles.icon} />
            </div>
          </div>
        </div>
      </main>
      <Navigation />
      <div className={styles.cards}>
        {gameCardData.map(el => (
          <GameCard
            key={el.id}
            description={el.description}
            id={el.id}
            image={el.image}
            title={el.title}
            underTitle={el.underTitle}
          />
        ))}
      </div>
    </section>
  )
}

export default Title
