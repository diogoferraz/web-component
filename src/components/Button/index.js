import $ from 'jquery';
import '../../assets/Button/style.css';

class Button {
    constructor({ root, number }) {
        //create button instance and add event listener
        this.button = $(root);
        this.button.number = number;
        this.button.on('click', (ev) => this._handleClick(ev));
        this._cancelAction.bind(this);
        this._newAction.bind(this);
    }

    _handleClick(ev) {
        ev.preventDefault();
        if (this.button.hasClass('time-running')) {
            this._cancelAction();
        } else {
            this._newAction();
        }
    }

    _changeHtml() {
        if(!this.button.hasClass('time-running')) {
            this.button.addClass('time-running');
            this.button.text('Calling in ...');
            this.button.append(`<div class="cancelWrapper"><div class="counter">${this.button.number}</div><div class="loader"></div><div class="cancel">Cancel</div></div>`);
        } else {    
            this.button.removeClass('time-running');
            this.button.text('Call Patient');
            this.button.remove('.cancelWrapper');
        }
    }

    _newAction() {
        this._changeHtml();
        var currCount = parseInt(this.button.find('.counter').html());
        this.interval = window.setInterval(() => {
            currCount--
            if (currCount > 0) {
                this.button.find('.counter').text(currCount);
            } else {
                alert('Pacient can come in!');
                clearInterval(this.interval);
                this._changeHtml();
            }
        }, 1000);
    }

    _cancelAction() {
        clearInterval(this.interval);
        this._changeHtml();
    }
}

export default Button;