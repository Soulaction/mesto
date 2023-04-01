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

  return newCard;
}

function addCard(newCard) {
  gallery.prepend(newCard);
}

function openPopup(popup) {
  const closeButton = popup.querySelector('.popup__btn-close');
  closeButton.addEventListener('click', closePopup);
  document.addEventListener('keydown', closePopupOnEsc);
  popup.addEventListener('mousedown', closePopupOnClickArea);

  popup.classList.add('popup_opened');
}

function openEditProfile() {
  openPopup(popupProfileEdit)

  userNameInput.value = nameUser.textContent;
  userDiscriptionInput.value = discriptionUser.textContent;
}

function openCreateCard() {
  openPopup(popupCardCreate)

  formCreateCard.reset();
}

function openViewCard(selectedCard) {
  openPopup(popupViewCard)
  popupCardImg.src = selectedCard.target.src;
  popupCardImg.alt = selectedCard.target.alt;
  popupCardName.textContent = selectedCard.target.nextElementSibling.firstElementChild.textContent;
}

function closePopup() {
    const currentPopup = document.querySelector('.popup_opened')
    currentPopup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupOnEsc)
}

function closePopupOnEsc(evt) {
  if (evt.key === 'Escape') {
    closePopup();
  }
}

function closePopupOnClickArea(evt) {
  if (evt.currentTarget === evt.target) {
    closePopup();
  }
}

function submitFormHandlerEditProfile(evt) {
  evt.preventDefault();

  nameUser.textContent = userNameInput.value;
  discriptionUser.textContent = userDiscriptionInput.value;
  closePopup()
}

function submitFormHandlerCreateCard(evt) {
  evt.preventDefault();

  const cardInfo = {};
  cardInfo.name = cardNameInput.value;
  cardInfo.link = cardUrlInput.value;
  initialCards.push(cardInfo);
  const newCard = createCard(cardInfo);
  addCard(newCard);
  closePopup();
}

formEditProfile.addEventListener('submit', submitFormHandlerEditProfile);
formCreateCard.addEventListener('submit', submitFormHandlerCreateCard);
editProfileButton.addEventListener('click', openEditProfile);
createCardButton.addEventListener('click', openCreateCard);

initGalary();