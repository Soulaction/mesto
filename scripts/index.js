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

function initGalary() {
  initialCards.forEach(el => {
    const newCard = createCard(el);
    addCard(newCard);
  });
}

function addCard(newCard) {
  gallery.prepend(newCard);
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

function openPopup(popup) {
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
  const newCard = createCard(cardInfo);
  addCard(newCard);
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