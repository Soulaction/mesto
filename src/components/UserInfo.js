export class UserInfo {
    constructor({name, discription}) {
        this._name = name;
        this._discription = discription;
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