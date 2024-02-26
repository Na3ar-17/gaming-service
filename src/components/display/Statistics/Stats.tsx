import { NextPage } from 'next'
import styles from './Stats.module.scss'
import UserStats from '@/components/common/user-stats/UserStats'
import { userStatsData } from '@/data/user-stats-data'

const Stats: NextPage = () => {
  return (
    <section className={styles.container}>
      <UserStats data={userStatsData} />
    </section>
  )
}

export default Stats
