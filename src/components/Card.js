export default class Card {
  constructor(elementCard, templateCard, functionCardClick, openPopupDeleteCard, handelLikeClick, userId) {
    this._elementCardName = elementCard.name
    this._elementCardLink = elementCard.link
    this._elementCardId = elementCard._id
    this._elementCardUserId = elementCard.owner._id

    this._templateCard = templateCard

    this._functionCardClick = functionCardClick
    this._elementCardCountLikes = elementCard.likes
    this._openPopupDeleteCard = openPopupDeleteCard
    this._handelLikeClick = handelLikeClick

    this._userId = userId
  }

  _createView() {
    this._templateView = this._templateCard.querySelector('.gallery__card').cloneNode(true)
  }

  deleteCard() {
    this._templateView.remove()
    this._templateView = null
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
    this._createView()
    this.setLikes(this._elementCardCountLikes , this._cardLiked)
    
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
  
  addLikes() {
    this._cardLiked = this._templateView.querySelector('.gallery__button-like')//не получается обьявить его раньше, попробовал разные методы
    if (this.isLike()) {
      this._cardLiked.classList.add('gallery__button-like_active')
    } else {
      this._cardLiked.classList.remove('gallery__button-like_active')
    }
  }
  setLikes(countLikes) {
    this._elementCardCountLikes = countLikes
    this._countLikes = this._templateView.querySelector('.gallery__heart-count')
    this._countLikes.textContent = this._elementCardCountLikes.length
    this.addLikes()
  }
}