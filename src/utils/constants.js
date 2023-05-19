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
export const updateAvatarUser = document.querySelector('.profile__avatar-edit-btn');

export const popupProfileEdit = document.querySelector('.popup_type_profile-edit');
export const formEditProfile = popupProfileEdit.querySelector('.popup__form_type_profile-edit');

export const popupUpdateAvatar = document.querySelector('.popup_type_update-avatar');
export const formUpdateAvatar = popupUpdateAvatar.querySelector('.popup__form_type_update-avatar');

export const popupCardCreate = document.querySelector('.popup_type_card-create');
export const formCreateCard = popupCardCreate.querySelector('.popup__form_type_card-edit');

export const popupViewCard = document.querySelector('.popup_type_view-card');

export const popupConfirmSelector = document.querySelector('.popup_type_confirm');
export const formConfirmSelector = popupConfirmSelector.querySelector('.popup__form_type_confirm');
