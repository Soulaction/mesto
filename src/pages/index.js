import './index.css';
import {
  validationConfig,
  selectorSection,
  templateSelector,
  userConfig,
  editProfileButton,
  createCardButton,
  updateAvatarUser,
  popupProfileEdit,
  formEditProfile,
  popupCardCreate,
  formCreateCard,
  popupViewCard,
  popupUpdateAvatar,
  formUpdateAvatar,
  popupConfirmSelector
} from '../utils/constants.js'
import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
import { UserInfo } from '../components/UserInfo.js';
import { api } from '../components/Api.js';

//Создание объекта пользователя
const user = new UserInfo(userConfig);
let sectionCards;

//Функция создания карточки
const renderCard = (item) => {
  const card = new Card(
    item,
    templateSelector,
    user.getUserInfo(),
    () => popupViewСardImage.open(item),
    (id, extendForHandleConfirm) => popupWithConfirmation.open(id, extendForHandleConfirm),
    (id) => {
      if (card.isLike()) {
        return api.deleteLike(id);
      } else {
        return api.setLike(id);
      }
    },
  );
  const newCard = card.createCard();
  return newCard;
}

//Установка валидации форм
const validateEditProfile = new FormValidator(validationConfig, formEditProfile);
validateEditProfile.enableValidation();
const validateCreateCard = new FormValidator(validationConfig, formCreateCard);
validateCreateCard.enableValidation();
const validateAvatarUser = new FormValidator(validationConfig, formUpdateAvatar);
validateAvatarUser.enableValidation();

//Получение информации о пользователе и рендеринг карточек
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userInfo, cards]) => {
    user.setUserInfo(userInfo);
    sectionCards = new Section(
      {
        items: cards,
        renderer: (item) => renderCard(item)
      },
      selectorSection
    );
    sectionCards.renderItems();
  })
  .catch(err => console.log('Ошибка: ' + err));

//Создание модальных окон
const popupViewСardImage = new PopupWithImage(popupViewCard);
popupViewСardImage.setEventListeners();

const popupСardСreate = new PopupWithForm(popupCardCreate, (card) => {
  api.addNewCard(card)
    .then(refreshCard => {
      sectionCards.addItem(refreshCard);
      popupСardСreate.close();
    })
    .catch(err => console.log(err))
    .finally(() => popupСardСreate.btnSubmit.textContent = 'Cохранить');
});
popupСardСreate.setEventListeners();


const popupEditProfile = new PopupWithForm(popupProfileEdit, (userInfo) => {
  api.updateUserInfo(userInfo)
    .then(refreshUser => {
      user.setUserInfo(refreshUser);
      popupEditProfile.close();
    })
    .catch(err => console.log(err))
    .finally(() => popupEditProfile.btnSubmit.textContent = 'Cохранить');
});
popupEditProfile.setEventListeners();

const popupAvatarUpdate = new PopupWithForm(popupUpdateAvatar, (userInfo) => {
  api.updateAvatarUser(userInfo)
    .then(refreshUser => {
      user.setUserInfo(refreshUser);
      popupAvatarUpdate.close();
    })
    .catch(err => console.log(err))
    .finally(() => popupAvatarUpdate.btnSubmit.textContent = 'Cохранить');
});
popupAvatarUpdate.setEventListeners();

const popupWithConfirmation = new PopupWithConfirmation(popupConfirmSelector, (cardId) => {
  return api.deleteCard(cardId);
});
popupWithConfirmation.setEventListeners();

editProfileButton.addEventListener('click', () => {
  popupEditProfile.setInputValues(user.getUserInfo());
  validateEditProfile.rebootForm();
  popupEditProfile.open();
});

createCardButton.addEventListener('click', () => {
  validateCreateCard.rebootForm();
  popupСardСreate.open();
});

updateAvatarUser.addEventListener('click', () => {
  popupAvatarUpdate.setInputValues(user.getUserInfo());
  validateCreateCard.rebootForm();
  popupAvatarUpdate.open();
});