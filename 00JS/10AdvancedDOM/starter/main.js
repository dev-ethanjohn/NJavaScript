'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
// btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//NOTE* IMPLEMENT SMOOTH SCROLLING
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // This is relative to the viewport, not the whole page.
  const s1coords = section1.getBoundingClientRect();

  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect);
  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  // console.log(
  //   'height/width viewpost',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  //Scrolling
  // *For more complex and more controlled use case
  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  // * for basic smooth scroll to section/s
  section1.scrollIntoView({ behavior: 'smooth' });

  //  👉 Use scrollIntoView() for most cases—it’s simple and does the job well.

  // 👉 Use window.scrollTo() if you need custom offsets (e.g., accounting for a sticky navbar).
});

// NOTE: PAGE NAVIGATION
// *Without event delegation, relying on the target
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     console.log(id); // (e.g. #section--1)

//     // Add scroll behavior to each section based on id
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// *With event delegation (common parent)
//1. add event listener to common parent element
//2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    // console.log(id); // (e.g. #section--1)
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed componenr
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// tabs.forEach(t => { //* NOT DO THIS INDIVIDUALLY
//   t.addEventListener('click', () => {
//     console.log('Tab');
//   });
// });

tabsContainer.addEventListener('click', e => {
  //*USE EVENT DELEGATION INSTEAD
  // matching (always selects the button whether we click the span or the button itself)
  const clicked = e.target.closest('.operations__tab');

  // guard clause, return early if a condiiton is matched.
  if (!clicked) return;
  // console.log(clicked);

  // Remove active class from all tabs
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Remove active class from all content areas
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
