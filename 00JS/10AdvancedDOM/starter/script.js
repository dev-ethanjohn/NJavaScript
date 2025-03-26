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
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    console.log('Link');
  });
});

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// LESSON
// IMPORTANT: (195): How the DOM Really Works
console.log('----How the DOM Really Works----');
// 1. Allows us to make JS interact with the browser.
// 2. Can write JS to create, modify, adn delete HTML elements; set styles, classes, attributes,and listen and respond to events;
// 3. DOM tree is generated from an HTML document, which we ca then interact with;
// 4. DOM is a very complex API that conatins lots of methods and properties to interact with the DOM tree.

/* 
   ================================
   HOW THE DOM API IS ORGANIZED  
   ================================

   The DOM (Document Object Model) API is structured in a way that allows inheritance of methods 
   and properties. This means that different types of DOM elements share common behaviors 
   through a hierarchy of objects. Below is a breakdown of how this hierarchy works:

   1️⃣ NODE (The Base of Everything)
   ---------------------------------
   - The "Node" is the fundamental building block of the DOM.
   - Everything in the DOM (elements, text, comments, etc.) inherits from the "Node" class.
   * Common properties/methods available to all nodes:
     - .textContent  -> Gets or sets the text inside a node.
     - .childNodes   -> Returns a NodeList of child nodes (including text and comments).
     - .parentNode   -> References the parent node.
     - .cloneNode()  -> Creates a copy of the node.

   2️⃣ EVENTTARGET (Handling Events)
   ---------------------------------
   - All nodes (and even the "Window" object) inherit from "EventTarget."
   - Common methods available:
     - .addEventListener()  -> Attaches an event handler.
     - .removeEventListener() -> Removes an event handler.

   3️⃣ ELEMENT (For HTML Elements)
   ------------------------------
   - "Element" is a subclass of "Node" and represents an actual HTML element.
   - It provides additional properties and methods for working with HTML elements.
   * Common properties/methods:
     - .innerHTML  -> Gets or sets the HTML content inside an element.
     - .classList  -> Allows manipulation of CSS classes.
     - .children   -> Returns the child elements (ignores text and comments).
     - .parentElement -> Gets the parent element (not just the node).
     - .append(), .remove() -> Allows adding/removing elements dynamically.
     - .insertAdjacentHTML() -> Inserts HTML before or after an element.
     - .querySelector() -> Selects a child element using a CSS selector.
     - .closest() -> Finds the nearest ancestor matching a selector.
     - .matches() -> Checks if an element matches a given selector.
     - .scrollIntoView() -> Scrolls an element into view.
     - .setAttribute() -> Sets an attribute on an element.

   4️⃣ HTML ELEMENT (More Specific Elements)
   ------------------------------------------
   - The "HTMLElement" class extends "Element" and represents an HTML tag.
   - Every HTML tag (like <div>, <button>, <p>) is an instance of a specific subclass.
   - Examples:
     - HTMLDivElement -> Represents a <div> element.
     - HTMLButtonElement -> Represents a <button> element.

   5️⃣ DOCUMENT (Special Node for the Entire Page)
   ----------------------------------------------
   - The "document" object is an instance of "Document" and represents the entire web page.
   - Unlike other elements, it has unique methods:
     - .querySelector() -> Selects elements from the entire document.
     - .createElement() -> Creates a new element dynamically.
     - .getElementById() -> Selects an element by its ID.

   ⚠️ IMPORTANT: INHERITANCE CONCEPT
   -----------------------------------
   - Methods and properties are inherited from parent classes to child classes.
   - Example: An <h1> element (HTMLHeadingElement) can use .addEventListener()
     because it inherits from HTMLElement → Element → Node → EventTarget.

   🚀 KEY TAKEAWAYS:
   -----------------
   - The DOM follows an object-oriented structure.
   - Every HTML element is an instance of a specific class that inherits from Node.
   - The "querySelector()" method is available both on "Element" and "Document."
   - Inheritance makes it possible to use common methods on various elements.

*/

// IMPORTANT (196): Selecting, Creating, and Deleting Elements
console.log('----Selecting, Creating, and Deleting Elements---');

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections); //*returns a nodelist

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); //*returns an HTMLCollection

console.log(document.getElementsByClassName('btn')); //*returns an HTMLCollection

// Creating and inserting elements
// insertAdjacentHTML

// Programmatic approach
const message = document.createElement('div'); //*creates a DOM element
message.classList.add('cookie-message');
// message.textContext =
//   'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
//header.prepend(message); //* add as a first child of the element
header.append(message); //* add as the last chidl of the element (any live element in the DOM will only appear as a single element. It can't exist twice at the same time unless we clone it)

// header.append(message.cloneNode(true)); *clone

// header.before(message);  //*before the header as sibling not a child
// header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.parentElement.removeChild(message) //*old way (DOM traversing)
    message.remove(); //*removes the div
  });

// IMPORTANT (197): Styles, Attributes, and Classes
console.log('---Styles, Attributes, and Classes----');

// Styles
// Sets to inline styles in HTML
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height); //*cannot read it unless we put it manuall in the DOM w/ JS (returns an empty string)
console.log(getComputedStyle(message).height); //? 49px *can read styles set via CSS files or not directly inline
console.log(getComputedStyle(message).color); //? rgb(187, 187, 187)
console.log(message.style.backgroundColor);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';
console.log(message.style.height); //? 89px *now it is inline

//NOTE change the value of the custom property in CSS
document.documentElement.style.setProperty('--color-primary', 'orangered');

//* Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); //? Bankist logo
console.log(logo.className); //? nav__logo

logo.alt = 'Beautiful minimalist logo';

// NOn-standard
console.log(logo.designer); // undefined
console.log(logo.getAttribute('designer')); //? Jonas

logo.setAttribute('company', 'Bankist'); //*sets a new attribute in the HTML file

console.log(logo.src); //? http://127.0.0.1:5500/00JS/10AdvancedDOM/starter/img/logo.png  *absolute
console.log(logo.getAttribute('src')); //? img/logo.png *relative

const twitterLink = document.querySelector('.twitter-link');
console.log(twitterLink.href); //? https://twitter.com/jonasschmedtman
console.log(twitterLink.getAttribute('href')); //? https://twitter.com/jonasschmedtman

const link = document.querySelector('.nav__link--btn');
console.log(link.href); //? http://127.0.0.1:5500/00JS/10AdvancedDOM/starter/index.html#
console.log(link.getAttribute('href')); //? #

// NOTE: Date attribute
// Uused quite a lot esp when we use data and store data in the UI
console.log(logo.dataset.versionNumber); //? 3.0

// NOTE: Classes
logo.classList.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c'); //NOT INCLUDES
// logo.className ='jonas' *NOTE: Dont use this

// IMPORTANT (199): Types of Events and Events handlers
// NOTE: developer.mozilla.org/en-US/docs/Web/API/Element#events
https: console.log('----Types of Events and Events handlers------');

const h1 = document.querySelector('h1');

// mouseenter is like hover effect
const alerth1 = function () {
  alert('Trigger mouse1');

  //* listen the event once (inside the function when executed)
  // h1.removeEventListener('mouseenter', alerth1);
};

// NOTE: 1ST WAY TO ADD EVENT   //*RECOMMENDED
// ✔ This passes the function reference so that it executes only when the event happens.
h1.addEventListener('mouseenter', alerth1);

// NOTE: 2ND WAY TO ADD EVENT //*NOT RECOMMENDED
// h1.onmouseenter = function () {
//   alert('Trigger mouse2');
// };

// 👉 Use addEventListener for better flexibility, especially if you may need multiple listeners or want to remove an event later.
// 👉 Use onmouseenter only if you need just one simple event handler and won't add more later.

// * removes the event affer 3 sec. can listen multiple times as long as is not more than 3 sec.
setTimeout(() => {
  h1.removeEventListener('mouseenter', alerth1);
}, 3000);

// NOTE: 3RD WAY TO ADD EVENT //*DO NOT DO THIS EVER
// Add the attribute on the HTML ex: `onclick="alert('Alert')"

// IMPORTANT: (200): Event Propagation: Bubbling and capturing

/**
 * 📝 **Event Bubbling and Capturing**
 *
 * Event bubbling and capturing are two phases of event propagation in the DOM.
 * Understanding these phases is crucial for handling events effectively.
 *
 * ## Event Propagation Phases
 *
 * 1. **Capturing Phase**:
 *    - Events start at the outermost element (e.g., `<html>`).
 *    - The event "captures" elements as it moves inward toward the target element.
 *    - Useful for intercepting events before they reach the target.
 *
 * 2. **Target Phase**:
 *    - The event reaches the exact element where the event occurred.
 *    - This phase occurs after the capturing phase and before the bubbling phase.
 *
 * 3. **Bubbling Phase**:
 *    - After reaching the target, the event "bubbles up" from the innermost element to the outermost element.
 *    - Useful for handling events that affect parent elements.
 *
 * ## Example Code
 *
 * ```javascript
 * // HTML Structure
 * <div class="container">
 *   <button id="button">Click Me</button>
 * </div>
 *
 * // JavaScript
 * document.querySelector('.container').addEventListener('click', () => {
 *   console.log('Clicked on container');
 * });
 *
 * document.querySelector('#button').addEventListener('click', () => {
 *   console.log('Clicked on button');
 * });
 * ```
 *
 * ### Explanation:
 * - When you click the `<button>`, the event propagates through the DOM tree.
 * - The `click` event starts at the `<button>` and bubbles up to its parent elements.
 * - If you add an event listener to both the `<button>` and its parent (`<div>`).
 *
 * ## Event Propagation Order
 *
 * 1. **Capturing Phase**:
 *    - The event travels from the outermost element (`<html>` → `<body>` → `<section>` → `<p>` → `<a>`).
 *    - This phase is rarely used because most developers rely on the bubbling phase.
 *
 * 2. **Target Phase**:
 *    - The event reaches the exact element where the event occurred.
 *    - You can handle the event specifically for the target element.
 *
 * 3. **Bubbling Phase**:
 *    - The event bubbles up from the target element outward.
 *    - Useful for handling events on parent elements.
 *
 * ## Preventing Default Behavior
 * - Use `event.preventDefault()` to stop default browser behavior (e.g., form submission).
 *
 * ## Stopping Event Propagation
 * - Use `event.stopPropagation()` to prevent the event from bubbling or capturing further.
 *
 * ## Example with Event Delegation
 * ```javascript
 * document.querySelector('.container').addEventListener('click', (event) => {
 *   if (event.target.tagName === 'BUTTON') {
 *     console.log('Button clicked!');
 *   }
 * });
 * ```
 *
 * ## Key Points
 * - Event bubbling is more commonly used than capturing.
 * - Use `.stopPropagation()` to control event propagation.
 *
 * ## References
 * - [MDN Web Docs: Event Propagation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
 *
 * ## Best Practices
 * - Use event delegation for dynamic content.
 * - Handle events at the appropriate phase based on your requirements.
 */

// IMPORTANT: (201): Event Propagation in Practice
console.log('----Event Propagation in Practice----');

// random int
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)}, ${randomInt(0, 255)} )`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  //NOTE: the this keywords points to the element the event hadnler is attached to; is similar to currentTarget
  this.style.backgroundColor = randomColor();
  // console.log('LINK target:', e.target); // <a> (always the clicked element)
  console.log('LINK currentTarget:', e.currentTarget); // <a> (since event listener is on <a>)
  console.log(e.currentTarget === this); //? true

  // STOP THE EVENT TO BUBBLE
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // console.log('CONTAINER target:', e.target); // <a> (the original clicked element)
  console.log('CONTAINER currentTarget:', e.currentTarget); // <ul> (event listener attached to <ul>)
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    // console.log('NAV target:', e.target); // <a> (original clicked element)
    console.log('NAV currentTarget:', e.currentTarget); // <nav> (event listener attached to <nav>)
  }
  // no longer listen to bubbling phase (RARELY USED)
  // true
);

// e.target → The element that was actually clicked (origin of the event) Usually the same.
// e.currentTarget → The element that the event handler is attached to (the current element handling the event).

// IMPORTANT (202): Event delegation
console.log('----Event delegation----');
