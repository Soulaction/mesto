export class Api {
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.token = options.headers.authorization;
        this.contentType = options.headers['Content-Type'];
    }

    _fetch(url, option) {
        return fetch(this.baseUrl + url, option)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
    }

    getInitialCards() {
        return this._fetch('/cards', {
            method: 'GET',
            headers: {
                authorization: this.token
            }
        });
    }

    getUserInfo() {
        return this._fetch('/users/me', {
            method: 'GET',
            headers: {
                authorization: this.token
            }
        });
    }

    updateUserInfo({ name, about }) {
        return this._fetch('/users/me', {
            method: 'PATCH',
            headers: {
                authorization: this.token,
                'Content-Type': this.contentType
            },
            body: JSON.stringify({
                name,
                about
            })
        });
    }

    updateAvatarUser({ avatar }) {
        return this._fetch('/users/me/avatar', {
            method: 'PATCH',
            headers: {
                authorization: this.token,
                'Content-Type': this.contentType
            },
            body: JSON.stringify({
                avatar
            })
        });
    }

    addNewCard({ name, link }) {
        return this._fetch('/cards', {
            method: 'POST',
            headers: {
                authorization: this.token,
                'Content-Type': this.contentType
            },
            body: JSON.stringify({
                name,
                link
            })
        });
    }

    deleteCard(cardId) {
        return this._fetch(`/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this.token
            }
        });
    }

    setLike(cardId) {
        return this._fetch(`/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this.token
            }
        });
    }

    deleteLike(cardId) {
        return this._fetch(`/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this.token
            }
        });
    }
}

//Создание объекта API
export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
    headers: {
      authorization: 'd3622e91-6a1b-4880-942f-1e681389a2d9',
      'Content-Type': 'application/json'
    }
  }); 