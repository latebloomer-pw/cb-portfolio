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

const projectTriggers = document.querySelectorAll('.container')

projectTriggers.forEach(addTimeline)

function addTimeline(project) {
  const images = project.querySelectorAll('.scroll-anim')
  gsap
    .timeline({
      scrollTrigger: {
        trigger: project,
        start: 'top +1950',
        scrub: true,
      },
    })
    .fromTo(images, { scale: 0.5 }, { scale: 1.0075 })
}
