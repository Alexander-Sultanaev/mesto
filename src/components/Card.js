export default class Card {
  constructor(elementCard, templateCard, functionCardClick, openPopupDeleteCard, handelLikeClick, userId) {
    this._elementCardName = elementCard.name
    this._elementCardLink = elementCard.link
    this._templateCard = templateCard.querySelector('.gallery__card')
    this._functionCardClick = functionCardClick
    this._elementCardCountLikes = elementCard.likes
    this._elementCardId = elementCard._id
    this._elementCardUserId = elementCard.owner._id
    this._userId = userId
    this._openPopupDeleteCard = openPopupDeleteCard
    this._handelLikeClick = handelLikeClick
  }

  _createView() {
    this._templateView = this._templateCard.cloneNode(true) //склонировали то что внутри карточки
  }

  deleteCard() {
    this._templateView.remove()
    this._templateView = null
  }

  isLike() {
    const isLikeUser = this._elementCardCountLikes.find(user => user._id === this._userId)
    return isLikeUser
  }

  setLikes(countLikes) {
    this._cardLiked = this._templateView.querySelector('.gallery__button-like')
    this._elementCardCountLikes = countLikes
    this._countLikes = this._templateView.querySelector('.gallery__heart-count')
    this._countLikes.textContent = this._elementCardCountLikes.length

    this._cardLikedActive = 'gallery__button-like_active'
    if (this.isLike()) {
      this._cardLiked.classList.add(this._cardLikedActive)
    } else {
      this._cardLiked.classList.remove(this._cardLikedActive)
    }
  }

  _addEventListeners() {
    this._cardLiked.addEventListener('click', () => this._handelLikeClick(this._elementCardId))
    this._cardRemove.addEventListener('click', () => this._openPopupDeleteCard(this._elementCardId))
    this._cardImg.addEventListener('click', () => this._functionCardClick(this._elementCardName, this._elementCardLink))
  }

  createCard() {
    this._createView()
    this.setLikes(this._elementCardCountLikes)

    this._cardRemove = this._templateView.querySelector('.gallery__button-delete')
    this._cardTitle = this._templateView.querySelector('.gallery__title')
    this._cardImg = this._templateView.querySelector('.gallery__image')

    this._cardTitle.textContent = this._elementCardName
    this._cardImg.src = this._elementCardLink
    this._cardImg.alt = this._elementCardName

    if (this._elementCardUserId === this._userId) { 
      this._cardRemove.classList.add('gallery__button-delete_visible')
    }

    this._addEventListeners()
    return this._templateView
  }
}