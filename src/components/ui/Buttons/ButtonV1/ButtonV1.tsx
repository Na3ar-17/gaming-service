import { FC } from 'react'
import styles from './Button.module.scss'
import { IButtonProps } from '@/interfaces/button.interface'
const ButtonV1: FC<IButtonProps> = ({
  text = 'Stream',
  width = 140,
  height = 44,
}) => {
  return (
    <button
      style={{ width: `${width}px`, height: `${height}px` }}
      className={styles.button}
    >
      {text}
    </button>
  )
}

export default ButtonV1
