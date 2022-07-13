import { initialCards } from "../scripts/utils/contants.js";
import { Card } from "../sscripts/Card.js";
import { FormValidator } from "../scripts/FormValidator.js";
import { openPopup,closePopup, } from "../scripts/utils/utils.js";

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
  const card = new Card(item, ".gallery__template");
  const cardElement = card.generateCard();
  renderCard(cardElement)
};

function renderCard(cardElement){
  cardsList.prepend(cardElement);
};

initialCards.forEach((element) => {
  createCard(element);
});
//валидация форм-------------
const validationSettings  = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

const addProfileValidator = new FormValidator(validationSettings, popupCard);
addProfileValidator.enableValidation();

const editProfileValidator = new FormValidator(validationSettings, popupProfile);
editProfileValidator.enableValidation();

//работа с попапами-------------------------

//попап профиля
function openPopupProfile() {
  nameInput.value = profileName.textContent;
  subnameInput.value = profileSubname.textContent;
  editProfileValidator.deleteInputError();
  openPopup(popupProfile);
};
//открытие попапа карточки
function openPopupCard() {
  cardNameInput.value = null;
  cardLinkInput.value = null;
  addProfileValidator.deleteInputError();
  openPopup(popupCard);
};
//закрытие всех попапов 


function formSubmitHandlerProfile(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileSubname.textContent = subnameInput.value;
  closePopup(popupProfile);
};
//добавляем картоки
function newElementSubmit(event) {
  event.preventDefault();
  const newCard = { name: cardNameInput.value, link: cardLinkInput.value };
  createCard(newCard);
  closePopup(popupCard);
};
//слушатели событий ------------------------------
buttonCardOpen.addEventListener('click',openPopupCard);
buttonProfileOpen.addEventListener('click', openPopupProfile);
formElementCard.addEventListener('submit', newElementSubmit);
formElementProfile.addEventListener('submit', formSubmitHandlerProfile);