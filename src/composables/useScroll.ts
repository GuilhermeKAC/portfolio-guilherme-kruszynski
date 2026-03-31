import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenis: Lenis | null = null

export function useScroll() {
  function init() {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    // Sincroniza Lenis com o RAF do GSAP
    gsap.ticker.add((time) => {
      lenis?.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    // Atualiza ScrollTrigger a cada frame do Lenis
    lenis.on('scroll', ScrollTrigger.update)
  }

  function destroy() {
    lenis?.destroy()
    lenis = null
  }

  return { init, destroy }
}

export function getLenis() {
  return lenis
}
