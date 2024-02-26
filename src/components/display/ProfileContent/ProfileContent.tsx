import { NextPage } from 'next'
import styles from './ProfileContent.module.scss'
import Avatar from '@/components/ui/Avatar/Avatar'
import { MdEdit } from 'react-icons/md'
interface Props {}

const ProfileContent: NextPage<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles['user-box']}>
        <div className={styles.background}>
          <MdEdit className={styles.editIcon} />
          <div className={styles.user}>
            <Avatar size={110} borderSize={123} />
            <p className={styles.nick}>arishem</p>
            <p className={styles.status}>
              <span>Status:</span> online
            </p>
          </div>
        </div>
      </div>
      <div className={styles['user-info']}>
        <p className={styles.name}>Nazar Gavrylyk</p>
        <p className={styles.email}>test@gmail.com</p>
      </div>
    </div>
  )
}

export default ProfileContent
