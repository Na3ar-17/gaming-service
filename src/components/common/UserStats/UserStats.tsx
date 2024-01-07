import { NextPage } from 'next'
import styles from './UserStats.module.scss'
import logo from '../../../../public/csIconForStats.png'
import Image from 'next/image'
import Pagination from '@/components/ui/Pagination/Pagination'
interface Props {}

const UserStats: NextPage<Props> = ({}) => {
  return (
    <main className={styles.container}>
      <div className={styles.head}>
        <div className={styles.title}>
          <p>Statistics</p>
        </div>
        <div className={styles.navigation}>
          <Pagination />
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.info}>
          <div className={styles.gameIcon}>
            <Image className={styles.image} src={logo} alt={'logo'} />
          </div>

          <div className={styles.userInfo}>
            <div>
              <p>
                Nickname <span>Dino</span>
              </p>
              <p>
                Real Name <span>Tommy Shelby</span>
              </p>
              <p>
                Country <span>USA</span>
              </p>
            </div>
            <div>
              <p>
                City <span>New Yourk city</span>
              </p>
              <p>
                Sport Rating <span>4001</span>
              </p>
              <p>
                Group Rating <span>3999</span>
              </p>
            </div>
            <div>
              <p>
                Winrate <span>49%</span>
              </p>
              <p>
                Rating on the site <span>7.1</span>
              </p>
              <p>
                Position<span>Sniper</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default UserStats
