import { FC } from 'react'
import styles from './Button.module.scss'
import { IButtonProps } from '@/interfaces/button.interface'

const ButtonV2: FC<IButtonProps> = ({
  text = 'Donate',
  width = 140,
  height = 44,
}) => {
  return (
    <button
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      className={styles.button}
    >
      {text}
    </button>
  )
}

export default ButtonV2
