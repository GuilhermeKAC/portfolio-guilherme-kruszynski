import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Fade in + slide up quando elemento entra na viewport
export function fadeInUp(target: string | Element, delay = 0) {
  gsap.fromTo(
    target,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: target as Element,
        start: 'top 85%',
        once: true,
      },
    },
  )
}

// Stagger para grupos de elementos (badges, cards)
export function staggerFadeIn(parent: string | Element, children: string, staggerDelay = 0.08) {
  gsap.fromTo(
    `${parent as string} ${children}`,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: staggerDelay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: parent as Element,
        start: 'top 80%',
        once: true,
      },
    },
  )
}

// Parallax sutil para a foto de perfil (só desktop)
export function parallaxElement(target: string | Element, amount = 40) {
  if (window.innerWidth < 768) return

  gsap.fromTo(
    target,
    { y: -amount / 2 },
    {
      y: amount / 2,
      ease: 'none',
      scrollTrigger: {
        trigger: target as Element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    },
  )
}
