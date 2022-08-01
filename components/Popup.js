export default class Popup {
  constructor(selectorPopup){
    this._selectorPopup = document.querySelector(selectorPopup)
    this._buttonClose = this._selectorPopup.querySelector('.popup__button-close');
    this._escClose = this._handleEscClose.bind(this);
  }

  open(){
    this._selectorPopup.classList.add('popup_opened');
    window.addEventListener("keydown", this._handleEscClose);
  }

  close(){
    this._selectorPopup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  _handleEscClose(evt){
    if (evt.key === "Escape") {
      this._close();
    }
  }
  setEventListeners(){
    this._selectorPopup.addEventListener("mousedown", (evt) =>{
      if (evt.target === evt.currentTarget || evt.target.classList.contains('.popup__button-close')) {
        this.close()
      }
    })
  }
}