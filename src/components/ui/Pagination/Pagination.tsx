import React from 'react'
import styles from './Pagination.module.scss'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import PaginationItem from './PaginationItem'

const Pagination = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <IoIosArrowBack />
      </div>
      <PaginationItem />
      <div className={styles.icon}>
        <IoIosArrowForward />
      </div>
    </div>
  )
}

export default Pagination
