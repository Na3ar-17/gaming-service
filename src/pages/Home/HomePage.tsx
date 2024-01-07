import { NextPage } from 'next'
import styles from './Home.module.scss'
import Title from '@/components/display/Title/Title'
const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Title />
    </div>
  )
}

export default HomePage
