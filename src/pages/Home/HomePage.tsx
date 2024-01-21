import { NextPage } from 'next'
import styles from './Home.module.scss'
import Main from '@/components/display/Main/Main'
const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Main />
    </div>
  )
}

export default HomePage
