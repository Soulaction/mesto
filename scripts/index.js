import { Card } from './Card.js'
import { initialCards, validationConfig } from './constants.js'
import { FormValidator } from './FormValidator.js'

const nameUser = document.querySelector('.profile__nike-name');
const discriptionUser = document.querySelector('.profile__discription');
const editProfileButton = document.querySelector('.profile__edit-btn');
const createCardButton = document.querySelector('.profile__add-btn');
const gallery = document.querySelector('.elements-list');

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

//Установка валидации форм
const validateEditProfile = new FormValidator(validationConfig, formEditProfile);
validateEditProfile.enableValidation();
const validateCreateCard = new FormValidator(validationConfig, formCreateCard);
validateCreateCard.enableValidation();

function initGalary() {
  initialCards.forEach(cardInfo => {
    addCard(cardInfo);
  });
}

function addCard(cardInfo) {
  const card = new Card(cardInfo, '#card', openViewCard);
  const newCard = card.createCard();
  gallery.prepend(newCard);
}

function openPopup(popup) {
  document.addEventListener('keydown', closePopupOnEsc);
  popup.addEventListener('mousedown', closePopupOnClickArea);
  popup.classList.add('popup_opened');
}

function openEditProfile() {
  openPopup(popupProfileEdit);
  formEditProfile.reset();
  validateEditProfile.rebootForm();

  userNameInput.value = nameUser.textContent;
  userDiscriptionInput.value = discriptionUser.textContent;
}

function openCreateCard() {
  openPopup(popupCardCreate);
  formCreateCard.reset();
  validateCreateCard.rebootForm();
}

function openViewCard(selectedCard) {
  openPopup(popupViewCard);
  popupCardImg.src = selectedCard.target.src;
  popupCardImg.alt = selectedCard.target.alt;
  popupCardName.textContent = selectedCard.target.nextElementSibling.firstElementChild.textContent;
}

function closePopup(currentPopup) {
  document.removeEventListener('keydown', closePopupOnEsc);
  currentPopup.removeEventListener('mousedown', closePopupOnClickArea);
  currentPopup.classList.remove('popup_opened');
}

function closePopupOnEsc(evt) {
  if (evt.key === 'Escape') {
    const currentPopup = document.querySelector('.popup_opened')
    closePopup(currentPopup);
  }
}

function closePopupOnClickArea(evt) {
  if (evt.currentTarget === evt.target) {
    closePopup(evt.currentTarget);
  }
}

function submitFormHandlerEditProfile(evt, currentPopup) {
  evt.preventDefault();

  nameUser.textContent = userNameInput.value;
  discriptionUser.textContent = userDiscriptionInput.value;
  closePopup(currentPopup);
}

function submitFormHandlerCreateCard(evt, currentPopup) {
  evt.preventDefault();

  const cardInfo = {};
  cardInfo.name = cardNameInput.value;
  cardInfo.link = cardUrlInput.value;
  addCard(cardInfo);
  closePopup(currentPopup);
}

formEditProfile.addEventListener('submit', (evt) => submitFormHandlerEditProfile(evt, popupProfileEdit));
formCreateCard.addEventListener('submit', (evt) => submitFormHandlerCreateCard(evt, popupCardCreate));
editProfileButton.addEventListener('click', openEditProfile);
createCardButton.addEventListener('click', openCreateCard);

closeButtons.forEach(button => button.addEventListener('click', () => {
  const currentPopup = button.closest('.popup');
  closePopup(currentPopup);
}));

initGalary();