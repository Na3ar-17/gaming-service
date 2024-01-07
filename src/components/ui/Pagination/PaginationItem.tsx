'use client'
import { NextPage } from 'next'
import styles from './PaginationItem.module.scss'
interface Props {}

const PaginationItem: NextPage<Props> = ({}) => {
  return (
    <div className={styles.items}>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
    </div>
  )
}

export default PaginationItem
