import { popups } from "./contants.js";
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupWithEscape);
};

export function closePopupWithEscape(evt) {
  if (evt.key === "Escape") {
    closeOpenedPopup();
  }
};

export function closeOpenedPopup() {
  const openedPopup = document.querySelector(".popup_opened");
  closePopup(openedPopup);
};

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupWithEscape);
};

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__button-close')) {
      closePopup(popup)
    }
  })
});