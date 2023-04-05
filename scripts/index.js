const nameUser = document.querySelector('.profile__nike-name');
const discriptionUser = document.querySelector('.profile__discription');
const editProfileButton = document.querySelector('.profile__edit-btn');
const createCardButton = document.querySelector('.profile__add-btn');
const gallery = document.querySelector('.elements-list');
const card = document.querySelector('#card').content;

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

function initGalary() {
  initialCards.forEach(el => {
    const newCard = createCard(el);
    addCard(newCard);
  });
}

function createCard(cardInfo) {
  const newCard = card.cloneNode(true);

  const imgCard = newCard.querySelector('.element__img');
  const nameCard = newCard.querySelector('.element__name-picture');
  const likeCard = newCard.querySelector('.element__like');
  const deleteCard = newCard.querySelector('.element__bucket');

  imgCard.src = cardInfo.link;
  imgCard.alt = 'Картинка ' + cardInfo.name;
  nameCard.textContent = cardInfo.name;

  likeCard.addEventListener('click', () => {
    likeCard.classList.toggle('element__like_active');
  });

  deleteCard.addEventListener('click', () => {
    const selectedCard = deleteCard.closest('.element');
    selectedCard.remove();
  });

  imgCard.addEventListener('click', openViewCard);

  return newCard;
}

function addCard(newCard) {
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
  setDisableButtonForm(popupProfileEdit, validationConfig);

  userNameInput.value = nameUser.textContent;
  userDiscriptionInput.value = discriptionUser.textContent;
}

function openCreateCard() {
  openPopup(popupCardCreate);
  formCreateCard.reset();
  setDisableButtonForm(popupCardCreate, validationConfig);
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
  initialCards.push(cardInfo);
  const newCard = createCard(cardInfo);
  addCard(newCard);
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