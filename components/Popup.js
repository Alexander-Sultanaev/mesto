export default class Popup {
  constructor(selectorPopup){
    this._selectorPopup = document.querySelector(selectorPopup)
    this._buttonClose = this._selectorPopup.querySelector('.popup__button-close');
    this._escClose = this._handleEscClose.bind(this);
  }

  open(){
    this._selectorPopup.classList.add('popup_opened');
    window.addEventListener("keydown", this._escClose );
  }

  close(){
    this._selectorPopup.classList.remove("popup_opened");
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
    this._selectorPopup.addEventListener("mousedown", (evt) =>{
      if (evt.target === evt.currentTarget) {
        this.close()
      }
    })
  }
}