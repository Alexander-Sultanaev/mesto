export default class Card {
  constructor(elementCard, templateSelector, functionCardClick, openPopupDeleteCard, handelLikeClick, userId) {
    this._elementCardName = elementCard.name
    this._elementCardLink = elementCard.link
    this._elementCardId = elementCard._id
    this._elementCardUserId = elementCard.owner._id

    this._templateSelector = templateSelector

    this._functionCardClick = functionCardClick
    this._elementCardCountLikes = elementCard.likes
    this._openPopupDeleteCard = openPopupDeleteCard
    this._handelLikeClick = handelLikeClick

    this._userId = userId
  }

  _getTemplate() {
    this._templateCard = document.querySelector(this._templateSelector).content.querySelector('.gallery__card').cloneNode(true)
    return this._templateCard
  }

  deleteCard() {
    this._templateCard.remove()
    this._templateCard = null
  }

  isLike() {
    const isLikeUser = this._elementCardCountLikes.find(user => user._id === this._userId)
    return isLikeUser
  }


  _addEventListeners() {
    this._cardLiked.addEventListener('click', () => this._handelLikeClick(this._elementCardId))
    this._cardRemove.addEventListener('click', () => this._openPopupDeleteCard(this._elementCardId))
    this._cardImg.addEventListener('click', () => this._functionCardClick(this._elementCardName, this._elementCardLink))
  }

  createCard() {
    this._templateCard = this._getTemplate()
    this._cardLiked = this._templateCard.querySelector('.gallery__button-like')
    this._countLikes = this._templateCard.querySelector('.gallery__heart-count')//:) а было все так просто!:( 
    this._cardRemove = this._templateCard.querySelector('.gallery__button-delete')
    this._cardTitle = this._templateCard.querySelector('.gallery__title')
    this._cardImg = this._templateCard.querySelector('.gallery__image')
    
    this._cardTitle.textContent = this._elementCardName
    this._cardImg.src = this._elementCardLink
    this._cardImg.alt = this._elementCardName

    if (this._elementCardUserId === this._userId) { 
      this._cardRemove.classList.add('gallery__button-delete_visible')
    }
    this.setLikes(this._elementCardCountLikes)
    this._addEventListeners()
    
    return this._templateCard
  }
  
  addLikes() {
    if (this.isLike()) {
      this._cardLiked.classList.add('gallery__button-like_active')
    } else {
      this._cardLiked.classList.remove('gallery__button-like_active')
    }
  }
  setLikes(countLikes) {
    this._elementCardCountLikes = countLikes
    this._countLikes.textContent = this._elementCardCountLikes.length
    this.addLikes()
  }
}