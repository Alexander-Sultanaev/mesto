import { initialCards, validationSettings } from "../scripts/utils/contants.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { openPopup,closePopup, } from "../scripts/utils/utils.js";

import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js"

const buttonProfileOpen = document.querySelector('.profile__button-edit');
const buttonCardOpen = document.querySelector('.profile__button-add');
const profileName = document.querySelector('.profile__name');
const profileSubname = document.querySelector('.profile__subname');
const popupProfile = document.querySelector('.popup_type_profile');
const formElementProfile = popupProfile.querySelector('.popup__form_type_profile');
const nameInput = popupProfile.querySelector('.popup__input_type_name');
const subnameInput = popupProfile.querySelector('.popup__input_type_subname');
const cardsList = document.querySelector('.gallery__list');
const popupCard = document.querySelector('.popup_type_card');
const formElementCard = document.querySelector('.popup__form_type_card');
const cardNameInput = popupCard.querySelector('.popup__input_type_title');
const cardLinkInput = popupCard.querySelector('.popup__input_type_link');

//добавление карточек в разметку-----------------
function createCard(item) {
  const newCard = new Card(item, '.gallery__template').generateCard();
  return newCard
};

function renderCard(item){
  cardsList.prepend(item);
};

initialCards.forEach((item) => {
  const newCard = createCard(item);
  renderCard(newCard);
});
//добавляем картоки
function newElementSubmit(event) {
  event.preventDefault();
  const cardsItem = { name: cardNameInput.value, link: cardLinkInput.value };
  const newCard = createCard(cardsItem);
  renderCard(newCard, true);
  closePopup(popupCard);
};
//валидация форм-------------


const addProfileValidator = new FormValidator(validationSettings, popupCard);
addProfileValidator.enableValidation();

const editProfileValidator = new FormValidator(validationSettings, popupProfile);
editProfileValidator.enableValidation();
//работа с попапами-------------------------
//попап профиля
function openPopupProfile() {
  nameInput.value = profileName.textContent;
  subnameInput.value = profileSubname.textContent;
  editProfileValidator.resetFormValidation();
  openPopup(popupProfile);
};
//открытие попапа карточки
function openPopupCard() {
  cardNameInput.value = null;
  cardLinkInput.value = null;
  addProfileValidator.resetFormValidation();
  openPopup(popupCard);
};

function formSubmitHandlerProfile(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileSubname.textContent = subnameInput.value;
  closePopup(popupProfile);
};
//слушатели событий ------------------------------
buttonCardOpen.addEventListener('click',openPopupCard);
buttonProfileOpen.addEventListener('click', openPopupProfile);
formElementCard.addEventListener('submit', newElementSubmit);
formElementProfile.addEventListener('submit', formSubmitHandlerProfile);