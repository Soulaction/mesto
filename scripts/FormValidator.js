export class FormValidator {
    constructor(validationConfig, form) {
        this._validationConfig = validationConfig;
        this._form = form;
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

    _checkValidateForm(fieldFormList) {
        return fieldFormList.some(field => !field.validity.valid)
    }

    _toggleButtonState(fieldFormList, buttonForm) {
        if (this._checkValidateForm(fieldFormList)) {
            buttonForm.classList.add(this._validationConfig.inactiveButtonClass);
            buttonForm.setAttribute('disabled', true);
        } else {
            buttonForm.classList.remove(this._validationConfig.inactiveButtonClass);
            buttonForm.removeAttribute('disabled');
        }
    }

    setDisableButtonForm() {
        const fieldFormList = Array.from(this._form.querySelectorAll(this._validationConfig.inputSelector));
        const buttonForm = this._form.querySelector(this._validationConfig.submitButtonSelector);
        this._toggleButtonState(fieldFormList, buttonForm);
    }

    _setEventValidateListener() {
        const fieldFormList = Array.from(this._form.querySelectorAll(this._validationConfig.inputSelector));
        const buttonForm = this._form.querySelector(this._validationConfig.submitButtonSelector);
        fieldFormList.forEach(input => {
            input.addEventListener('input', () => {
                this._checkValidateInputForm(input);
                this._toggleButtonState(fieldFormList, buttonForm);
            })
        });
    }

    enableValidation() {
        this._setEventValidateListener();
    }
}