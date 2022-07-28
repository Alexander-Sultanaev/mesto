import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(selectorPopup){
    super(selectorPopup);
    this._popupImage = this._selectorPopup.querySelector('.popup__image');
    this._popupCaption = this._selectorPopup.querySelector('.popup__caption');
  }
  open({ name, link }){
    this._popupImage.setAttribute('src', link);
    this._popupImage.setAttribute('alt', name);
    this._popupCaption.textContent = name;
    super.open();
  }
}