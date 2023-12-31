import React, { FC } from 'react'
import styles from './NavBar.module.scss'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'
import SearchIcon from '@mui/icons-material/Search'
import Switch from '../../ui/Switches/Switch-Small/Switch'
import CounterStrike from '../../ui/CsIcon/CounterStrike'
import Avatar from '@/components/ui/Avatar/Avatar'
const NavBar: FC = () => {
  return (
    <nav className={styles.nav}>
      <section className={styles.search}>
        {/* <div className={styles.logo}>
          <span>GOOD</span>
          <span>GAMES</span>
        </div> */}
        <div className={styles.utils}>
          <div className={styles.input}>
            <input type="text" placeholder="Search..." />
            <SearchIcon className={styles.searchIcon} />
          </div>
          <NotificationsNoneIcon className={styles.icons} />
          <TextsmsOutlinedIcon className={styles.icons} />
        </div>
      </section>
      <section className={styles.user}>
        <div>
          <CounterStrike />
          <Switch />
        </div>
        <Avatar />
      </section>
    </nav>
  )
}

export default NavBar
