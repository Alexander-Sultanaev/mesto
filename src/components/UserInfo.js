export class UserInfo {
  constructor({ name: nameUser, about: aboutUser, avatar: avatarUser }) {
    this._nameUser = document.querySelector(nameUser)
    this._aboutUser = document.querySelector(aboutUser)
    this._avatarUser = document.querySelector(avatarUser)
  }

  getUserInfo() {
    const dataUser = {
      name: this._nameUser.textContent,
      about: this._aboutUser.textContent,
      avatar: this._avatarUser.src
    }
    return dataUser
  }

  setUserInfo(data) {
    this._nameUser.textContent = data.name
    this._aboutUser.textContent = data.about
    this._avatarUser.src = data.avatar
  }
}