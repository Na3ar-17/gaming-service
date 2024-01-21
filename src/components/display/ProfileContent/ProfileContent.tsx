import { NextPage } from 'next'
import styles from './ProfileContent.module.scss'
import Avatar from '@/components/ui/Avatar/Avatar'
interface Props {}

const ProfileContent: NextPage<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Avatar size={120} />
      </div>
    </div>
  )
}

export default ProfileContent
