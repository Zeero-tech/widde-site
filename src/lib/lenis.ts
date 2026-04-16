import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let instance: Lenis | null = null

export function getLenis(): Lenis {
  if (!instance) {
    instance = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      gestureOrientation: 'vertical',
    })
    instance.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => instance!.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)
  }
  return instance
}
