import React, { FC } from 'react'
import styles from './Elements.module.scss'
import { IUserStatsData } from '@/interfaces/user-stats.interface'

interface IProps {
  data: IUserStatsData[]
}

const Elements: FC<IProps> = ({ data }) => {
  const {
    city,
    country,
    groupRating,
    nickname,
    position,
    ratingOnSite,
    realName,
    sportRating,
    winrate,
  } = data[0]
  return (
    <div className={styles.userInfo}>
      <div>
        <p>
          Nickname <span>{nickname}</span>
        </p>
        <p>
          Real Name <span>{realName}</span>
        </p>
        <p>
          Country <span>{country}</span>
        </p>
      </div>
      <div>
        <p>
          City <span>{city}</span>
        </p>
        <p>
          Sport Rating <span>{sportRating}</span>
        </p>
        <p>
          Group Rating <span>{groupRating}</span>
        </p>
      </div>
      <div>
        <p>
          Winrate <span>{winrate}</span>
        </p>
        <p>
          Rating on the site <span>{ratingOnSite}</span>
        </p>
        <p>
          Position <span>{position}</span>
        </p>
      </div>
    </div>
  )
}

export default Elements
