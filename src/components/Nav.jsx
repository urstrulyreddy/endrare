import React, { useState, useEffect, useRef } from 'react'
import { PRODUCT_ITEMS, CONTENT_ITEMS, PRESENTATION_PAGES, publicPath } from '../data/seo'
import styles from './Nav.module.css'

const LINKS_BEFORE = [
  { label: 'Work',    href: '#work' },
  { label: 'Systems', href: '#systems' },
]

const LINKS_AFTER = [
  { label: 'Archive', href: '#archive' },
  { label: 'About',   href: '#about' },
]

const ALL_LINKS = [...LINKS_BEFORE, ...LINKS_AFTER]

const STAGGER = 25
const contentHref = (item) => publicPath(item.legacyPaths?.[0] || item.path)

export default function Nav() {
  const [open, setOpen]             = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const wrapRef = useRef(null)

  // Close desktop panel on outside click / Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    const onOut = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onOut)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onOut)
    }
  }, [open])

  // Close mobile menu on Escape
  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e) => { if (e.key === 'Escape') setMobileOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const featured = PRODUCT_ITEMS.find((p) => p.id === 'skift')
  const skiftPresentation = PRESENTATION_PAGES.find((page) => page.id === 'skift-presentation')
  const skiftHref = publicPath(skiftPresentation?.path || '/presentations/skiftpresentation.html')
  const caseStudyItems = CONTENT_ITEMS.filter((item) => item.type !== 'Field Note' && item.type !== 'Note')
  const noteItems = CONTENT_ITEMS.filter((item) => item.type === 'Field Note' || item.type === 'Note')

  // Pre-computed mobile stagger offsets
  const mBase = { links: 40, activeEyebrow: 180, featured: 215 }
  const mCaseBase = mBase.featured + STAGGER + 30
  const mNotesBase = mCaseBase + caseStudyItems.length * STAGGER + 30
  const mCtaDelay = mNotesBase + noteItems.length * STAGGER + 30

  return (
    <>
      {/* Page blur backdrop (desktop panel only) */}
      <div
        className={`${styles.backdrop} ${open && !mobileOpen ? styles.backdropOpen : ''}`}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />

      <div ref={wrapRef} className={styles.navWrapper}>
        <nav className={styles.nav} aria-label="Primary">
          <a href="/" className={styles.logo}>Endrare</a>

          {/* Desktop links */}
          <ul className={styles.links}>
            {LINKS_BEFORE.map(({ label, href }) => (
              <li key={label}><a href={href} className={styles.link}>{label}</a></li>
            ))}
            <li>
              <button
                className={`${styles.link} ${styles.productsBtn} ${open ? styles.productsBtnOpen : ''}`}
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="nav-panel"
              >
                Products
                <svg className={styles.chevron} width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </li>
            {LINKS_AFTER.map(({ label, href }) => (
              <li key={label}><a href={href} className={styles.link}>{label}</a></li>
            ))}
          </ul>

          <a href="/conversation.html" className={styles.cta}>Get in touch</a>

          {/* Mobile hamburger */}
          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className={styles.hamLine} />
            <span className={styles.hamLine} />
          </button>
        </nav>

        {/* ── Desktop mega panel ── */}
        <div id="nav-panel" className={`${styles.panel} ${open ? styles.panelOpen : ''}`} aria-hidden={!open}>
          <div className={styles.panelInner}>
            {open && (
              <>
                <div className={styles.panelGrid}>
                  {featured && (
                    <div className={styles.colFeatured}>
                      <div className={styles.colEyebrow} style={{ '--delay': '55ms' }}>
                        <span className={styles.colIndex}>01</span>Active Projects
                      </div>
                      <a href={skiftHref} className={styles.featuredCard} style={{ '--delay': '110ms' }}>
                        <div className={styles.activeBadge}>
                          <span className={styles.activeDot} />Live build
                        </div>
                        <div className={styles.featuredTitle}>{featured.title}</div>
                        <p className={styles.featuredDesc}>{featured.description}</p>
                        <div className={styles.featuredFooter}>
                          <span className={styles.featuredCat}>Presentation</span>
                          <span className={styles.featuredArrow}>→</span>
                        </div>
                      </a>
                    </div>
                  )}

                  <div className={styles.col}>
                    <div className={styles.colEyebrow} style={{ '--delay': '55ms' }}>
                      <span className={styles.colIndex}>02</span>Case Studies
                    </div>
                    {caseStudyItems.map((item, i) => (
                      <a key={item.id} href={contentHref(item)} className={styles.item} style={{ '--delay': `${125 + i * 42}ms` }}>
                        <span className={styles.itemIndex}>{String(i + 1).padStart(2, '0')}</span>
                        <div className={styles.itemBody}>
                          <div className={styles.itemTitle}>{item.title}</div>
                          <div className={styles.itemMeta}>{item.type} · {item.readTime}</div>
                        </div>
                        <span className={styles.itemArrow}>→</span>
                      </a>
                    ))}
                  </div>

                  <div className={styles.col}>
                    <div className={styles.colEyebrow} style={{ '--delay': '55ms' }}>
                      <span className={styles.colIndex}>03</span>Notes
                    </div>
                    {noteItems.map((item, i) => (
                      <a key={item.id} href={contentHref(item)} className={styles.item} style={{ '--delay': `${125 + i * 42}ms` }}>
                        <span className={styles.itemIndex}>{String(i + 1).padStart(2, '0')}</span>
                        <div className={styles.itemBody}>
                          <div className={styles.itemTitle}>{item.title}</div>
                          <div className={styles.itemMeta}>{item.type} · {item.readTime}</div>
                        </div>
                        <span className={styles.itemArrow}>→</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className={styles.panelFooter} style={{ '--delay': '310ms' }}>
                  <a href="/products/" className={styles.footerLink}>All products</a>
                  <a href="/archive/" className={styles.footerLink}>Full archive</a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ── Mobile full-screen menu ── */}
      {mobileOpen && (
        <div className={styles.mobileMenu} role="dialog" aria-modal="true" aria-label="Navigation">

          {/* Header */}
          <div className={styles.mobileHeader}>
            <a href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>Endrare</a>
            <button className={styles.mobileClose} onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className={styles.mobileLinks} aria-label="Site navigation">
            {ALL_LINKS.map(({ label, href }, i) => (
              <a
                key={label}
                href={href}
                className={styles.mobileLink}
                onClick={() => setMobileOpen(false)}
                style={{ '--delay': `${mBase.links + i * STAGGER}ms` }}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Products section */}
          <div className={styles.mobileEyebrow} style={{ '--delay': `${mBase.activeEyebrow}ms` }}>
            <span className={styles.colIndex}>01</span>Active Projects
          </div>

          {featured && (
            <a
              href={skiftHref}
              className={styles.mobileItem}
              onClick={() => setMobileOpen(false)}
              style={{ '--delay': `${mBase.featured}ms` }}
            >
              <div className={styles.mobileItemMain}>
                <div className={styles.activeBadge}>
                  <span className={styles.activeDot} />Live build
                </div>
                <div className={styles.itemTitle}>{featured.title}</div>
                <div className={styles.itemMeta}>Presentation</div>
              </div>
              <span className={`${styles.itemArrow} ${styles.itemArrowVisible}`}>→</span>
            </a>
          )}

          {/* Case studies section */}
          <div className={styles.mobileEyebrow} style={{ '--delay': `${mCaseBase - STAGGER}ms` }}>
            <span className={styles.colIndex}>02</span>Case Studies
          </div>

          {caseStudyItems.map((item, i) => (
            <a
              key={item.id}
              href={contentHref(item)}
              className={styles.mobileItem}
              onClick={() => setMobileOpen(false)}
              style={{ '--delay': `${mCaseBase + i * STAGGER}ms` }}
            >
              <div className={styles.mobileItemMain}>
                <div className={styles.itemTitle}>{item.title}</div>
                <div className={styles.itemMeta}>{item.type} · {item.readTime}</div>
              </div>
              <span className={`${styles.itemArrow} ${styles.itemArrowVisible}`}>→</span>
            </a>
          ))}

          {/* Notes section */}
          <div className={styles.mobileEyebrow} style={{ '--delay': `${mNotesBase - STAGGER}ms` }}>
            <span className={styles.colIndex}>03</span>Notes
          </div>

          {noteItems.map((item, i) => (
            <a
              key={item.id}
              href={contentHref(item)}
              className={styles.mobileItem}
              onClick={() => setMobileOpen(false)}
              style={{ '--delay': `${mNotesBase + i * STAGGER}ms` }}
            >
              <div className={styles.mobileItemMain}>
                <div className={styles.itemTitle}>{item.title}</div>
                <div className={styles.itemMeta}>{item.type} · {item.readTime}</div>
              </div>
              <span className={`${styles.itemArrow} ${styles.itemArrowVisible}`}>→</span>
            </a>
          ))}

          <div className={styles.mobileCta} style={{ '--delay': `${mCtaDelay}ms` }}>
            <a href="/conversation.html" className="btn-primary" onClick={() => setMobileOpen(false)}>Get in touch</a>
          </div>
        </div>
      )}
    </>
  )
}
