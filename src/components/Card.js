export class Card {
    constructor(card, templateSelector, userInfo, handleOpenViewCard, handleConfirmDialog, handleSetLike, handleDeleteLike) {
        this._id = card._id;
        this._name = card.name;
        this._link = card.link;
        this._likes = card.likes;
        this._templateSelector = templateSelector;
        this._handleOpenViewCard = handleOpenViewCard;
        this._handleConfirmDialog = handleConfirmDialog;
        this._handleSetLike = handleSetLike;
        this._handleDeleteLike = handleDeleteLike;
        this._isLike = !!card.likes.find(({_id}) => _id === userInfo.id);
        console.log(userInfo.id);
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
        if (this._isLike) {
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

    _setEventListeners() {
        this._likeCard.addEventListener('click', () => {
            this._handleSetLikeOnCard();
        });
        this._imgCard.addEventListener('click', () => {
            this._handleOpenViewCard();
        });
        if (this._isMyCard) {
            this._buttonDeleteCard.addEventListener('click', () => {
                this._handleDeleteCard();
            });
        }
    }

    _handleSetLikeOnCard() {
        if (this._isLike) {
            this._handleDeleteLike(this._id)
            .then(res => {
                this._isLike = !this._isLike;
                this._countLikesElement.textContent = res.likes.length;
                this._likes = res.likes;
                this._likeCard.classList.remove('element__like_active');
            })
            .catch(err => console.log(err));
            
        } else {
            this._handleSetLike(this._id)
            .then(res => {
                this._isLike = !this._isLike;
                this._countLikesElement.textContent = res.likes.length;
                this._likes = res.likes;
                this._likeCard.classList.add('element__like_active');
            })
            .catch(err => console.log(err));
        }
    }

    _handleDeleteCard() {
        this._handleConfirmDialog()
        // .then(() => this._card.remove());
    }
}