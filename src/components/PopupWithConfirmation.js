import { Popup } from "./Popup";

export class PopupWithConfirmation extends Popup {
    constructor(popupElement, handleConfirm) {
        super(popupElement);
        this._handleConfirm = handleConfirm;
    }

    open(id, extendForHandleConfirm) {
        this._id = id;
        this._extendForHandleConfirm = extendForHandleConfirm ? extendForHandleConfirm : () => { };
        super.open();
    }

    setEventListeners() {
        super.setEventListeners();
        this._form = this._popupElement.querySelector('.popup__form');
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleConfirm(this._id)
                .then(data => {
                    console.log(data);
                    this._extendForHandleConfirm();
                })
                .catch(err => console.log(err));;
            this.close();
        });
    }
}