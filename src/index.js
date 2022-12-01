import './style.css';
import menu from './menu.js';
import recipe from './recipe.js';
import contact from './contact.js';

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
header.style.color = 'rgba(240, 46, 170, 0.4)';

topHalfHeader.appendChild(headerTitle);

header.appendChild(topHalfHeader);

//making the nav
const mainButton = document.createElement('BUTTON');
const recipeButton = document.createElement('BUTTON');
const contactButton = document.createElement('BUTTON');
mainButton.classList.add('button')
contactButton.classList.add('button')
recipeButton.classList.add('button')
mainButton.textContent = 'Main';
contactButton.textContent = 'Contact';
recipeButton.textContent = 'Recipe';

headerNav.appendChild(mainButton);
headerNav.appendChild(recipeButton);
headerNav.appendChild(contactButton);

bottomHalfHeader.appendChild(headerNav);

header.appendChild(bottomHalfHeader);

//where the content goes
let currentPage = 'main'; //used to make sure button doesn't populate space twice
contentSpace.appendChild(menu());
mainButton.style.backgroundColor = 'rgba(240, 46, 170, 0.4)';

function changeColor(change,revert1,revert2){
    change.style.backgroundColor = 'rgba(240, 46, 170, 0.4)';
    revert1.style.backgroundColor = 'white';
    revert2.style.backgroundColor = 'white';
}

mainButton.addEventListener('click', ()=>{
    if(currentPage!='main'){
        contentSpace.lastChild.remove();
        contentSpace.appendChild(menu());
        currentPage = 'main';
        changeColor(mainButton,recipeButton,contactButton);
    }
});
recipeButton.addEventListener('click', ()=>{
    if(currentPage!='recipe'){
        contentSpace.lastChild.remove();
        contentSpace.appendChild(recipe());
        currentPage = 'recipe';
        changeColor(recipeButton,mainButton,contactButton);
    }
})
contactButton.addEventListener('click', ()=>{
    if(currentPage!='contact'){
        contentSpace.lastChild.remove();
        contentSpace.appendChild(contact());
        currentPage = 'contact';
        changeColor(contactButton,recipeButton,mainButton);
    }
})