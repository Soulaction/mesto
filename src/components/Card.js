export class Card {
    constructor(card, templateSelector, userInfo, handleOpenViewCard, handleConfirmDialog, handleLike) {
        this._id = card._id;
        this._name = card.name;
        this._link = card.link;
        this._likes = card.likes;
        this._userId = userInfo.id;
        this._templateSelector = templateSelector;
        this._handleOpenViewCard = handleOpenViewCard;
        this._handleConfirmDialog = handleConfirmDialog;
        this._handleLike = handleLike;
        this._isMyCard = card.owner._id === userInfo.id;
    }

    _getTamlateCard() {
        const elementCard = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
        return elementCard;
    }

    createCard() {
        this._card = this._getTamlateCard();
        this._imgCard = this._card.querySelector('.element__img')
        this._likeCard = this._card.querySelector('.element__like');
        if (this.isLike()) {
            this._likeCard.classList.add('element__like_active');
        }
        this._buttonDeleteCard = this._card.querySelector('.element__bucket');
        if (!this._isMyCard) {
            this._buttonDeleteCard.style.display = 'none';
        }

        this._nameCard = this._card.querySelector('.element__name-picture');
        this._countLikesElement = this._card.querySelector('.element__like-count');

        this._imgCard.src = this._link;
        this._imgCard.alt = 'Картинка ' + this._name;
        this._nameCard.textContent = this._name;
        this._countLikesElement.textContent = this._likes.length;

        this._setEventListeners();
        return this._card;
    }

    isLike() {
        return !!this._likes.find(({ _id }) => _id === this._userId);
    }

    _setEventListeners() {
        this._likeCard.addEventListener('click', () => {
            this._handleSetLikeOnCard();
        });
        this._imgCard.addEventListener('click', () => {
            this._handleOpenViewCard();
        });
        if (this._isMyCard) {
            this._buttonDeleteCard.addEventListener('click', () => {
                this._handleConfirmDialog(this._id, () => this._handleDeleteCard());
            });
        }
    }

    _handleSetLikeOnCard() {
        this._handleLike(this._id)
            .then(res => {
                this._countLikesElement.textContent = res.likes.length;
                this._likes = res.likes;
                this._likeCard.classList.toggle('element__like_active');
            })
            .catch(err => console.log(err));
    }

    _handleDeleteCard() {
        this._card.remove();
    }
}