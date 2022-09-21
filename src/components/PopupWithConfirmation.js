import { Popup } from './Popup.js'

export default class PopupWithConfirmation extends Popup {
  constructor({ selectorPopup }) {
    super({ selectorPopup });
    this._popupForm = this._popup.querySelector('.popup__form')
  }

  submitCallback(removing) {
    this._handleSubmit = removing;
  }


  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('click', (e) => {
      e.preventDefault();
      this._handleSubmit();
    });
  }
}