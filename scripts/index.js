const openButtonPofile = document.querySelector('.profile__button-edit');
const openButtonCard = document.querySelector('.profile__button-add');
const closeButtonPopup = document.querySelectorAll('.popup__button-close');

const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');

const profName = document.querySelector('.profile__name');
const profSubname = document.querySelector('.profile__subname');
const popupProfile = document.querySelector('.popup_type_profile');
const formElementProfile = popupProfile.querySelector('.popup__form_type_profile');
const nameInput = popupProfile.querySelector('.popup__input_type_name');
const subnameInput = popupProfile.querySelector('.popup__input_type_subname');

const cardsList = document.querySelector('.gallery__list');
const popupCard = document.querySelector('.popup_type_card');
const formButtonSubmit = document.querySelector('.popup__form_type_card');
const popupImage = document.querySelector('.popup_type_image');

const elementTemplate = document.querySelector('.gallery__template').content;

//открытие попапа
function openPopup(event) {
  event.classList.add("popup_opened")
 };
//попап профиля
function openPopupProfile() {
  nameInput.value = profName.textContent;
  subnameInput.value = profSubname.textContent;
  openPopup(popupProfile);
};
//отпроаление данных на страницу
function formSubmitHandlerProfile(event) {
  event.preventDefault();
  profName.textContent = nameInput.value;
  profSubname.textContent = subnameInput.value;
  closePopup(popupProfile);
};
//открытие попапа карточки
function openPopupCard() {
  openPopup(popupCard);
};
//закрытие всех попапов 
closeButtonPopup.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

function closePopup(popup) {
  popup.classList.remove("popup_opened")
};


//отображение карточек
initialCards.forEach((element) => {
  cardsList.prepend(createElement(element));
});

function createElement(element) {
  const newElement = elementTemplate.querySelector('.gallery__card').cloneNode(true);
  const elementTitle = newElement.querySelector('.gallery__title');
  elementTitle.textContent = element.name;
  const elementImage = newElement.querySelector('.gallery__image');
  elementImage.src = element.link;
  elementImage.alt = element.name;
  const buttonLike = newElement.querySelector('.gallery__button-like');
  buttonLike.addEventListener('click', likeElement);
  const buttonDelete = newElement.querySelector('.gallery__button-delete');
  buttonDelete.addEventListener('click', deleteElement);
  const openImage = newElement.querySelector('.gallery__image');
  openImage.addEventListener('click', openPopupImage);
  return newElement;
};

//кнопака лайка
function likeElement(event) {
  event.target.classList.toggle("gallery__button-like_active");
};

//кнопка дэлит
function deleteElement(event) {
  event.target.closest('.gallery__card').remove();
};

//открытия картинки
function openPopupImage(event) {
  const increasedImage = popupImage.querySelector('.popup__image');
  increasedImage.src = event.target.src;
  increasedImage.alt = event.target.alt;
  const increasedElementCaption = popupImage.querySelector('.popup__caption');
  increasedElementCaption.textContent = event.target.alt;
  openPopup(popupImage);
};



//добавляем картоки
function newElementSubmit(event) {
  event.preventDefault();
  const cardNameInput = popupCard.querySelector('.popup__input_type_title');
  const cardLinkInput = popupCard.querySelector('.popup__input_type_link');
  const newCard = { name: cardNameInput.value, link: cardLinkInput.value };
  cardsList.prepend(createElement(newCard));
  cardNameInput.value = null;
  cardLinkInput.value = null;
  closePopup(popupCard);
};


//слушатели событий
openButtonCard.addEventListener('click',openPopupCard);
openButtonPofile.addEventListener('click', openPopupProfile);
formButtonSubmit.addEventListener('submit', newElementSubmit);
formElementProfile.addEventListener('submit', formSubmitHandlerProfile);
