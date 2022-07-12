import initialCards from "./utils/initial-cards.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { openPopup,closePopup } from "./utils/utils.js";

const openButtonPofile = document.querySelector('.profile__button-edit');
const openButtonCard = document.querySelector('.profile__button-add');
const closeButtonPopup = document.querySelectorAll('.popup__button-close');

const profName = document.querySelector('.profile__name');
const profSubname = document.querySelector('.profile__subname');
const popupProfile = document.querySelector('.popup_type_profile');
const formElementProfile = popupProfile.querySelector('.popup__form_type_profile');
const nameInput = popupProfile.querySelector('.popup__input_type_name');
const subnameInput = popupProfile.querySelector('.popup__input_type_subname');
const cardsList = document.querySelector('.gallery__list');
const popupCard = document.querySelector('.popup_type_card');
const formButtonSubmit = document.querySelector('.popup__form_type_card');
const cardNameInput = popupCard.querySelector('.popup__input_type_title');
const cardLinkInput = popupCard.querySelector('.popup__input_type_link');

//добавление карточек в разметку-----------------
function createCards(item) {
  const card = new Card(item, ".gallery__template");
  const cardElement = card.generateCard();
  cardsList.prepend(cardElement);
};

initialCards.forEach((element) => {
  createCards(element);
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
  nameInput.value = profName.textContent;
  subnameInput.value = profSubname.textContent;
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
closeButtonPopup.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

function formSubmitHandlerProfile(event) {
  event.preventDefault();
  profName.textContent = nameInput.value;
  profSubname.textContent = subnameInput.value;
  closePopup(popupProfile);
};
//добавляем картоки
function newElementSubmit(event) {
  event.preventDefault();
  const newCard = { name: cardNameInput.value, link: cardLinkInput.value };
  createCards(newCard);
  closePopup(popupCard);
};
//слушатели событий ------------------------------
openButtonCard.addEventListener('click',openPopupCard);
openButtonPofile.addEventListener('click', openPopupProfile);
formButtonSubmit.addEventListener('submit', newElementSubmit);
formElementProfile.addEventListener('submit', formSubmitHandlerProfile);
