export class Api {
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.token = options.headers.authorization;
        this.contentType = options.headers['Content-Type'];
    }

    getInitialCards() {
        return fetch(this.baseUrl + '/cards', {
            method: 'GET',
            headers: {
                authorization: this.token
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
    }

    getUserInfo() {
        return fetch(this.baseUrl + '/users/me', {
            method: 'GET',
            headers: {
                authorization: this.token
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
    }

    updateUserInfo({name, about}) {
        return fetch(this.baseUrl + '/users/me', {
            method: 'PATCH',
            headers: {
                authorization: this.token,
                'Content-Type': this.contentType
            },
            body: JSON.stringify({
                name,
                about
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
    }

    addNewCard({name, link}) {
        return fetch(this.baseUrl + '/cards', {
            method: 'POST',
            headers: {
                authorization: this.token,
                'Content-Type': this.contentType
            },
            body: JSON.stringify({
                name,
                link
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
    }
}