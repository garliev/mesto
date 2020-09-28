let popup = document.querySelector(".popup");
let popupOpenButton = document.querySelector(".profile__edit-button");
let popupCloseButton = document.querySelector(".popup__close-icon");
let popupSaveButton = document.querySelector(".popup__button");
// Находим поля формы в DOM
let nameInput = document.querySelector(".popup__name-input");
let jobInput = document.querySelector(".popup__job-input");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");
// Находим форму в DOM
let formElement = document.querySelector(".popup__input-container");


  function popupToggle () {
  if (!popup.classList.contains('popup_opened')) {
  popup.classList.toggle('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  } else{
      popup.classList.remove('popup_opened');
  }
}


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                      // Так мы можем определить свою логику отправки.
                      // О том, как это делать, расскажем позже.

  // Вставьте новые значения с помощью textContent
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);