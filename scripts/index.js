const openButton = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__button-close');
const formElement = popup.querySelector('.popup__form');
const nameInput = popup.querySelector('.popup__input_type_name');
const subnameInput = popup.querySelector('.popup__input_type_subname');
const profName = document.querySelector('.profile__name');
const profSubname = document.querySelector('.profile__subname');
const popupContainer = popup.querySelector('.popup__container');

const toglePopup = function(event) {
  popup.classList.toggle("popup_opened")
  nameInput.value = profName.textContent;
  subnameInput.value = profSubname.textContent;
};

/*popup.addEventListener('click', function(event) {
  if(event.target === event.currentTarget)
    toglePopup();
}); нашел только способ через добовлние блока overlay на всю ширину экрана!(не знаю на сколько это правильно )*/

function formSubmitHandler (event) {
  event.preventDefault();
  profName.textContent = nameInput.value;
  profSubname.textContent = subnameInput.value;
  toglePopup();
};

openButton.addEventListener('click', toglePopup);
closeButton.addEventListener('click', toglePopup);
formElement.addEventListener('submit', formSubmitHandler); 