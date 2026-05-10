import React, { useEffect, useRef } from 'react'
import styles from './WhyIBuild.module.css'

const ITEMS = [
  { idx: 'I',   text: <>Real systems are built for <em>pressure</em>, not presentation.</> },
  { idx: 'II',  text: <>Good software reduces friction <em>before</em> it adds features.</> },
  { idx: 'III', text: <>Clarity is not decoration. It is <em>infrastructure.</em></> },
  { idx: 'IV',  text: <>My best ideas came from <em>live operational environments</em>, not theory alone.</> },
]

export default function WhyIBuild() {
  const listRef = useRef(null)

  useEffect(() => {
    const list = listRef.current
    if (!list) return

    const items = list.querySelectorAll(`.${styles.item}`)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(styles.visible)
            }, i * 120)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )

    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-wrap">
      <div className="section-eyebrow reveal">02 — Principles</div>
      <h2 className="section-title reveal">
        Why I Build<br /><em>This Way</em>
      </h2>

      <div className={styles.list} ref={listRef}>
        {ITEMS.map(({ idx, text }) => (
          <div className={styles.item} key={idx}>
            <span className={styles.idx}>{idx}</span>
            <p className={styles.text}>{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
