import React from 'react'
import styles from './BuilderStatement.module.css'

export default function BuilderStatement() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.left}>
        <div className="section-eyebrow reveal">04 — Approach</div>
        <h2 className={`section-title reveal ${styles.heading}`}>
          Building quietly.<br /><em>Thinking long-term.</em>
        </h2>
      </div>

      <div className={`${styles.right} reveal`}>
        <p>
          I build software around real operational problems. Currently based in Sweden,
          developing Skift — an AI-powered scheduling platform shaped by actual restaurant
          operations. The goal is simple: fewer clicks, clearer decisions, systems that
          hold up in real use.
        </p>
        <p>
          My background is in backend development, cloud infrastructure, and product
          thinking. Working in fast-paced Swedish operations changed how I approach
          software permanently: good systems don't just run well — they help people make
          better decisions when time, people, and conditions are constantly shifting.
        </p>
        <p>
          I'm looking for software engineering opportunities in backend, cloud, or
          product-focused roles where building reliable systems and continued growth go
          hand in hand.
        </p>
        <div className={styles.cta}>
          <a href="#contact" className="btn-primary">Start a conversation</a>
        </div>
      </div>
    </section>
  )
}
