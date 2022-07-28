export default class UserInfo {
  constructor(data){
    this._name = data.name
    this._subname = data.subname
  }
  getUserInfo(){
    const userInfo = {
      nameInput: this._name.texContent,
      subnameInput: this._subname.texContent
    }
    return userInfo
  }
  setUserInfo(data){
    this._name.texContent = data.nameInput;
    this._subname.texContent = data.subnameInput;
  }
}