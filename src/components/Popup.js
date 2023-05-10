export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._closeButtons = this._popupSelector.querySelector('.popup__btn-close');
    }

    open() {
        document.addEventListener('keydown', this._handleEscClose.bind(this), { once: true });
        this._popupSelector.classList.add('popup_opened');
    }

    close() {
        this._popupSelector.classList.remove('popup_opened');
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleClickAreaClose(evt) {
        if (this._popupSelector === evt.target) {
            this.close();
        }
    }

    setEventListeners() {
        this._closeButtons.addEventListener('click', () => this.close());
        this._popupSelector.addEventListener('mousedown', (evt) => this._handleClickAreaClose(evt));
    }
}