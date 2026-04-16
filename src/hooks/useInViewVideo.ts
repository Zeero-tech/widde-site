import { useEffect, useRef } from 'react'

/**
 * Returns a ref to attach to a <video> element.
 * The video's <source> src attributes are set only when the element
 * enters the viewport, preventing the browser from downloading the
 * video file on initial page load.
 *
 * Usage: add `data-src` instead of `src` on each <source> child,
 * then attach the returned ref to the <video>.
 */
export function useInViewVideo<T extends HTMLVideoElement>(rootMargin = '200px') {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const load = () => {
      el.querySelectorAll<HTMLSourceElement>('source[data-src]').forEach((s) => {
        s.src = s.dataset.src!
        delete s.dataset.src
      })
      el.load()
    }

    // Already loaded (e.g. hot-reload)
    if (el.querySelector('source[data-src]') === null) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          load()
          observer.disconnect()
        }
      },
      { rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin])

  return ref
}
