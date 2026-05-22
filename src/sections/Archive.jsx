import React from 'react'
import { getArchiveEntries } from '../data/seo'
import styles from './Archive.module.css'

const ENTRIES = getArchiveEntries()

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
