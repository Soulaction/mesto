export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

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