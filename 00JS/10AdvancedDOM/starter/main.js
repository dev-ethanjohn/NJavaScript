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

// A handler function can only have 1 real param, to use 2 param, use the this keyword, for more than 2, use an array or object in the call
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    // matching
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
};

//NOTE:* Tabbed componenr
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

//NOTE: *Menu fade animation
const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//NOTE: Sticky Navigation
// *Manual observing the scroll position
// const initialCoordinates = section1.getBoundingClientRect();

// window.addEventListener('scroll', function (e) {
//   console.log(window.scrollY);

//   if (window.scrollY > initialCoordinates.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

//*  Intersection Observer
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   //intersecting element
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  // 90 is height of nav
  // teh sticky will appear 90px before the threshold appears
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// NOTE: Reveal Sections
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  // console.log(entries);
  // const [entry] = entries;
  entries.forEach(entry => {
    // console.log(entry);

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    // unobserve as it there's no point of observing after it appears.
    observer.unobserve(entry.target);
  });
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

// initially add section--hidden class to remove each section
allSections.forEach(function (section) {
  //   ✅ observe(section) tells the Intersection Observer API to track each .section.
  // ✅ Without it, the observer wouldn't know what to watch.
  // ✅ The observer triggers revealSection when a section enters the viewport.
  section.classList.add('section--hidden'); // 👈 First, hide the section
  sectionObserver.observe(section); // 👈 Then, start observing it
});

//NOTE: LAZY LOADING IMAGES
// https://www.youtube.com/watch?v=T8EYosX4NOo
// https://www.youtube.com/watch?v=2IbRtjez6ag
// selects the element that has the property/attribute data-src
const imgTargets = document.querySelectorAll('img[data-src]');
// console.log(imgTargets);

const loadImg = function (entries, observer) {
  // const [entry] = entries;
  // console.log(entry);

  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    // Replace src with data-src
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function () {
      // only remove the filter class when the image has finished loaded
      entry.target.classList.remove('lazy-img');
    });

    observer.unobserve(entry.target);
  });
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  // load early
  rootMargin: '50px',
});

imgTargets.forEach(img => imgObserver.observe(img));
