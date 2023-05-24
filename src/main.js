import './styles/style.css'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
//import $ from 'jquery'
const lenis = new Lenis()
// //const getTrigger = (index) => $('.container').eq(index)
// const getTarget = (index) => {
//   let targetElement = $('.scroll-item')
//   if (index === 0) {
//     return targetElement.slice(0, 3)
//   } else if (index === 1) {
//     return targetElement.slice(3, 6)
//   } else {
//     return targetElement.slice(6, 9)
//   }
// }
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.registerPlugin(ScrollTrigger)

// const scrollItems = gsap.utils.toArray('.scroll-item')
// scrollItems.forEach((item) => {
//   gsap.to(item, {
//     xPercent: -200,
//     scrollTrigger: {
//       start: 'top 0.05%',
//       trigger: item,
//       scrub: true,
//     },
//   })
// })
const projectTriggers = document.querySelectorAll('.container')

projectTriggers.forEach(addTimeline)

function addTimeline(project) {
  const images = project.querySelectorAll('.scroll-item')
  const title = project.querySelectorAll('.title-item')
  gsap
    .timeline({
      scrollTrigger: {
        trigger: project,
        start: 'top bottom',
        scrub: true,
      },
    })
    .to(title, {
      x: -500,
    })
    .to(images, {
      xPercent: -150,
    })
}
