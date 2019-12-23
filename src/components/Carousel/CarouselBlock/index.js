import $ from 'jquery'

import CarouselControls from '../CarouselControls'
import CarouselDots from '../CarouselDots'
import CarouselSlider from '../CarouselSlider'
import mod from '../../lib/mod'


class CarouselBlock {
  constructor({root}) {
    this.root = $(root)

    this.slides = new CarouselSlider({
      root: this.root.children('.carousel-slider')[0]
    })
    this.controls = new CarouselControls({
      root: this.root.children('.carousel-controls')[0]
    })
    this.dots = new CarouselDots({
      root: this.root.children('.carousel-dots')[0]
    })

    this.currentIndex = 0

    this.controls.on('clicknext', () => this.nextSlide())
    this.controls.on('clickprev', () => this.prevSlide())

    this.dots.on('clickdot', index => this.slideTo(index))
  }

  slideTo(index) {
    this.slides.slideTo(index)
    this.dots.highlightDot(index)
    this.currentIndex = index
  }

  nextSlide() {
    let nextIndex = mod(this.currentIndex + 1, this.slides.slideCount)
    this.slideTo(nextIndex)
  }

  prevSlide() {
    let prevIndex = mod(this.currentIndex - 1, this.slides.slideCount)
    this.slideTo(prevIndex)
  }
}

export default CarouselBlock