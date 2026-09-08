import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.brand}>
        <span className={styles.logo}>Endrare</span>
        <p>Based in Sweden</p>
      </div>

      <div className={styles.mid}>
        <a href="mailto:hello@endrare.com">hello@endrare.com</a>
      </div>

      <div className={styles.right}>
        <p>© {new Date().getFullYear()} Endrare</p>
        <p className={styles.tagline}>Building quietly.</p>
      </div>
    </footer>
  )
}
