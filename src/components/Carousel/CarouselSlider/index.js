import $ from 'jquery'

class CarouselSlider {
  constructor({root}) {
    this.root = $(root)
    this.slideList = this.root.children('.carousel-slider__slide-list')
    this.slides = this.slideList.children('.carousel-slider__slide')
  }

  get slideCount() {
    return this.slides.length
  }

  slideTo(index) {
    this.slideList.css({transform: `translateX(-${100 * index}%)`});
  }
}

export default CarouselSlider