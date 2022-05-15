const openButton = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__button-close');
const formElement = popup.querySelector('.popup__form');
const nameInput = popup.querySelector('.popup__input_type_name');
const subnameInput = popup.querySelector('.popup__input_type_subname');
const profName = document.querySelector('.profile__name');
const profSubname = document.querySelector('.profile__subname');
const popupContainer = popup.querySelector('.popup__container');

function togglePopup(event) {
  popup.classList.toggle("popup_opened")
};

function closePopup (event){
  popup.classList.remove("popup_opened")
  nameInput.value = profName.textContent;
  subnameInput.value = profSubname.textContent;
};

function formSubmitHandler (event) {
  event.preventDefault();
  profName.textContent = nameInput.value;
  profSubname.textContent = subnameInput.value;
  togglePopup();
};

openButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler); 