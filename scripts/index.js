import initialCards from "./initial-cards.js";
import { Card } from "./card.js";
import { FormValidator } from "./formValidator.js";


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
//открытие попапа
export function openPopup(popup) {
  popup.addEventListener("mousedown", closePopupWithOverlay);
  document.addEventListener("keydown", closePopupWithEscape);
  popup.classList.add("popup_opened");
};
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
//Функция удаления класса открытия попапа
function closePopup(popup) {
  popup.removeEventListener("mousedown", closePopupWithOverlay);
  document.removeEventListener("keydown", closePopupWithEscape);
  popup.classList.remove("popup_opened");
};
function closeOpenedPopup() {
  const openedPopup = document.querySelector(".popup_opened");
  closePopup(openedPopup);
};
//Функция закрытия попапов кликом на оверлей
function closePopupWithOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closeOpenedPopup();
  }
};
//Функция закрытия попапов на клавишу Esc
function closePopupWithEscape(evt) {
  if (evt.key === "Escape") {
    closeOpenedPopup();
  }
};
//отпроаление данных на страницу
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
