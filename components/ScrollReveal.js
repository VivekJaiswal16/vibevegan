'use client'
import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')

    // If browser doesn't support IntersectionObserver, just show everything
    if (!window.IntersectionObserver) {
      els.forEach(el => el.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )

    els.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null // renders nothing, just runs the effect
}