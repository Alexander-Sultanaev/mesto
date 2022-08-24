export default class Card {
  constructor(elementCard, templateCard, functionCardClick) {
    this._elementCardName = elementCard.name
    this._elementCardLink = elementCard.link
    this._templateCard = templateCard.querySelector('.gallery__card')
    this._functionCardClick = functionCardClick
  }

  _createView() {
    this._templateView = this._templateCard.cloneNode(true) //склонировали то что внутри карточки
  }

  _removeItem() {
    this._templateView.remove()
  }

  _isLike(e) {
    this._cardLikedActive = 'gallery__button-like_active'
    e.target.classList.toggle(this._cardLikedActive)
  }

  _addEventListeners() {
    this._cardRemove = this._templateView.querySelector('.gallery__button-delete')
    this._cardLiked = this._templateView.querySelector('.gallery__button-like')
    this._cardRemove.addEventListener('click', () => this._removeItem())
    this._cardLiked.addEventListener('click', (e) => this._isLike(e))
    this._cardImg.addEventListener('click', () => this._functionCardClick(this._elementCardName, this._elementCardLink))
  }

  createCard() {
    this._createView()
    this._cardTitle = this._templateView.querySelector('.gallery__title')
    this._cardImg = this._templateView.querySelector('.gallery__image')
    this._cardTitle.textContent = this._elementCardName
    this._cardImg.src = this._elementCardLink
    this._cardImg.alt = this._elementCardName
    this._addEventListeners()
    return this._templateView
  }
}