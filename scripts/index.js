let nameUser = document.querySelector('.profile__nike-name');
let discriptionUser = document.querySelector('.profile__discription');
let editButton = document.querySelector('.profile__edit-btn');
let form = document.querySelector('.popup__form');
let nameInput = form.querySelector('.popup__input_type_name');
let discriptionInput = form.querySelector('.popup__input_type_discription');
let closeButton = document.querySelector('.popup__btn-close');
let popup = document.querySelector('.popup');

form.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openEditProfile);
closeButton.addEventListener('click', closeEditProfile);

function openEditProfile() {
    popup.classList.toggle('popup_opened');

    nameInput.value = nameUser.textContent;
    discriptionInput.value = discriptionUser.textContent;
}

function closeEditProfile() {
    popup.classList.toggle('popup_opened');
}

function formSubmitHandler (evt) {
	evt.preventDefault();

    nameUser.textContent = nameInput.value;
    discriptionUser.textContent = discriptionInput.value;
    closeEditProfile();
}