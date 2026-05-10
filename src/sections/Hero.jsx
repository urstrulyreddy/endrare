import React from 'react'
import HeroVisual from '../components/HeroVisual'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="work">
      <div className={styles.text}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          Currently building
        </div>

        <h1 className={styles.h1}>
          Building systems that turn<br />
          <em>complexity into clarity.</em>
        </h1>

        <p className={styles.sub}>
          Software shaped by real operations, live decision-making, and long-term
          product thinking. Based in Sweden. Building quietly, designing for scale.
        </p>

        <div className={styles.actions}>
          <a href="#systems" className="btn-primary">Explore Work</a>
          <a href="#motion" className="btn-ghost">
            Inside the Systems
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>

      <HeroVisual />
    </section>
  )
}
