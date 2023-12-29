import type { Metadata } from 'next'
import { Inter, Nova_Square, Poppins } from 'next/font/google'
import './globals.css'
import SideBar from '@/components/common/side-bar/SideBar'
import NavBar from '@/components/common/nav-bar/NavBar'
import styles from './layout.module.scss'

const inter = Inter({ subsets: ['latin'] })
const Nova = Nova_Square({ subsets: ['latin'], weight: '400' })
const Pop = Poppins({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Good Games',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={styles.html}>
      <body
        suppressHydrationWarning={true}
        className={`${Pop.className} ${styles.container}`}
      >
        <div className={styles.nav}>
          <NavBar />
        </div>
        <div className={styles.sidebar}>
          <SideBar />
        </div>
        <div className={styles.content}>{children}</div>
      </body>
    </html>
  )
}
