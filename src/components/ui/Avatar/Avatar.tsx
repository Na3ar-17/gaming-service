import { FC } from 'react'
import styles from './Avatar.module.scss'
import Image from 'next/image'
import avatar from '../../../../public/avatar.jpg'
interface IProps {
  size?: number
  borderSize?: number
}
const Avatar: FC<IProps> = ({ size = 56, borderSize = 56 }) => {
  return (
    <div
      style={{ width: size + 'px', height: size + 'px' }}
      className={styles.avatar}
    >
      <Image
        style={{ width: size + 'px' }}
        className={styles.image}
        src={avatar}
        alt="avatar"
      />
      <div
        style={{ width: borderSize + 'px', height: borderSize + 'px' }}
        className={styles.imageBG}
      ></div>
    </div>
  )
}

export default Avatar
