import NavBar from '@/components/common/nav-bar/NavBar'
import SideBar from '@/components/common/side-bar/SideBar'
import { NextPage } from 'next'
import styles from './Home.module.scss'
import Title from '@/components/display/Title/Title'
import GameCard from '@/components/common/Cards/GameCard/GameCard'
import Navigation from '@/components/common/navigation/Navigation'
const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Title />
    </div>
  )
}

export default HomePage
