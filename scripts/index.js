let popup = document.querySelector(".popup");
let popupOpenButton = document.querySelector(".js-profile__open-popup");
let popupCloseButton = document.querySelector(".popup__close-icon");
let popupSaveButton = document.querySelector(".popup__button");

let popupToggle = function () {
  popup.classList.toggle("popup_opened");
};

let formElement = document.querySelector(".popup__input-container");

function formSubmitHandler(evt) {
  evt.preventDefault();

  let nameInput = document.querySelector(".popup__name-input");
  let jobInput = document.querySelector(".popup__job-input");

  let profileName = document.querySelector(".profile__name");
  let profileJob = document.querySelector(".profile__job");

  nameInput = nameInput.value;
  jobInput = jobInput.value;

  profileName.textContent = nameInput;
  profileJob.textContent = jobInput;
}

popupOpenButton.addEventListener("click", popupToggle);
popupCloseButton.addEventListener("click", popupToggle);

formElement.addEventListener("submit", formSubmitHandler);
popupSaveButton.addEventListener("click", popupToggle);
