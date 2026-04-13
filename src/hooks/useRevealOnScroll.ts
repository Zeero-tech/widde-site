import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useRevealOnScroll(selector = '[data-reveal]') {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(selector)

    els.forEach((el) => {
      gsap.fromTo(
        el,
        { scale: 0.98, opacity: 0, filter: 'blur(3px)' },
        {
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.7,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 96%',
            once: true,
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])
}
