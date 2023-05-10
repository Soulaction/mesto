import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._popupCardImg = this._popupElement.querySelector('.popup__img-card');
        this._popupCardName = this._popupElement.querySelector('.popup__name-card');
    }

    open(cardInfo) {
        super.open();
        this._popupCardName.textContent = cardInfo.name;
        this._popupCardImg.alt = cardInfo.name;
        this._popupCardImg.src = cardInfo.link;
    }
}