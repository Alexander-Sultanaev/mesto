const setup = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

const enableValidation = (setup) => {
  const formList = Array.from(document.querySelectorAll(setup.formSelector));
  formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
          evt.preventDefault();
      });
      setEventListeners(formElement, setup);
  });
};
//Добавляем обработчики полям
const setEventListeners = (formElement, setup) => {
  const inputList = Array.from(formElement.querySelectorAll(setup.inputSelector));
  const buttonElement = formElement.querySelector(setup.submitButtonSelector);
  inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
          isValid(formElement, inputElement, setup);
          toggleButtonState(inputList, buttonElement, setup);
      });
  });
};
//Состояние кнопки при валидации полей
const toggleButtonState = (inputList, buttonElement, setup) => {
  if (hasInvalidInput(inputList)) {
      setSubmitButtonInactive(buttonElement, setup);
  } else {
      setSubmitButtonActive(buttonElement, setup);
  }
};
// Активное состояние кнопки
const setSubmitButtonActive = (buttonElement, setup) => {
  buttonElement.classList.remove(setup.inactiveButtonClass);
  buttonElement.removeAttribute('disabled');
};
// Неактивное состояние кнопки
const setSubmitButtonInactive = (buttonElement, setup) => {
  buttonElement.classList.add(setup.inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
};
//Проверка невалидных полей в форме
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
  })
};

const isValid = (formElement, inputElement, setup) => {
  if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, setup);
  } else {
      hideInputError(formElement, inputElement, setup);
  }
};
// Функция показывает ошибки
const showInputError = (formElement, inputElement, errorMessage, setup) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(setup.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(setup.errorClass);
};
// Функция прячет ошибки
const hideInputError = (formElement, inputElement, setup) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(setup.inputErrorClass);
  errorElement.classList.remove(setup.errorClass);
  errorElement.textContent = '';
};
// Функция сброса ошибок 
const deleteErrors = (formElement, setup) => {
  const inputList = Array.from(formElement.querySelectorAll(setup.inputSelector));
  const buttonElement = formElement.querySelector(setup.submitButtonSelector);
  inputList.forEach((inputElement) => {
      hideInputError(formElement, inputElement,setup);
  })
  toggleButtonState(inputList, buttonElement,setup);
};

enableValidation(setup);



