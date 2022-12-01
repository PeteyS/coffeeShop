import './style.css';

export default function contact(){
    let container = document.createElement('div');
    container.classList.add('container');

    let contactBlurb = document.createElement('div');
    contactBlurb.classList.add('contactBlurb');

    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');

    h2.textContent = 'Contact Us';
    p2.textContent = 'Phone Number: 000-000-0000';
    p3.textContent = 'nowhereCoffee@coffee.ca';

    contactBlurb.appendChild(h2);
    contactBlurb.append(p2,p3);

    container.appendChild(contactBlurb);

    return container;
}