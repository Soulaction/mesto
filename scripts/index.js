const nameUser = document.querySelector('.profile__nike-name');
const discriptionUser = document.querySelector('.profile__discription');
const editProfileButton = document.querySelector('.profile__edit-btn');
const createCardButton = document.querySelector('.profile__add-btn');
const gallery = document.querySelector('.elements-list');

const popupProfileEdit = document.querySelector('.popup_type_profile-edit');
const formEditProfile = document.querySelector('.popup__form_type_profile-edit');
const userNameInput = formEditProfile.querySelector('.popup__input_type_user-name');
const userDiscriptionInput = formEditProfile.querySelector('.popup__input_type_user-discription');
const closePopupProfileEdit = popupProfileEdit.querySelector('.popup__btn-close');

const popupCardCreate = document.querySelector('.popup_type_card-create');
const formCreateCard = document.querySelector('.popup__form_type_card-edit');
const cardNameInput = formCreateCard.querySelector('.popup__input_type_name-card');
const cardUrlInput = formCreateCard.querySelector('.popup__input_type_url-img');
const closePopupCardCreate = popupCardCreate.querySelector('.popup__btn-close');

const popupViewCard = document.querySelector('.popup_type_view-card');
const popupCardImg = popupViewCard.querySelector('.popup__img-card');
const popupCardName = popupViewCard.querySelector('.popup__name-card');
const closePopupViewCard = popupViewCard.querySelector('.popup__btn-close');

const initialCards = [
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

function initGalary() {
  initialCards.forEach(el => createCard(el));
}

function createCard(cardInfo) {
  const card = document.querySelector('#card').content;

  const newCard = card.cloneNode(true);

  const imgCard = newCard.querySelector('.element__img');
  const nameCard = newCard.querySelector('.element__name-picture');
  const likeCard = newCard.querySelector('.element__like');
  const deleteCard = newCard.querySelector('.element__bucket');

  imgCard.src = cardInfo.link;
  imgCard.alt = 'Картинка ' + cardInfo.name;
  nameCard.textContent = cardInfo.name;

  likeCard.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });

  deleteCard.addEventListener('click', function (evt) {
    const selectedCard = evt.target.closest('.element');
    selectedCard.remove();
  });

  imgCard.addEventListener('click', function (selectedCard) {
    openViewCard(selectedCard);
  });

  gallery.prepend(newCard);
}

function openEditProfile() {
  popupProfileEdit.classList.add('popup_opened');

  userNameInput.value = nameUser.textContent;
  userDiscriptionInput.value = discriptionUser.textContent;
}

function openCreateCard() {
  popupCardCreate.classList.add('popup_opened');
  cardNameInput.value = '';
  cardUrlInput.value = '';
}

function openViewCard(card) {
  popupViewCard.classList.add('popup_opened');
  popupCardImg.src = card.target.src;
  popupCardImg.alt = card.target.alt;
  popupCardName.textContent = card.target.nextElementSibling.firstElementChild.textContent;
}

function closePopup(currentPopup) {
  currentPopup.classList.remove('popup_opened');
}

function submitFormHandlerEditProfile(evt) {
  evt.preventDefault();

  nameUser.textContent = userNameInput.value;
  discriptionUser.textContent = userDiscriptionInput.value;
  closePopup(popupProfileEdit)
}

function submitFormHandlerCreateCard(evt) {
  evt.preventDefault();

  const cardInfo = {};
  cardInfo.name = cardNameInput.value;
  cardInfo.link = cardUrlInput.value;
  initialCards.push(cardInfo);
  createCard(cardInfo);
  closePopup(popupCardCreate)
}

formEditProfile.addEventListener('submit', submitFormHandlerEditProfile);
formCreateCard.addEventListener('submit', submitFormHandlerCreateCard);
editProfileButton.addEventListener('click', openEditProfile);
closePopupProfileEdit.addEventListener('click', () => closePopup(popupProfileEdit));
createCardButton.addEventListener('click', openCreateCard);
closePopupCardCreate.addEventListener('click', () => closePopup(popupCardCreate));
closePopupViewCard.addEventListener('click', () => closePopup(popupViewCard));

initGalary();