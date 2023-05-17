export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-save',
  inactiveButtonClass: 'popup__btn-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

export const selectorSection = '.elements-list';
export const templateSelector = '#card';

export const userConfig = {
  name: document.querySelector('.profile__nike-name'),
  discription: document.querySelector('.profile__discription')
};
export const editProfileButton = document.querySelector('.profile__edit-btn');
export const createCardButton = document.querySelector('.profile__add-btn');

export const popupProfileEdit = document.querySelector('.popup_type_profile-edit');
export const formEditProfile = document.querySelector('.popup__form_type_profile-edit');

export const popupCardCreate = document.querySelector('.popup_type_card-create');
export const formCreateCard = document.querySelector('.popup__form_type_card-edit');

export const popupViewCard = document.querySelector('.popup_type_view-card');

export const popupConfirm = document.querySelector('.popup_type_confirm');

export const configApi = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: 'd3622e91-6a1b-4880-942f-1e681389a2d9',
    'Content-Type': 'application/json'
  }
}