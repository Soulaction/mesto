export class FormValidator {
    constructor(validationConfig, form) {
        this._validationConfig = validationConfig;
        this._form = form;
        this._fieldFormList = Array.from(this._form.querySelectorAll(this._validationConfig.inputSelector));
        this._buttonForm = this._form.querySelector(this._validationConfig.submitButtonSelector);
    }

    _showInputError(inputForm) {
        const errorMessage = this._form.querySelector(`.${inputForm.id}-error`);
        inputForm.classList.add(this._validationConfig.inputErrorClass);
        errorMessage.classList.add(this._validationConfig.errorClass);
        errorMessage.textContent = inputForm.validationMessage;
    };

    _hideInputError(inputForm) {
        const errorMessage = this._form.querySelector(`.${inputForm.id}-error`);
        inputForm.classList.remove(this._validationConfig.inputErrorClass);
        errorMessage.classList.remove(this._validationConfig.errorClass);
        errorMessage.textContent = '';
    };

    _checkValidateInputForm(input) {
        if (!input.validity.valid) {
            this._showInputError(input);
        } else {
            this._hideInputError(input);
        }
    }

    _checkValidateForm() {
        return this._fieldFormList.some(field => !field.validity.valid)
    }

    _toggleButtonState() {
        if (this._checkValidateForm()) {
            this._buttonForm.classList.add(this._validationConfig.inactiveButtonClass);
            this._buttonForm.setAttribute('disabled', true);
        } else {
            this._buttonForm.classList.remove(this._validationConfig.inactiveButtonClass);
            this._buttonForm.removeAttribute('disabled');
        }
    }

    rebootForm() {
        this._fieldFormList.forEach(input => {
            this._hideInputError(input);
        })
        this._toggleButtonState();
    }

    _setEventValidateListener() {
        this._fieldFormList.forEach(input => {
            input.addEventListener('input', () => {
                this._checkValidateInputForm(input);
                this._toggleButtonState();
            })
        });
    }

    enableValidation() {
        this._setEventValidateListener();
    }
}