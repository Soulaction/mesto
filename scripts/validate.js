export class FormValidator {
    constructor(validationConfig, form) {
        this._validationConfig = validationConfig;
        this._form = form;
    }
}
function showInputError(inputForm, validationConfig) {
    const errorMessage = document.querySelector(`.${inputForm.id}-error`);
    inputForm.classList.add(validationConfig.inputErrorClass);
    errorMessage.classList.add(validationConfig.errorClass);
    errorMessage.textContent = inputForm.validationMessage;
};

function hideInputError(inputForm, validationConfig) {
    const errorMessage = document.querySelector(`.${inputForm.id}-error`);
    inputForm.classList.remove(validationConfig.inputErrorClass);
    errorMessage.classList.remove(validationConfig.errorClass);
    errorMessage.textContent = '';
};

function checkValidateInputForm(input, validationConfig) {
    if (!input.validity.valid) {
        showInputError(input, validationConfig);
    } else {
        hideInputError(input, validationConfig);
    }
}

function checkValidateForm(fieldFormList) {
    return fieldFormList.some(field => !field.validity.valid)
}

function toggleButtonState(fieldFormList, buttonForm, validationConfig) {
    if (checkValidateForm(fieldFormList)) {
        buttonForm.classList.add(validationConfig.inactiveButtonClass);
        buttonForm.setAttribute('disabled', true);
    } else {
        buttonForm.classList.remove(validationConfig.inactiveButtonClass);
        buttonForm.removeAttribute('disabled');
    }
}

function setDisableButtonForm(form, validationConfig) {
    const fieldFormList = Array.from(form.querySelectorAll(validationConfig.inputSelector));
    const buttonForm = form.querySelector(validationConfig.submitButtonSelector);
    toggleButtonState(fieldFormList, buttonForm, validationConfig);
}

function setEventValidateListener(form, validationConfig) {
    const fieldFormList = Array.from(form.querySelectorAll(validationConfig.inputSelector));
    const buttonForm = form.querySelector(validationConfig.submitButtonSelector);
    fieldFormList.forEach(input => {
        input.addEventListener('input', () => {
            checkValidateInputForm(input, validationConfig);
            toggleButtonState(fieldFormList, buttonForm, validationConfig);
        })
    });
}

function enableValidation(validationConfig) {
    const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
    formList.forEach(form => {
        setEventValidateListener(form, validationConfig);
    });
}

enableValidation(validationConfig);