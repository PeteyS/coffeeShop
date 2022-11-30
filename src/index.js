import './style.css';
import menu from './menu.js';

const content = document.getElementById('content');
//this is going to breakup the header info and content
const header = document.createElement('div');
header.classList.add('header');
const contentSpace = document.createElement('div');
contentSpace.classList.add('contentSpace');

content.appendChild(header);
content.appendChild(contentSpace);

//this is going to breakup the title and the nav
const topHalfHeader = document.createElement('div');
topHalfHeader.classList.add('top');
const bottomHalfHeader = document.createElement('div');
bottomHalfHeader.classList.add('bottom');

//whats going to populate the top and bottom halfs
let headerTitle = document.createElement('h1');
headerTitle.classList.add('title');
let headerNav = document.createElement('div');
headerNav.classList.add('nav');

headerTitle.textContent = 'The NoWhere Coffee Shop';

topHalfHeader.appendChild(headerTitle);

header.appendChild(topHalfHeader);

//making the nav
const mainButton = document.createElement('div');
const recipeButton = document.createElement('div');
const contactButton = document.createElement('div');
mainButton.classList.add('button')
contactButton.classList.add('button')
recipeButton.classList.add('button')

headerNav.appendChild(mainButton);
headerNav.appendChild(recipeButton);
headerNav.appendChild(contactButton);

bottomHalfHeader.appendChild(headerNav);

header.appendChild(bottomHalfHeader);
//where the content goes