import React from 'react'
import styles from './CurrentlyInMotion.module.css'

const CARDS = [
  {
    num: '01',
    title: 'Skift',
    desc: 'AI-powered workforce scheduling platform built around the real pressures of restaurant operations and shift management.',
    tags: ['Product', 'AI/ML', 'Operations'],
  },
  {
    num: '02',
    title: 'Systems Thinking',
    desc: 'Backend architecture, cloud infrastructure, and workflow design rooted in real operational constraints and long-term reliability.',
    tags: ['AWS', 'Cloud', 'Architecture'],
  },
  {
    num: '03',
    title: 'Execution Layer',
    desc: 'Real-world operations management shaping every software decision — building tools that hold up under pressure and constant change.',
    tags: ['Strategy', 'Process', 'Decisions'],
  },
]

export default function CurrentlyInMotion() {
  return (
    <section className="section-wrap" id="motion">
      <div className="section-eyebrow reveal">01 — Active Work</div>
      <h2 className="section-title reveal">
        Currently in <em>Motion</em>
      </h2>

      <div className={styles.grid}>
        {CARDS.map((card) => (
          <div className={`${styles.card} reveal`} key={card.num}>
            <div className={styles.num}>{card.num}</div>
            <div className={styles.title}>{card.title}</div>
            <p className={styles.desc}>{card.desc}</p>
            <div className={styles.tags}>
              {card.tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
            <span className={styles.arrow}>→</span>
          </div>
        ))}
      </div>
    </section>
  )
}
