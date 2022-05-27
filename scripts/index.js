const openButtonPofile = document.querySelector('.profile__button-edit');
const profName = document.querySelector('.profile__name');
const profSubname = document.querySelector('.profile__subname');

const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');

//popupCard

//popupProfile
const popupProfile = document.querySelector('.popup_type_profile');
const closeButtonProfile = popupProfile.querySelector('.popup__button-close_profile');
const formElementProfile = popupProfile.querySelector('.popup__form_type_profile');
const nameInput = popupProfile.querySelector('.popup__input_type_name');
const subnameInput = popupProfile.querySelector('.popup__input_type_subname');


//4Проектная работа
function openPopupProfile(event) {
  popupProfile.classList.add("popup_opened")
  nameInput.value = profName.textContent;
  subnameInput.value = profSubname.textContent;
};

function closePopupProfile (event) {
  popupProfile.classList.remove("popup_opened")
};

function formSubmitHandlerProfile (event) {
  event.preventDefault();
  profName.textContent = nameInput.value;
  profSubname.textContent = subnameInput.value;
  closePopupProfile();
};

openButtonPofile.addEventListener('click', openPopupProfile);
closeButtonProfile.addEventListener('click', closePopupProfile);
formElementProfile.addEventListener('submit', formSubmitHandlerProfile);
//Конец 4 работы.

//Отображение карточек на странице
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];



const openButtonCard = document.querySelector('.profile__button-add');
const cardsList = document.querySelector('.gallery__list');
const popupCard = document.querySelector('.popup_type_card');
const closeButtonCard = popupCard.querySelector('.popup__button-close_card');
const formButtonSubmit = document.querySelector('.popup__form_type_card');
//открываем попап
function openPopupCard (event) {
  popupCard.classList.add("popup_opened");
};
//закрываем попап
function closePopupCard (event) {
  popupCard.classList.remove("popup_opened");
};

///////////////// создаем карточки через js
const elementTemplate = document.querySelector('.gallery__template').content;

initialCards.forEach((element) => {
  cardsList.prepend(createElement(element));
});

function createElement (element) {
  const newElement = elementTemplate.querySelector('.gallery__card').cloneNode(true);
  const elementTitle = newElement.querySelector('.gallery__title');
  elementTitle.textContent = element.name;
  const elementImage = newElement.querySelector('.gallery__image');
  elementImage.src = element.link;
  elementImage.alt = element.name;
  return newElement;
};

//кнопака лайка


//добавляем картоки
function newElementSubmit(event) {
  event.preventDefault();
  const cardNameInput = document.querySelector('.popup__input_type_title');
  const cardLinkInput = popupCard.querySelector('.popup__input_type_link'); 
  const newCard = { name: cardNameInput.value, link: cardLinkInput.value };
  cardsList.prepend(createElement(newCard));
  cardNameInput.value = null;
  cardLinkInput.value = null;
};



openButtonCard.addEventListener('click', openPopupCard);
closeButtonCard.addEventListener('click', closePopupCard);
formButtonSubmit.addEventListener('submit', newElementSubmit);
// отображение карточек на странице