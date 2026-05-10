import React from 'react'
import styles from './Nav.module.css'

const NAV_LINKS = [
  { label: 'Work',    href: '#work' },
  { label: 'Systems', href: '#systems' },
  { label: 'Archive', href: '#archive' },
  { label: 'About',   href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.logo}>Endrare</a>

      <ul className={styles.links}>
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className={styles.link}>{label}</a>
          </li>
        ))}
      </ul>

      <a href="#contact" className={styles.cta}>Get in touch</a>
    </nav>
  )
}
