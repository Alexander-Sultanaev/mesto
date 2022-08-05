import Popup from "./Popup.js";
export default class PopupWithForm extends Popup{
  constructor(selectorPopup, handleFormSubmit){
    super(selectorPopup);
    this._handleFormSubmit = handleFormSubmit;
    this._formPopup = this._Popup.querySelector('.popup__form');
    this._inputPopup = this._formPopup.querySelectorAll('.popup__input');
  }

  _getInputValues(){
    this._formValues = {}
    this._inputPopup.forEach((input)=>{
      this._formValues[input.name] = input.value
    });
    return this._formValues
  }


  setEventListeners(){
    super.setEventListeners();
    this._formPopup.addEventListener('submit', (event) =>{
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    })
  }
  
  close(){
    super.close();
    this._formPopup.reset();
  }  
}