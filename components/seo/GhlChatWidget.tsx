'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

/**
 * Loads the chat widget after first interaction or a short idle delay so it
 * does not compete with LCP on the first paint.
 */
export function GhlChatWidget() {
  const widgetId = process.env.NEXT_PUBLIC_GHL_CHAT_WIDGET_ID
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!widgetId || ready) return

    let idleId: number | undefined
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    const activate = () => {
      setReady(true)
      cleanup()
    }

    const onInteract = () => activate()

    const cleanup = () => {
      window.removeEventListener('scroll', onInteract)
      window.removeEventListener('pointerdown', onInteract)
      window.removeEventListener('keydown', onInteract)
      if (idleId !== undefined && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId)
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId)
    }

    window.addEventListener('scroll', onInteract, { once: true, passive: true })
    window.addEventListener('pointerdown', onInteract, { once: true })
    window.addEventListener('keydown', onInteract, { once: true })

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(activate, { timeout: 4000 })
    } else {
      timeoutId = setTimeout(activate, 3500)
    }

    return cleanup
  }, [widgetId, ready])

  if (!widgetId || !ready) return null

  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      strategy="lazyOnload"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id={widgetId}
    />
  )
}
