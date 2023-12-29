import React from 'react'
import styles from './Switch.module.scss'
import { CiPlay1 } from 'react-icons/ci'
const Switch = () => {
  return (
    <label className={styles.switch}>
      <input type="checkbox" />
      <span className={styles.slider}>
        <span className={styles.title}>Play</span>
        <span className={styles.ball}>
          <CiPlay1 className={styles.icon} />
        </span>
      </span>
    </label>
  )
}

export default Switch
