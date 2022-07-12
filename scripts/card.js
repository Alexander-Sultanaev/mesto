import {openPopup} from "./index.js"
const popupCard = document.querySelector('.popup_type_image');
const popupImage = popupCard.querySelector('.popup__image');
const popupCaption = popupCard.querySelector('.popup__caption');

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  };

  _getTemplate() {
    const cardTemplate = document.querySelector(this._cardSelector).content.querySelector(".gallery__card").cloneNode(true);
    return cardTemplate;
  };

  generateCard() {
    this._element = this._getTemplate();
    this._setEventlisteners();
    this._elementImage = this._element.querySelector(".gallery__image");
    this._element.querySelector(".gallery__title").textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    return this._element;
  };

  _setEventlisteners() {
    this._element.querySelector(".gallery__button-like")
      .addEventListener("click", () => {
        this._likeCard();
      });
    this._element.querySelector(".gallery__button-delete")
      .addEventListener("click", () => {
        this._deleteCard();
      });
    this._element.querySelector(".gallery__image")
      .addEventListener("click", () => {
        this._openImagePopup();
      });
  };

  _likeCard() {
    this._element.querySelector(".gallery__button-like").classList.toggle("gallery__button-like_active")
  };

  _deleteCard() {
    this._element.remove()
  };

  _openImagePopup() {
    popupImage.src = this._link;
    popupCaption.textContent = this._name;
    popupCaption.alt = this._name;
    openPopup(popupImage);
  };
};