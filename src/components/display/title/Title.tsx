'use client'
import Avatar from '@/components/ui/Avatar/Avatar'
import ButtonV1 from '@/components/ui/Buttons/ButtonV1/ButtonV1'
import ButtonV2 from '@/components/ui/Buttons/ButtonV2/ButtonV2'
import CheckBox from '@/components/ui/CheckBox/CheckBox'
import VideoPlayer from '@/components/ui/VideoPlayer/VideoPlayer'
import { gameCardData } from '@/data/game-card.data'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import GameCard from '../../common/Cards/GameCard/GameCard'
import Navigation from '../../common/navigation/Navigation'
import styles from './Title.module.scss'
import { NextPage } from 'next'
import Stats from '@/components/common/Statistics/Stats'

const Title: NextPage = () => {
  return (
    <>
      <VideoPlayer
        style={{
          position: 'absolute',
          top: '0%',
          zIndex: '-1',
          aspectRatio: '16/7',
        }}
      />
      <div className={styles.video}>
        <div className={styles.shadow}></div>
      </div>
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
          {gameCardData.map((el) => (
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
        <Stats />
      </section>
    </>
  )
}

export default Title
