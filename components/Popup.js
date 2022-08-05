export default class Popup {
  constructor(selectorPopup){
    this._Popup = document.querySelector(selectorPopup)
    this._buttonClose = this._Popup.querySelector('.popup__button-close');
    this._escClose = this._handleEscClose.bind(this);
  }

  open(){
    this._Popup.classList.add('popup_opened');
    window.addEventListener("keydown", this._escClose );
  }

  close(){
    this._Popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._escClose );
  }
  _handleEscClose(evt){
    if (evt.key === "Escape") {
      this.close();
    }
  }
  setEventListeners(){
    this._buttonClose.addEventListener('click', () => {
      this.close();
    });
    this._Popup.addEventListener("mousedown", (evt) =>{
      if (evt.target === evt.currentTarget) {
        this.close()
      }
    })
  }
}