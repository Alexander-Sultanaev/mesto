export function openPopup(popup) {
  popup.addEventListener("mousedown", closePopupWithOverlay);
  document.addEventListener("keydown", closePopupWithEscape);
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
  popup.removeEventListener("mousedown", closePopupWithOverlay);
  document.removeEventListener("keydown", closePopupWithEscape);
  popup.classList.remove("popup_opened");
};