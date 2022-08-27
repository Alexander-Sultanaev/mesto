import '../pages/index.css';
import { initialCards, validationSettings, template, imgName, imgUrl, buttonProfileOpen, buttonCardOpen, nameInput, subnameInput, popupProfile, popupCard, cardNameInput, cardLinkInput } from "../scripts/utils/contants.js";
import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";

import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";

const addProfileValidator = new FormValidator(validationSettings, popupCard);
addProfileValidator.enableValidation();

const editProfileValidator = new FormValidator(validationSettings, popupProfile);
editProfileValidator.enableValidation();

function cardCreate(item) { 
  const cardItem = new Card(item, template, handleCardClick) 
  const cardElenent = cardItem.createCard()
  return cardElenent
}

// константа класса реализации карточки в DOM
const cardSection = new Section({ 
  items: initialCards, 
  renderer: (item) => { 
    cardSection.addItem(cardCreate(item)) 
    }, 
  },  
  '.gallery__list')

  cardSection.setItems()
const popupCardImg = new PopupWithImage({ selectorPopup: '.popup_type_image' }, imgUrl, imgName) 

function handleCardClick(name, link) {
  popupCardImg.open(name, link);
};
popupCardImg.setEventListeners()

const popupCardAdd = new PopupWithForm({  
  selectorPopup: '.popup_type_card', 
  functionPopupForm: (data) => { 
    cardSection.addItem(cardCreate({ name: data['card-name'], link: data['card-link'] }))
  } 
})

function openPopupCard() {
  popupCardAdd.open()
  cardNameInput.value = ''
  cardLinkInput.value = ''
  addProfileValidator.resetFormValidation();
}

buttonCardOpen.addEventListener('click', () => openPopupCard()); // открывает popup добавления места
popupCardAdd.setEventListeners()

const userData = new UserInfo({ name: '.profile__name', info: '.profile__subname', })
const popupProfileEdit = new PopupWithForm({
  selectorPopup: '.popup_type_profile', 
  functionPopupForm: (data) => { 
    userData.setUserInfo({ name: data['profile__name'], info: data['profile__subname'] })
}});
function openPopupProfile(){
  popupProfileEdit.open()
  const newUserData = userData.getUserInfo()
  nameInput.value = newUserData.name;
  subnameInput.value = newUserData.info;
  editProfileValidator.resetFormValidation
}
buttonProfileOpen.addEventListener('click', () => openPopupProfile());
popupProfileEdit.setEventListeners()