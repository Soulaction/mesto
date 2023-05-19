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
import { PopupConfirm } from '../components/PopupConfirm.js';
import { UserInfo } from '../components/UserInfo.js';
import { api } from '../components/Api.js';

//Создание объекта пользователя
const user = new UserInfo(userConfig);
api.getUserInfo()
  .then(userInfo => {
    console.log(userInfo);
    user.setUserInfo(userInfo);
  })
  .catch(err => console.log(err))

//Установка валидации форм
const validateEditProfile = new FormValidator(validationConfig, formEditProfile);
validateEditProfile.enableValidation();
const validateCreateCard = new FormValidator(validationConfig, formCreateCard);
validateCreateCard.enableValidation();
const validateAvatarUser = new FormValidator(validationConfig, formUpdateAvatar);
validateAvatarUser.enableValidation();

let sectionCards;

api.getInitialCards()
  .then(cards => {
    sectionCards = new Section(
      {
        items: cards,
        renderer: (item) => {
          const card = new Card(
            item,
            templateSelector,
            user.getUserInfo(),
            () => popupViewСardImage.open(item),
            () => popupConfirm.open(item),
            (id) => api.setLike(id),
            (id) => api.deleteLike(id)
          );
          const newCard = card.createCard();
          return newCard;
        }
      },
      selectorSection
    );
    sectionCards.renderItems();
  }).catch(err => console.log(err))

//Создание модальных окон
const popupViewСardImage = new PopupWithImage(popupViewCard);
popupViewСardImage.setEventListeners();


const popupСardСreate = new PopupWithForm(popupCardCreate, (card) => {
  api.addNewCard(card)
  .then(refreshCard => {
    sectionCards.addItem(refreshCard);
  })
  .catch(err => console.log(err));
});
popupСardСreate.setEventListeners();


const popupEditProfile = new PopupWithForm(popupProfileEdit, (userInfo) => {
  api.updateUserInfo(userInfo)
  .then(refreshUser => {
    user.setUserInfo(refreshUser);
  })
  .catch(err => console.log(err));
  
});
popupEditProfile.setEventListeners();

const popupAvatarUpdate = new PopupWithForm(popupUpdateAvatar, (userInfo) => {
  api.updateAvatarUser(userInfo)
  .then(refreshUser => {
    user.setUserInfo(refreshUser);
  })
  .catch(err => console.log(err));
  
});
popupAvatarUpdate.setEventListeners();

const popupConfirm = new PopupConfirm(popupConfirmSelector, (cardId) => {
  api.deleteCard(cardId)
  .then(data => {
    console.log(data);
  })
});
popupConfirm.setEventListeners();

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