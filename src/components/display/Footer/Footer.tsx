import { NextPage } from 'next'
import styles from './Footer.module.scss'
import Socials from '@/components/ui/Socials/Socials'
import ButtonV1 from '@/components/ui/Buttons/ButtonV1/ButtonV1'
import Link from 'next/link'

const linksData = [
  { text: 'About us', link: '/about' },
  { text: 'Terms', link: '/terms' },
  { text: 'Conditions', link: '/conditions' },
  { text: 'Privacy', link: '/privacy' },
  { text: 'Press', link: '/press' },
  { text: 'Help', link: '/help' },
  { text: 'Advertisers', link: '/advertisers' },
]

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {linksData.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>{item.text}</Link>
            </li>
          ))}
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
