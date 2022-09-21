import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
    constructor({ selectorPopup, functionPopupForm: handleFormSubmit }) {
      super({ selectorPopup })
      this._handleFormSubmit = handleFormSubmit
      this._popupForm = this._popup.querySelector('.popup__form')
      this._inputList = this._popupForm.querySelectorAll('.popup__input')
      this._submitBtn = this._popupForm.querySelector('.popup__button-save')
      this._submitBtnTextContent = this._submitBtn.textContent
      
    }

    _getInputValues() {
      this._formValues = {}
      this._inputList.forEach(input => {
        this._formValues[input.name] = input.value
      })
      return this._formValues
    }

    setInputValues(data) {
      this._inputList.forEach((input) => {
        input.value = data[input.name];
      });
    }

    setEventListeners() {
      super.setEventListeners()
      this._popupForm.addEventListener('submit', (e) => {
        e.preventDefault()
        this._handleFormSubmit(this._getInputValues())
      })
    }

    close() {
      super.close()
      this._popupForm.reset()
    }

    loading(load) {
      if (load) {
        this._submitBtn.textContent = 'Сохранение...'
      } else {
        this._submitBtn.textContent = this._submitBtnTextContent
      }
    }
}