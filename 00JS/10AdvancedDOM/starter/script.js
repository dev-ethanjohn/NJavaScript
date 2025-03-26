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

////////////////////////
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
