let namePerson = document.querySelector('.profile__nike-name');
let discriptionPerson = document.querySelector('.profile__discription');
let editButton = document.querySelector('.profile__edit-btn');
let form = document.querySelector('.popup__form');
let nameInput = form.querySelector('.popup__input-name');
let discriptionInput = form.querySelector('.popup__input-discription');
let closeButton = document.querySelector('.popup__btn-close');
let popup = document.querySelector('.popup');

form.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openEditProfile);
closeButton.addEventListener('click', closeEditProfile);

function openEditProfile() {
    popup.classList.toggle('popup_opened');

    nameInput.value = namePerson.textContent;
    discriptionInput.value = discriptionPerson.textContent;
}

function closeEditProfile() {
    popup.classList.toggle('popup_opened');
}

function formSubmitHandler (evt) {
	evt.preventDefault();

    namePerson.textContent = nameInput.value;
    discriptionPerson.textContent = discriptionInput.value;
    closeEditProfile();
}