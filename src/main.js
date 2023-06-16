import './styles/style.css'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
//import { Timeline } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import $ from 'jquery'

// WINDOW RESIZE LISTENER
// let isDesktop = window.matchMedia('(min-width: 768px)').matches
// window.addEventListener('resize', () => {
//   isDesktop = window.matchMedia('(min-width: 768px)').matches
// })
// // ===============

const lenis = new Lenis({ lerp: 0.075 })

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.registerPlugin(ScrollTrigger)
// MENU SCROLL EFFECT
$('.featured-item').each(function () {
  // each project wrapper (i.e. CMS item) triggers link hover state

  // inner function to DRY things up
  const enterActions = (element) => {
    $('.menu-current').text(element.attr('menu-name'))
  }

  let triggerElement = $(this)
  gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: 'top top+=100',
      end: 'bottom bottom-=200', // shrink available trigger space for faster response time
      onEnter: () => enterActions(triggerElement),
      onEnterBack: () => enterActions(triggerElement),
    },
  })
})

// BACK CLICK BUTTON
$('.button.back').on('click', () => {
  history.back()
})

// MENU CLICK BUTTON
$('.menu-center').on('click', function () {
  !$('.nav').hasClass('open')
    ? $('.menu-text').text('Close Menu')
    : $('.menu-text').text('Menu')
  $('.nav').toggleClass('open')
  $('.hidden-menu').toggleClass('open')
})
