import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function revealEl(el: HTMLElement) {
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
}

export function useRevealOnScroll(selector = '[data-reveal]') {
  useEffect(() => {
    // Observe elements already in the DOM
    document.querySelectorAll<HTMLElement>(selector).forEach(revealEl)

    // Watch for lazy-loaded components adding new [data-reveal] elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return
          if (node.matches(selector)) revealEl(node)
          node.querySelectorAll<HTMLElement>(selector).forEach(revealEl)
        })
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [selector])
}
