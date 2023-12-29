import Socials from '@/components/ui/Socials/Socials'
import Switch from '@/components/ui/Switches/Switch-large/Switch'
import { NextPage } from 'next'
import styles from './SideBar.module.scss'

import SideBarEl from '@/components/ui/Side-bar-el/SideBarEl'
import {
  sidebarItemsData,
  sidebarItemsDataSupport,
} from '@/data/sidebar-items-data'

const SideBar: NextPage = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.logo}>
        <span>GOOD</span>
        <span>GAMES</span>
      </div>
      <div className={styles.play}>
        <Switch />
      </div>
      <div className={styles.menu}>
        <ul className={styles.list}>
          {sidebarItemsData.map((el, index) => (
            <SideBarEl
              text={el.text}
              Icon={el.Icon}
              link={el.link}
              key={index}
            />
          ))}
        </ul>
        <Socials />
        <div className={styles.support}>
          <ul className={styles.list}>
            {sidebarItemsDataSupport.map((el, index) => (
              <SideBarEl
                key={index}
                Icon={el.Icon}
                link={el.link}
                text={el.text}
              />
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default SideBar
