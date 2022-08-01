import { initialCards, validationSettings } from "../scripts/utils/contants.js";
import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";


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
const popupCard = document.querySelector('.popup_type_card');
const formElementCard = document.querySelector('.popup__form_type_card');
const cardNameInput = popupCard.querySelector('.popup__input_type_title');
const cardLinkInput = popupCard.querySelector('.popup__input_type_link');


const userInfo = new UserInfo({
  name: profileName,
  subname: profileSubname
});

const сardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const newCard = createCard(item);
    сardList.addItem(newCard);
  }
}, '.gallery__list');
сardList.renderer();

function createCard(item) {
  const newCard = new Card(item, '.gallery__template').generateCard();
  return newCard
};

const bigImagePopup = new PopupWithImage("#openimage");
function bigImage({ link, name }) {
  bigImagePopup.open(
    {name,link}
  );
};
bigImagePopup.setEventListeners();

const addProfileValidator = new FormValidator(validationSettings, popupCard);
addProfileValidator.enableValidation();

const editProfileValidator = new FormValidator(validationSettings, popupProfile);
editProfileValidator.enableValidation();


/*openImagePopup() {
  popupImage.src = this._link;
  popupImage.alt = this._name;
  popupCaption.textContent = this._name;
  openPopup(popupOpenImage);
};*/
/*
//добавляем картоки
function newElementSubmit(event) {
  event.preventDefault();
  const cardsItem = { name: cardNameInput.value, link: cardLinkInput.value };
  const newCard = createCard(cardsItem);
  renderCard(newCard, true);
  closePopup(popupCard);
};
//валидация форм-------------



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
formElementProfile.addEventListener('submit', formSubmitHandlerProfile);*/