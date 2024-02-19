import { NextPage } from 'next'
import styles from './ProfileContent.module.scss'
import Avatar from '@/components/ui/Avatar/Avatar'
import { MdEdit } from 'react-icons/md'
interface Props {}

const ProfileContent: NextPage<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <MdEdit className={styles.editIcon} />
        <Avatar size={110} />
      </div>
      <div className={styles.userInfo}>
        <p className={styles.name}>User Name</p>
        <p className={styles.email}>test@gmail.com</p>
      </div>
    </div>
  )
}

export default ProfileContent
