export class UserInfo {
    constructor(userConfig) {
        this._name = userConfig.name;
        this._about = userConfig.about;
        this._avatar = userConfig.avatar;
    }

    getUserInfo() {
        const userInfo = {};
        userInfo.id = this._id;
        userInfo.name = this._name.textContent;
        userInfo.about = this._about.textContent;
        userInfo.avatar = this._avatar.src;
        return userInfo;
    }

    setUserInfo(userInfo) {
        this._id = userInfo._id;
        this._name.textContent = userInfo.name;
        this._about.textContent = userInfo.about;
        this._avatar.src = userInfo.avatar;
    }
}