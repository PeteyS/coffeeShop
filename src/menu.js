import './style.css';

export default function mainPage(){
    let container = document.createElement('div');
    container.classList('container');

    //creating divs for page-specific content
    let statement = document.createElement('div');
    statement.classList.add('.statement');
    let hours = document.createElement('div');
    hours.classList.add('hours');
    let hoursTitle = document.createElement('h2');
    hoursTitle.classList.add('hoursTitle');
    let location = document.createElement('div');
    location.classList.add('location');

    //whats in the statement div
    let p = document.createElement('p');
    p.textContent = 'Welcome to our coffee shop! We serve a variety of rare and exotic'
    + ' coffees. Come in and try some';

    //going to put shop hours in an unordered list
    let hoursList = document.createElement('ul');
    let daysList = [];
    let days = ['Monday','Tueday','Wednesday','Thursday',
    'Friday','Saturday','Sunday'];

    //automate the list create and population
    for(let i = 0;i<7;i++){
        daysList[i] = document.createElement('ul');
        daysList[i].textContent = days[i] + ': 8:30am - 3pm';
        hoursList.appendChild(daysList[i]);
    }

    hours.appendChild(hoursTitle);
    hours.appendChild(hoursList);

    //whats in the location div
    location.textContent = '0 Nowhereville, Nowhere City, NW'

    container.appendChild(statement);
    container.appendChild(hours);
    container.appendChild(location);

    return container;
}