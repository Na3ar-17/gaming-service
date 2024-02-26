import { NextPage } from 'next'
import styles from './Stats.module.scss'
import UserStats from '@/components/common/user-stats/UserStats'

const Stats: NextPage = () => {
  return (
    <section className={styles.container}>
      <UserStats />
    </section>
  )
}

export default Stats
