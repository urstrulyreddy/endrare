import React, { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import CurrentlyInMotion from './sections/CurrentlyInMotion'
import WhyIBuild from './sections/WhyIBuild'
import SelectedSystems from './sections/SelectedSystems'
import BuilderStatement from './sections/BuilderStatement'
import Archive from './sections/Archive'

function Divider() {
  return <div className="divider" />
}

export default function App() {
  // Global scroll-reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    // Observe all reveal targets (re-query after mount)
    const observe = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el)
      })
    }

    // Small delay so all sections are mounted
    const timer = setTimeout(observe, 100)
    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Divider />
        <CurrentlyInMotion />
        <Divider />
        <WhyIBuild />
        <Divider />
        <SelectedSystems />
        <Divider />
        <BuilderStatement />
        <Divider />
        <Archive />
        <Divider />
      </main>
      <Footer />
    </>
  )
}
