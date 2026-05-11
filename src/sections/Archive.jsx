import React from 'react'
import styles from './Archive.module.css'

const ENTRIES = [
  {
    date: '2025 / Essay',
    title: 'Building Skift from real operations',
    href: '/skiftcasestudy.html',
    sub: 'How working real shifts changed every decision in the product.',
  },
  {
    date: '2025 / Note',
    title: 'What working in Sweden taught me about software',
    sub: 'Speed, trust, and the cost of unclear systems.',
  },
  {
    date: '2025 / Essay',
    title: 'Why clarity is a product decision',
    sub: 'Reducing cognitive load is not a design problem. It is an engineering problem.',
  },
  {
    date: '2025 / Note',
    title: 'Backend systems should feel invisible',
    sub: 'The best infrastructure is the kind nobody notices is there.',
  },
]

export default function Archive() {
  return (
    <section className="section-wrap" id="archive">
      <div className="section-eyebrow reveal">05 — Thinking</div>
      <h2 className="section-title reveal">
        From the <em>Archive</em>
      </h2>

      <div className={styles.grid}>
        {ENTRIES.map((e) => {
          const Item = e.href ? 'a' : 'div'
          const itemProps = e.href
            ? { href: e.href, 'aria-label': `Open ${e.title}` }
            : {}

          return (
            <Item className={`${styles.item} reveal`} key={e.title} {...itemProps}>
              <div className={styles.date}>{e.date}</div>
              <div className={styles.title}>{e.title}</div>
              <div className={styles.sub}>{e.sub}</div>
            </Item>
          )
        })}
      </div>
    </section>
  )
}
