import { NextPage } from 'next'
import styles from './UserStats.module.scss'
import logo from '../../../../public/pubg-icon2.png'
import Image from 'next/image'
import Pagination from '@/components/ui/Pagination/Pagination'
import { IUserStatsData } from '@/interfaces/user-stats.interface'
import Elements from './elements/Elements'
interface Props {
  data: IUserStatsData[]
}

const UserStats: NextPage<Props> = ({ data }) => {
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
            <Image className={styles.image} src={logo} alt="logo" />
          </div>

          <Elements data={data} />
        </div>
      </div>
    </main>
  )
}

export default UserStats
