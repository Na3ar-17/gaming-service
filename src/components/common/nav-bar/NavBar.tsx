import { FC } from 'react'
import styles from './NavBar.module.scss'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'
import SearchIcon from '@mui/icons-material/Search'
import Switch from '../../ui/Switches/Switch-Small/Switch'
import Avatar from '@/components/ui/Avatar/Avatar'
import CounterStrikeIcon from '../../ui/CsIcon/CounterStrikeIcon'

const NavBar: FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.search}>
        <div className={styles.utils}>
          <div className={styles.input}>
            <input type="text" placeholder="Search..." />
            <SearchIcon className={styles.searchIcon} />
          </div>
          <NotificationsNoneIcon className={styles.icons} />
          <TextsmsOutlinedIcon className={styles.icons} />
        </div>
      </div>
      <div className={styles.user}>
        <div>
          <CounterStrikeIcon />
          <Switch />
        </div>
        <Avatar />
      </div>
    </nav>
  )
}

export default NavBar
