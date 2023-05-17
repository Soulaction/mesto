export class UserInfo {
    constructor({name, about, avatar}) {
        this._name = name;
        this._about = about;
        this._avatar = avatar;
    }

    getUserInfo() {
        const userInfo = {};
        userInfo.name = this._name.textContent;
        userInfo.about = this._about.textContent;
        userInfo.avatar = this._avatar.src;
        return userInfo;
    }

    setUserInfo(userInfo) {
        this._name.textContent = userInfo.name;
        this._about.textContent = userInfo.about;
        this._avatar.textContent = userInfo.avatar;
    }
}