export class Card {
    constructor(card, templateSelector, handleOpenViewCard) {
        this._name = card.name;
        this._link = card.link;
        this._templateSelector = templateSelector;
        this._handleOpenViewCard = handleOpenViewCard;
    }

    _getTamlateCard() {
        const elementCard = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
        return elementCard;
    }

    _setElementsCard() {
        this._likeCard = this._card.querySelector('.element__like');
        this._buttonDeleteCard = this._card.querySelector('.element__bucket');
    }

    createCard() {
        this._card = this._getTamlateCard();
        this._setElementsCard();
        this._setEventListeners();
        const imgCard = this._card.querySelector('.element__img');
        const nameCard = this._card.querySelector('.element__name-picture');

        imgCard.src = this._link;
        imgCard.alt = 'Картинка ' + this._name;
        nameCard.textContent = this._name;

        return this._card;
    }

    _setEventListeners() {
        this._likeCard.addEventListener('click', () => {
            this._handleSetLikeOnCard();
        });
        this._card.querySelector('.element__img').addEventListener('click', (evt) => {
            this._handleOpenViewCard(evt);
        });
        this._buttonDeleteCard.addEventListener('click', () => {
            this._handleDeleteCard();
        });
    }

    _handleSetLikeOnCard() {
        this._likeCard.classList.toggle('element__like_active');
    }

    _handleDeleteCard() {
        this._card.remove();
    }
}