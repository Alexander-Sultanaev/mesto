const openButtonPofile = document.querySelector('.profile__button-edit');
const openButtonCard = document.querySelector('.profile__button-add');

const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');

//popupCard
const popupCard = document.querySelector('.popup_type_card');
const closeButtonCard = document.querySelector('.popup__button-close_card');
const formElementCard = document.querySelector('.popup__form_type_card');
const cardTitle = document.querySelector('.popup__input_type_title');
const cardSrc = document.querySelector('.popup__input_type_src');
//popupProfile
const popupProfile = document.querySelector('.popup_type_profile');
const closeButtonProfile = document.querySelector('.popup__button-close_profile');
const formElementProfile = document.querySelector('.popup__form_type_profile');
const nameInput = document.querySelector('.popup__input_type_name');
const subnameInput = document.querySelector('.popup__input_type_subname');
const profName = document.querySelector('.profile__name');
const profSubname = document.querySelector('.profile__subname');
//////1231241244

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
console.log(initialCards);
//popupProfile
function openPopupProfile(event) {
  popupProfile.classList.toggle("popup_opened")
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
  openPopupProfile();
};
//popupCard
function openPopupCard(event) {
  popupCard.classList.toggle("popup_opened")
};

function closePopupCard (event) {
  popupCard.classList.remove("popup_opened")
};


function formSubmitHandlerCard (event) {
  event.preventDefault();
  let name = cardTitle.value
  let link = cardSrc.value
  openPopupCard();
};

openButtonPofile.addEventListener('click', openPopupProfile);
closeButtonProfile.addEventListener('click', closePopupProfile);
formElementProfile.addEventListener('submit', formSubmitHandlerProfile);

openButtonCard.addEventListener('click', openPopupCard);
closeButtonCard.addEventListener('click', closePopupCard);
formElementCard.addEventListener('submit', formSubmitHandlerCard);