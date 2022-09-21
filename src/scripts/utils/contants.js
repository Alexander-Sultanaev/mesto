export const popups = document.querySelectorAll('.popup')
export const popupOpenImage = document.querySelector('.popup_type_image');
export const popupImage = popupOpenImage.querySelector('.popup__image');
export const popupCaption = popupOpenImage.querySelector('.popup__caption');
export const buttonProfileOpen = document.querySelector('.profile__button-edit');
export const buttonCardOpen = document.querySelector('.profile__button-add');
export const buttonAvatarOpen = document.querySelector('.profile__image');
export const popupCard = document.querySelector('.popup_type_card');
export const popupProfile = document.querySelector('.popup_type_profile');
export const popupAvatar = document.querySelector('.popup_type_avatar');
export const avatar = document.querySelector('.profile__image');
export const popupDeletion = document.querySelector('.popup_type_delete-card');
export const template = document.querySelector('.gallery__template').content;
export const validationSettings  = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};