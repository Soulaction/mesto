export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-submit',
  inactiveButtonClass: 'popup__btn-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

export const selectorSection = '.elements-list';
export const templateSelector = '#card';

export const userConfig = {
  name: document.querySelector('.profile__nike-name'),
  about: document.querySelector('.profile__discription'),
  avatar: document.querySelector('.profile__avatar'),

};
export const editProfileButton = document.querySelector('.profile__edit-btn');
export const createCardButton = document.querySelector('.profile__add-btn');

export const popupProfileEdit = document.querySelector('.popup_type_profile-edit');
export const formEditProfile = popupProfileEdit.querySelector('.popup__form_type_profile-edit');

export const popupCardCreate = document.querySelector('.popup_type_card-create');
export const formCreateCard = popupCardCreate.querySelector('.popup__form_type_card-edit');

export const popupViewCard = document.querySelector('.popup_type_view-card');

export const popupConfirmSelector = document.querySelector('.popup_type_confirm');
export const formConfirmSelector = popupConfirmSelector.querySelector('.popup__form_type_confirm');

export const configApi = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: 'd3622e91-6a1b-4880-942f-1e681389a2d9',
    'Content-Type': 'application/json'
  }
}