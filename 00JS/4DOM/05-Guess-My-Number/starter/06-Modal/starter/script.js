'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnsOpenModal);

const openModal = () => {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// remove hidden
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// hide the modal + overlay on click
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);
