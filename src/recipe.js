import './style.css';
import Americano from './americano.jpg';
import Coffee from './coffee.jpg';
import Espresso from './espresso.jpg';
import FrenchPress from './frenchPress.jpg';

export default function recipePage(){
    let container = document.createElement('div');
    container.classList.add('container');

    const coffee = new Image();
    const americano = new Image();
    const espresso = new Image();
    const press = new Image();

    coffee.src = Coffee;
    americano.src = Americano;
    espresso.src = Espresso;
    press.src = FrenchPress;

    let coffeeP = document.createElement('p');
    coffeeP.classList.add('description');
    let americanoP = document.createElement('p');
    americanoP.classList.add('description');
    let espressoP = document.createElement('p');
    espressoP.classList.add('description');
    let pressP = document.createElement('p');
    pressP.classList.add('description');

    coffee.classList.add('picture');
    americano.classList.add('picture');
    espresso.classList.add('picture');
    press.classList.add('picture');

    //create recipe boxes
    let boxList = [];
    for (let i=0;i<4;i++){
        boxList[i] = document.createElement('div');
        boxList[i].classList.add('recipeBox')
    }

    coffeeP.textContent = "Pour over coffee is drip coffee made by pouring water over coffee"
    +"grounds in a filter. Drip coffee is made using a percolator coffee machine, whereas pour over is made"
    +"by a human. Controlling the pouring over the water helps to bring out the nuances in the flavor of the coffee beans."
    pressP.textContent = "The French press is a small pitcher with a plunger that’s used to brew coffee and other drinks. "+
    "It’s most often used for brewed coffee, but the French press also makes tea, "+
    "cold brew, espresso, and more."
    americanoP.textContent = "An Americano is an espresso drink made with hot water and espresso. The drink can be made "+
    "with either one or two shots of espresso, and varying ratios of water (usually 2:1)."
    espressoP.textContent = "Espresso is an Italian way of making coffee in highly concentrated shots. A single espresso shot"+
    " is 1 ounce, and a double shot is 2 ounces. Espresso can be sipped in small cups, or used as the base for popular espresso drinks"

    //boxList[0].appendChild(coffee);
    //boxList[0].appendChild(coffeeP);
    boxList[0].append(coffee,coffeeP);
    boxList[1].appendChild(press);
    boxList[1].appendChild(pressP);
    boxList[2].appendChild(americano);
    boxList[2].appendChild(americanoP);
    boxList[3].appendChild(espresso);
    boxList[3].appendChild(espressoP);
    

    boxList.forEach(element => container.appendChild(element));

    return container;
}