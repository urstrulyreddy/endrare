import React, { useEffect, useRef } from 'react'
import Playground from './sections/Playground'
import { homeMarkup } from './home/markup'
import { initHome } from './home/home'
export default function App({ pathname = typeof window !== 'undefined' ? window.location.pathname : '/' } = {}) {
  if (pathname.startsWith('/playground')) return <Playground />
  return <HomePage />
}

function HomePage() {
  const ref = useRef(null)
  useEffect(() => initHome(ref.current), [])
  return <div className="eh" ref={ref} dangerouslySetInnerHTML={{ __html: homeMarkup }} />
}
