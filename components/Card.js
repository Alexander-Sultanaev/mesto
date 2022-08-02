export default class Card {
  constructor({ data, handleCardClick }, cardSelector) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".gallery__card")
      .cloneNode(true);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector(".gallery__image");
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._element.querySelector(".gallery__title").textContent = this._name;
    this._setEventlisteners();

    return this._element;
  }

  _likeCard() {
    this._element.querySelector(".gallery__button-like").classList.toggle("gallery__button-like_active");
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventlisteners() {
    this._element.querySelector(".gallery__button-like").addEventListener("click", () => {
        this._likeCard();
      });
    this._element.querySelector(".gallery__button-delete").addEventListener("click", () => {
        this._deleteCard();
      });
    this._element.querySelector(".gallery__image").addEventListener("click", () => {
      this._handleCardClick ({
        link: this._link,
        name: this._name
      });
      });
  }
}