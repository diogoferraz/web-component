import $ from 'jquery'
import EventEmitter from 'eventemitter3'

class CarouselDots extends EventEmitter {
  constructor({root}) {
    super()
    this.root = $(root)

    this.dots = this.root.children('.carousel-dots__dot')
    this.dots.on('click', ev => this._handleClick(ev))
  }

  _handleClick(ev) {
    ev.preventDefault()
    const index = this.dots.index(ev.target)
    this.highlightDot(index)
    this.emit('clickdot', index)
  }

  highlightDot(index) {
    this.dots.removeClass('carousel-dots__dot--active')
    this.dots.eq(index).addClass('carousel-dots__dot--active')
  }
}

export default CarouselDots