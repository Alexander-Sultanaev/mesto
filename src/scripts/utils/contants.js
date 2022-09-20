export const popups = document.querySelectorAll('.popup')
export const popupOpenImage = document.querySelector('.popup_type_image');
export const popupImage = popupOpenImage.querySelector('.popup__image');
export const popupCaption = popupOpenImage.querySelector('.popup__caption');

export const buttonProfileOpen = document.querySelector('.profile__button-edit');
export const buttonCardOpen = document.querySelector('.profile__button-add');
export const buttonAvatarOpen = document.querySelector('.profile__image');

export const popupCard = document.querySelector('.popup_type_card');
export const cardNameInput = popupCard.querySelector('.popup__input_type_title');
export const cardLinkInput = popupCard.querySelector('.popup__input_type_link');

export const template = document.querySelector('.gallery__template').content;
export const imgUrl = document.querySelector('.popup__image');
export const imgName = document.querySelector('.popup__caption');

export const popupProfile = document.querySelector('.popup_type_profile');
export const nameInput = popupProfile.querySelector('.popup__input_type_name');
export const subnameInput = popupProfile.querySelector('.popup__input_type_subname');

export const popupAvatar = document.querySelector('.popup_type_avatar');
export const avatar = document.querySelector('.profile__image');

export const popupDeleteCard = document.querySelector('.popup_type_delete-card');

export const initialCards = [
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

export const validationSettings  = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};