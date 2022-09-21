import { Popup } from '../components/Popup.js'

export class PopupWithImage extends Popup {
    constructor(selectorPopup) {
      super(selectorPopup)
      this._imgUrl = this._popup.querySelector('.popup__image')
      this._imgName = this._popup.querySelector('.popup__caption')
    }

    open(name, link) {
      this._imgUrl.src = link;
      this._imgUrl.alt = name;
      this._imgName.textContent = name;
      super.open()
    }
}