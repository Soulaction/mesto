export class UserInfo {
    constructor(userNameSelector, userDiscriptionSelector) {
        this._name = userNameSelector;
        this._discription = userDiscriptionSelector;
    }

    getUserInfo() {
        const userInfo = {};
        userInfo.name = this._name.textContent;
        userInfo.discription = this._discription.textContent;
        return userInfo;
    }

    setUserInfo(userInfo) {
        this._name.textContent = userInfo.name;
        this._discription.textContent = userInfo.discription;
    }
}