import Popup from "./Popup.js";
export default class PopupWithForm extends Popup{
  constructor(selectorPopup, formSubmit){
    super(selectorPopup);
    this._formSubmit = formSubmit;
    this._formPopup = this._selectorPopup.querySelector('.popup__form');
    this._inputPopup = this._formPopup.querySelectorAll('.popup__input');
  }

  _getInputValues(){
    this._values = {}
    this._inputPopup.forEach((input)=>{
      this._values[input.name] = input.value
    });
    return this._values
  }

  setInputs(item) {
    this._inputList.forEach((input) => {
      input.value = item[input.name];
    });
  }

  setEventListeners(){
    super.setEventListeners();
    this._formPopup.addEventListener('submit', (event) =>{
      event.preventDefault();
      this._formSubmit(this._getInputValues());
    })
  }
  
  close(){
    super.close();
    this._formPopup.reset();
  }  
}