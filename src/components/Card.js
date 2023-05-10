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

    createCard() {
        this._card = this._getTamlateCard();
        this._imgCard = this._card.querySelector('.element__img')
        this._likeCard = this._card.querySelector('.element__like');
        this._buttonDeleteCard = this._card.querySelector('.element__bucket');
        const nameCard = this._card.querySelector('.element__name-picture');

        this._imgCard.src = this._link;
        this._imgCard.alt = 'Картинка ' + this._name;
        nameCard.textContent = this._name;

        this._setEventListeners();
        return this._card;
    }

    _setEventListeners() {
        this._likeCard.addEventListener('click', () => {
            this._handleSetLikeOnCard();
        });
        this._imgCard.addEventListener('click', () => {
            this._handleOpenViewCard();
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