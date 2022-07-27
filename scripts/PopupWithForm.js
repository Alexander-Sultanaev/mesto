import Popup from "./Popup.js";
export default class PopupWithForm extends Popup{
  constructor(selectorPopup, formSubmit){
    super(selectorPopup);
    this._formSubmit = formSubmit;
    this._formPopup = this._selectorPopup.querySelector('popup__form');
    this._inputPopup = this._formPopup.querySelector('popup__input');
  }
  _getInputValues(){
    
  }
}