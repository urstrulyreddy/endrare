import React, { useEffect, useMemo, useRef } from 'react'
import skiftHtml from '../../SkiftPresentation/index.html?raw'
import skiftCss from '../../SkiftPresentation/styles.css?raw'
import skiftScript from '../../SkiftPresentation/script.js?raw'

function getBodyMarkup(html) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)
  const body = bodyMatch ? bodyMatch[1] : html

  return body.replace(/<script\s+src=["']\.\/script\.js["']\s*><\/script>/i, '')
}

export default function SkiftPresentationPage() {
  const rootRef = useRef(null)
  const markup = useMemo(() => getBodyMarkup(skiftHtml), [])

  useEffect(() => {
    const previousTitle = document.title
    const style = document.createElement('style')
    const script = document.createElement('script')

    document.title = 'Skift Presentation'
    style.setAttribute('data-skift-presentation', '')
    style.textContent = skiftCss
    document.head.appendChild(style)

    script.type = 'text/javascript'
    script.textContent = `(() => {\n${skiftScript}\n})();`
    rootRef.current?.appendChild(script)

    return () => {
      document.title = previousTitle
      style.remove()
      script.remove()
    }
  }, [])

  return (
    <div
      ref={rootRef}
      className="skift-presentation-page"
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  )
}
