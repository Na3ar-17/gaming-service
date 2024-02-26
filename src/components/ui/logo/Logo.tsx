import Link from 'next/link'
import React, { FC } from 'react'
import styles from './Logo.module.scss'

const Logo: FC = () => {
  return (
    <div className={styles.logo}>
      <Link href={'/home'}>
        <span>GOOD</span>
        <span>GAMES</span>
      </Link>
    </div>
  )
}

export default Logo
