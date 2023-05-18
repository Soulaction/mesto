import { Popup } from "./Popup";

export class PopupConfirm extends Popup {
    constructor(popupElement, handleConfirm) {
        super(popupElement);
        this._handleConfirm = handleConfirm;
    }

    open({_id}) {
        this._id = _id;
        super.open();
    }

    setEventListeners() {
        super.setEventListeners();
        this._form = this._popupElement.querySelector('.popup__form');
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleConfirm(this._id);
            this.close();
        });
    }
}