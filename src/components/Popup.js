export class Popup {
    constructor(popupElement) {
        this._popupElement = popupElement;
        this._closeButtons = this._popupElement.querySelector('.popup__btn-close');
    }

    open() {
        document.addEventListener('keydown', this._handleEscClose.bind(this), { once: true });
        this._popupElement.classList.add('popup_opened');
    }

    close() {
        this._popupElement.classList.remove('popup_opened');
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleClickAreaClose(evt) {
        if (this._popupElement === evt.target) {
            this.close();
        }
    }

    setEventListeners() {
        this._closeButtons.addEventListener('click', () => this.close());
        this._popupElement.addEventListener('mousedown', (evt) => this._handleClickAreaClose(evt));
    }
}