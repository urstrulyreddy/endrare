import React from 'react'
import styles from './HeroVisual.module.css'

function SchedRow({ label, pct, time, delay }) {
  return (
    <div className={styles.schedRow}>
      <span className={styles.schedName}>{label}</span>
      <div className={styles.schedBarWrap}>
        <div
          className={styles.schedBar}
          style={{ width: `${pct}%`, animationDelay: `${delay}s` }}
        />
      </div>
      <span className={styles.schedTime}>{time}</span>
    </div>
  )
}

export default function HeroVisual() {
  return (
    <div className={styles.visual}>
      <div className={styles.bg} />
      <div className={styles.stack}>

        {/* Main Skift card */}
        <div className={`${styles.card} ${styles.cardMain}`}>
          <div className={styles.liveBadge}>
            <span className={styles.liveDot} />
            Live build
          </div>
          <div className={styles.cardLabel}>Skift / Scheduling</div>
          <div className={styles.cardTitle}>Week 24 — Roster</div>
          <div className={styles.schedRows}>
            <SchedRow label="Morning" pct={78} time="06–14" delay={0.6} />
            <SchedRow label="Midday"  pct={55} time="12–20" delay={0.75} />
            <SchedRow label="Evening" pct={90} time="16–24" delay={0.9} />
          </div>
        </div>

        {/* Status card */}
        <div className={`${styles.card} ${styles.cardStatus}`}>
          <div className={styles.cardLabel}>System status</div>
          <div className={styles.statusRows}>
            <StatusRow label="API"       state="Up"      color="green" />
            <StatusRow label="Scheduler" state="Running" color="green" />
            <StatusRow label="Build"     state="Active"  color="amber" />
          </div>
        </div>

        {/* Ops card */}
        <div className={`${styles.card} ${styles.cardOps}`}>
          <div className={styles.cardLabel}>Operations layer</div>
          <div className={styles.cardTitle}>Execution pipeline</div>
          <div className={styles.workflow}>
            <span className={`${styles.wnode} ${styles.wnodeActive}`}>Input</span>
            <span className={styles.warrow}>›</span>
            <span className={`${styles.wnode} ${styles.wnodeActive}`}>Process</span>
            <span className={styles.warrow}>›</span>
            <span className={styles.wnode}>Output</span>
          </div>
        </div>

        {/* Metric card */}
        <div className={`${styles.card} ${styles.cardMetric}`}>
          <div className={styles.cardLabel}>Clarity index</div>
          <div className={styles.cardStat}>
            94<span className={styles.cardStatUnit}>/100</span>
          </div>
          <div className={styles.cardSub}>Decision friction reduced</div>
        </div>

        {/* Build log card */}
        <div className={`${styles.card} ${styles.cardNote}`}>
          <div className={styles.cardLabel}>Build log · Today</div>
          <div className={styles.cardSub}>
            Refactored shift-conflict detection. AI layer returning cleaner
            suggestions. Edge cases resolved.
          </div>
        </div>

      </div>
    </div>
  )
}

function StatusRow({ label, state, color }) {
  return (
    <div className={styles.statusRow}>
      <span className={styles.statusLabel}>{label}</span>
      <span className={`${styles.statusVal} ${styles[`status_${color}`]}`}>
        <span className={`${styles.dot} ${styles[`dot_${color}`]}`} />
        {state}
      </span>
    </div>
  )
}
