import { useEffect } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

function revealEl(el: HTMLElement, triggers: ScrollTrigger[]) {
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
        onToggle: (self) => triggers.push(self),
      },
    }
  )
}

export function useRevealOnScroll(selector = '[data-reveal]') {
  useEffect(() => {
    const triggers: ScrollTrigger[] = []

    document.querySelectorAll<HTMLElement>(selector).forEach((el) =>
      revealEl(el, triggers)
    )

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return
          if (node.matches(selector)) revealEl(node, triggers)
          node.querySelectorAll<HTMLElement>(selector).forEach((el) =>
            revealEl(el, triggers)
          )
        })
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      triggers.forEach((t) => t.kill())
    }
  }, [selector])
}
