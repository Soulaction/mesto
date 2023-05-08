import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupCardImg = this._popupSelector.querySelector('.popup__img-card');
        this._popupCardName = this._popupSelector.querySelector('.popup__name-card');
    }

    open(cardInfo) {
        super.open();
        this._popupCardName.textContent = cardInfo.name;
        this._popupCardImg.alt = cardInfo.name;
        this._popupCardImg.src = cardInfo.link;
    }
}