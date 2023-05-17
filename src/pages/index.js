import './index.css';
import { 
  configApi,
  validationConfig,
  selectorSection,
  templateSelector,
  userConfig,
  editProfileButton,
  createCardButton,
  popupProfileEdit,
  formEditProfile,
  popupCardCreate,
  formCreateCard,
  popupViewCard} from '../utils/constants.js'
import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';

//Создание объекта API
const api = new Api(configApi);

//Создание объекта пользователя
const user = new UserInfo(userConfig);

//Установка валидации форм
const validateEditProfile = new FormValidator(validationConfig, formEditProfile);
validateEditProfile.enableValidation();
const validateCreateCard = new FormValidator(validationConfig, formCreateCard);
validateCreateCard.enableValidation();

//Отрисовка карточек
api.getInitialCards()
.then(cards => {
  const sectionCards = new Section(
    {
      items: cards,
      renderer: (item) => {
        const card = new Card(item,
          templateSelector,
          () => {
            popupViewСardImage.open(item);
          }
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
  sectionCards.addItem(card);
});
popupСardСreate.setEventListeners();

const popupEditProfile = new PopupWithForm(popupProfileEdit, (userInfo) => {
  user.setUserInfo(userInfo);
});
popupEditProfile.setEventListeners();

const popupConfirm = new PopupWithImage(popupViewCard);
popupViewСardImage.setEventListeners();

editProfileButton.addEventListener('click', () => {
  popupEditProfile.setInputValues(user.getUserInfo());
  validateEditProfile.rebootForm();
  popupEditProfile.open();
});

createCardButton.addEventListener('click', () => {
  validateCreateCard.rebootForm();
  popupСardСreate.open();
});