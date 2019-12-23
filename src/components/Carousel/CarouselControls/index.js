import $ from 'jquery'
import EventEmitter from 'eventemitter3'

class CarouselControls extends EventEmitter {
  constructor({root}) {
    super()
    this.root = $(root)

    this.buttons = this.root.children('.carousel-controls__button')

    this.buttons.on('click', ev => this._handleClick(ev))
  }

  _handleClick(ev) {
    ev.preventDefault()

    const target = $(ev.target)

    if (target.hasClass('carousel-controls__next')) {
      this.emit('clicknext')
    } else {
      this.emit('clickprev')
    }
  }
}

export default CarouselControls