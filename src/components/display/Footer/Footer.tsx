import { NextPage } from 'next'
import styles from './Footer.module.scss'
import Socials from '@/components/ui/Socials/Socials'
import ButtonV1 from '@/components/ui/Buttons/ButtonV1/ButtonV1'
import Link from 'next/link'
const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link href="!#"> About us </Link>
          </li>
          <li>
            <Link href="!#">Terms </Link>
          </li>
          <li>
            <Link href="!#">Conditions </Link>
          </li>
          <li>
            <Link href="!#">Privacy </Link>
          </li>
          <li>
            <Link href="!#"> Press</Link>
          </li>
          <li>
            <Link href="!#"> Help</Link>
          </li>
          <li>
            <Link href="!#"> Advertisers</Link>
          </li>
        </ul>
        <div className={styles.author}>
          <p>@Gavrylyk Nazar - 2024</p>
        </div>
      </nav>

      <div className={styles.socials}>
        <Socials
          font={22}
          style={{
            width: '150px',
            color: 'white',
          }}
        />
        <ButtonV1 text={'To invite a friend'} width={160} />
      </div>
    </footer>
  )
}

export default Footer
