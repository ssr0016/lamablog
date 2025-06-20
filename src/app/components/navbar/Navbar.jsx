import React from 'react'
import styles from "./navbar.module.css"
import Links from './links/Links'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>Logo</Link>
        <div>
            <Links />
        </div>
    </div>
  )
}

export default Navbar