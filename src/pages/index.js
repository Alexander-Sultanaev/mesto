import '../pages/index.css';
import { validationSettings, template, buttonProfileOpen, 
buttonCardOpen, buttonAvatarOpen, popupAvatar, popupProfile,
popupCard } from "../scripts/contants.js";
import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Api } from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';

const cardPopupValidation = new FormValidator(validationSettings, popupCard);
cardPopupValidation.enableValidation();

const profilePopupValidation = new FormValidator(validationSettings, popupProfile);
profilePopupValidation.enableValidation();

const avatarPopupValidation = new FormValidator(validationSettings, popupAvatar);
avatarPopupValidation.enableValidation();
/////
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-50',
  headers: {
    authorization: '1ab05af1-5f6c-42a4-8598-6f7702cd2129',
    'Content-type': 'application/json'
  }
})
let userId
Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cards, user]) => {
    userId = user._id;
    userData.setUserInfo(user);
    cardSection.renderItems(cards)
  })
  .catch((err) =>{
    console.log(`Ошибка: ${err}`)
});

const userData = new UserInfo({ name: '.profile__name', about: '.profile__subname', avatar: '.profile__image' })

const popupProfileEdit = new PopupWithForm({
  selectorPopup: '.popup_type_profile', 
  functionPopupForm: (data) => {
    popupProfileEdit.loading(true)
    api.setUserInfo(data)
    .then((data) => {
      userData.setUserInfo(data)
      popupProfileEdit.close()
    })
    .catch((err) =>{
      console.log(`Ошибка: ${err}`)
    })
    .finally(() =>{
      popupProfileEdit.loading(false)
    })
  }
});

function openPopupProfile(){
  popupProfileEdit.open()
  const newUserData = userData.getUserInfo()
  popupProfileEdit.setInputValues(newUserData);
  profilePopupValidation.resetFormValidation();
}
buttonProfileOpen.addEventListener('click', () => openPopupProfile());
popupProfileEdit.setEventListeners()

const popupAvatarEdit = new PopupWithForm({
  selectorPopup: '.popup_type_avatar',
  functionPopupForm: (data) => {
    popupAvatarEdit.loading(true);
    api.editUserAvatar(data)
      .then((data) => {
        userData.setUserInfo(data);
        popupAvatarEdit.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        popupAvatarEdit.loading(false);
      });
  }
})
function openPopupAvatar(){
  popupAvatarEdit.open()
  avatarPopupValidation.resetFormValidation()
}
buttonAvatarOpen.addEventListener('click', () => openPopupAvatar());
popupAvatarEdit.setEventListeners();
///////

// константа класса реализации карточки в DOM
const cardSection = new Section({ 
  renderer: (card) => { 
    cardSection.addItemOnServer(cardCreate(card))
    }, 
  },  
  '.gallery__list')

const popupDeletion = new PopupWithConfirmation({selectorPopup: '.popup_type_delete-card'})

  function cardCreate(item) { 
    const cardItem = new Card(
      item, 
      template, 
      handleCardClick,
      (cardId) => {
        popupDeletion.open()
        popupDeletion.submitCallback(() => {
          api.deleteCard(cardId)
            .then(() => {
              cardItem.deleteCard()
              popupDeletion.close()
            })
            .catch(err => console.log(err))
        })
      },
      (cardId) => {
        if (cardItem.isLike()) {
          api.deleteLike(cardId)
          .then((res) => {
            cardItem.setLikes(res.likes)
          })
          .catch(err => console.log(err))
        } else {
          api.likeCard(cardId)
          .then((res) => {
            cardItem.setLikes(res.likes)
          })
          .catch(err => console.log(err))
        }
      },
      userId,
      )
    const cardElement = cardItem.createCard()
    return cardElement
  }
const popupCardImg = new PopupWithImage({ selectorPopup: '.popup_type_image' }) 

function handleCardClick(name, link) {
  popupCardImg.open(name, link);
};
popupCardImg.setEventListeners()
//////////
const popupCardAdd = new PopupWithForm({  
  selectorPopup: '.popup_type_card', 
  functionPopupForm: (data) => { 
    popupCardAdd.loading(true);
    api.addCar(data)
      .then((data) =>{
        cardSection.addItem(cardCreate(data))
        popupCardAdd.close()
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
      .finally(() => {
        popupCardAdd.loading(false)
      })
  } 
})
function openPopupCard() {
  popupCardAdd.open()
  cardPopupValidation.resetFormValidation();
}
buttonCardOpen.addEventListener('click', () => openPopupCard()); // открывает popup добавления места
popupCardAdd.setEventListeners()
popupDeletion.setEventListeners()
//////////
