import { 
  initialCards,
  validationConfig,
  nameUser,
  discriptionUser,
  editProfileButton,
  createCardButton } from './constants.js'
import { Section } from './Section.js';
import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';
console.log('index');

const popupProfileEdit = document.querySelector('.popup_type_profile-edit');
const formEditProfile = document.querySelector('.popup__form_type_profile-edit');
const userNameInput = formEditProfile.querySelector('.popup__input_type_user-name');
const userDiscriptionInput = formEditProfile.querySelector('.popup__input_type_user-discription');

const popupCardCreate = document.querySelector('.popup_type_card-create');
const formCreateCard = document.querySelector('.popup__form_type_card-edit');
const cardNameInput = formCreateCard.querySelector('.popup__input_type_name-card');
const cardUrlInput = formCreateCard.querySelector('.popup__input_type_url-img');

const popupViewCard = document.querySelector('.popup_type_view-card');
const popupCardImg = popupViewCard.querySelector('.popup__img-card');
const popupCardName = popupViewCard.querySelector('.popup__name-card');

const closeButtons = document.querySelectorAll('.popup__btn-close');

//Создание объекта пользователя
const user = new UserInfo(nameUser, discriptionUser);

//Установка валидации форм
const validateEditProfile = new FormValidator(validationConfig, formEditProfile);
validateEditProfile.enableValidation();
const validateCreateCard = new FormValidator(validationConfig, formCreateCard);
validateCreateCard.enableValidation();

//Отрисовка карточек
const sectionCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item,
        '#card',
        () => {
          popupViewСardImage.open(item);
        }
      );
      const newCard = card.createCard();
      return newCard;
    }
  },
  '.elements-list'
);

//Создание модальных окон
const popupViewСardImage = new PopupWithImage(popupViewCard);

const popupСardСreate = new PopupWithForm(popupCardCreate, (card) => {
  const addCard = new Card(card,
    '#card',
    () => {
      popupViewСardImage.open(card);
    }
  );
  const newCard = addCard.createCard();
  sectionCards.addItem(newCard);
});

const popupEditProfile = new PopupWithForm(popupProfileEdit, (userInfo) => {
  user.setUserInfo(userInfo);
});

sectionCards.renderItems();

editProfileButton.addEventListener('click', () => {
  popupEditProfile.setInputValues(user.getUserInfo());
  validateEditProfile.rebootForm();
  popupEditProfile.open();
});

createCardButton.addEventListener('click', () => {
  validateCreateCard.rebootForm();
  popupСardСreate.open();
});