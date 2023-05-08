import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitFormHandler) {
        super(popupSelector);
        this._listInputForm = Array.from(this._popupSelector.querySelectorAll('.popup__input'));
        this._submitFormHandler = submitFormHandler;
    }

    _getInputValues() {
        this._valuesInputForm = {};
        this._listInputForm.forEach(({name, value}) => {
            this._valuesInputForm[name] = value;
        });
        return this._valuesInputForm;
    }

    setInputValues(inputValues) {
        this._listInputForm.forEach((input) => {
            if(input.name in inputValues) {
                input.value = inputValues[input.name];
            }
        });
    }

    setEventListeners() {
        super.setEventListeners();
        this._form = this._popupSelector.querySelector('.popup__form');
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitFormHandler(this._getInputValues());
            this.close();
        });
    }

    close() {
        this._form.reset();
        super.close();
    }
}