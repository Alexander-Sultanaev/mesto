export class UserInfo {
  constructor({ name: nameUser, info: infoUser }) {
    this._nameUser = document.querySelector(nameUser)
    this._infoUser = document.querySelector(infoUser)
  }

  getUserInfo() {
    const dataUser = {
      nameInput: this._nameUser.textContent,
      subnameInput: this._infoUser.textContent,
    }
    return dataUser
  }

  setUserInfo(data) {
    this._nameUser.textContent = data.nameInput
    this._infoUser.textContent = data.subnameInput
  }
}