let editButton = document.querySelector('.profile__edit-btn');
let form = document.querySelector('.popup__form');
let nameInput = form.querySelector('.popup__input-name');
let discriptionInput = form.querySelector('.popup__input-discription');
let closeButton = document.querySelector('.popup__btn-close');
let setLikeButton = document.querySelector('.element__like');

form.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openEditProfile);
closeButton.addEventListener('click', closeEditProfile);

function openEditProfile() {
    let popup = document.querySelector('.popup');
    popup.classList.toggle('popup_opened');

    let name = document.querySelector('.profile__nike-name');
    let discription = document.querySelector('.profile__discription');


    nameInput.value = name.textContent;
    discriptionInput.value = discription.textContent;
}

function closeEditProfile() {
    let popup = document.querySelector('.popup');
    popup.classList.toggle('popup_opened');
}

function formSubmitHandler (evt) {
	evt.preventDefault();
    let name = document.querySelector('.profile__nike-name');
    let discription = document.querySelector('.profile__discription');

    name.textContent = nameInput.value;
    discription.textContent = discriptionInput.value;
    closeEditProfile();
}