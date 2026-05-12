import React from 'react'
import styles from './SelectedSystems.module.css'

const SYSTEMS = [
  {
    tag: null,
    isActive: true,
    title: 'Skift',
    href: '/presentations/skiftpresentation.html',
    desc: 'Scheduling platform designed around real restaurant operations and workforce planning. Combining operational thinking, workflow design, and AI-assisted planning to reduce friction — clearer views, fewer clicks, decision-ready interfaces.',
    tech: ['Python', 'React', 'AI/ML', 'PostgreSQL'],
  },
  {
    tag: 'NLP · Automation',
    title: 'Outliner',
    desc: 'AI-driven system for generating context-aware responses using prompt-based logic and interaction history. Focused on improving relevance, reducing repetitive manual input, and creating a more adaptive response workflow.',
    tech: ['Python', 'NLP', 'Prompt Eng.'],
  },
  {
    tag: 'Backend · Cloud',
    title: 'Flask Web App — Docker on AWS',
    desc: 'Built and deployed a containerized web application with a cloud-ready setup for reliable, accessible performance. End-to-end ownership across backend development, containerisation, and cloud deployment.',
    tech: ['Flask', 'Docker', 'AWS', 'Linux'],
  },
  {
    tag: 'Infrastructure · Observability',
    title: 'Cloud Infrastructure & Monitoring',
    desc: 'Designed AWS infrastructure using VPC, public/private subnets, EC2, and CloudWatch. Performed load testing and observability setup to evaluate performance and reliability in production-style conditions.',
    tech: ['AWS', 'VPC', 'CloudWatch', 'EC2'],
  },
  {
    tag: 'Computer Vision · AI',
    title: 'Pose Estimation / Motion Analysis',
    desc: 'Computer-vision pipeline to analyse cycling motion from video data using pose estimation. Focused on extracting movement patterns and improving interpretability of motion data for sports biomechanical insight.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'CV'],
  },
]

export default function SelectedSystems() {
  return (
    <section className="section-wrap" id="systems">
      <div className="section-eyebrow reveal">03 — Work</div>
      <h2 className="section-title reveal">
        Selected <em>Systems</em>
      </h2>

      <div className={styles.list}>
        {SYSTEMS.map((s) => {
          const Item = s.href ? 'a' : 'div'
          const itemProps = s.href
            ? { href: s.href, 'aria-label': `Open ${s.title} presentation` }
            : {}

          return (
            <Item className={`${styles.item} reveal`} key={s.title} {...itemProps}>
              <div className={styles.left}>
                {s.isActive ? (
                  <div className={styles.activeBadge}>
                    <span className={styles.activeDot} />
                    Active build
                  </div>
                ) : (
                  <div className={styles.tag}>{s.tag}</div>
                )}
                <div className={styles.title}>{s.title}</div>
                <p className={styles.desc}>{s.desc}</p>
                <div className={styles.tech}>
                  {s.tech.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
              <div className={styles.arrow}>→</div>
            </Item>
          )
        })}
      </div>
    </section>
  )
}
