const buttonPopupClose = document.querySelectorAll('.popup__button-close');
export function openPopup(popup) {
  popup.classList.add("popup_opened");
};
export function closePopupWithEscape(evt) {
  if (evt.key === "Escape") {
    closeOpenedPopup();
  }
};
export function closePopupWithOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closeOpenedPopup();
  }
};
export function closeOpenedPopup() {
  const openedPopup = document.querySelector(".popup_opened");
  closePopup(openedPopup);
};
export function closePopup(popup) {
  popup.classList.remove("popup_opened");
};
buttonPopupClose.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
  popup.addEventListener("mousedown", closePopupWithOverlay);
  document.addEventListener("keydown", closePopupWithEscape);
});