import { NextPage } from 'next'
import styles from './SideBatEl.module.scss'
import Link from 'next/link'
import { ISideBarElProps } from '@/interfaces/sidebar-el.interface'
const SideBarEl: NextPage<ISideBarElProps> = ({ Icon, text, link }) => {
  return (
    <li className={styles.li}>
      <Link href={link}>
        <Icon className={styles.icon} />
        {text}
      </Link>
    </li>
  )
}

export default SideBarEl
