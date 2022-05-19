// Creating featured stars section elements
const featuredStars = document.getElementById('featured-stars');
const featuredTitle = document.createElement('h2');
const orangeLine = document.createElement('span');
const starSection = document.createElement('div');
const starDiv = [];
const starImage = [];
const starInformation = [];
const starName = [];
const starAbout = [];
const starLine = [];
const starDescription = [];
// Setting main elements
featuredTitle.innerHTML = 'Featured Stars';
orangeLine.classList.add('orange-line');
featuredStars.appendChild(featuredTitle);
featuredStars.appendChild(orangeLine);
featuredStars.appendChild(starSection);
// Creating an array of objects to store stars data
const starData = [
  {
    name: 'Ash Ketchum',
    image: 'Assets/images/featured-stars/ash.jpg',
    about: 'Pokemon trainer and champion',
    description: 'Aspiring to be the best trainer of all time, Ash is always seeking to improve his skills.',
  },
  {
    name: 'Professor Oak',
    image: 'Assets/images/featured-stars/professor-oak.png',
    about: 'Pokemon trainer, professor and researcher',
    description: 'Oak studies the human-pokemon relationship and help new trainers start a pokemon journey.',
  },
  {
    name: 'Pikachu',
    image: 'Assets/images/featured-stars/pikachu.png',
    about: 'Pokemon',
    description: 'Electric-type pokemon and Pokemon biggest star.',
  },
  {
    name: 'Cynthia',
    image: 'Assets/images/featured-stars/cynthia.png',
    about: 'Pokemon trainer, champion and archeologist',
    description: 'One of the greatest trainers of all time, champion of the Sinnoh League.',
  },
  {
    name: 'Bulbasaur',
    image: 'Assets/images/featured-stars/bulbasaur.png',
    about: 'Pokemon',
    description: 'Grass/Posion-type pokemon and the best first option.',
  },
  {
    name: 'Ditto',
    image: 'Assets/images/featured-stars/ditto.png',
    about: 'Pokemon',
    description: 'Normal-type pokemon, can transform into other pokemons. Maybe there are only dittos out there.',
  },
];
// A for loop to set star elements i times
for (let i = 0; i < 6; i += 1) {
  // Creating
  starDiv[i] = document.createElement('div');
  starImage[i] = document.createElement('img');
  starInformation[i] = document.createElement('div');
  starName[i] = document.createElement('h3');
  starAbout[i] = document.createElement('p');
  starLine[i] = document.createElement('span');
  starDescription[i] = document.createElement('p');
  // Giving classes
  starAbout[i].classList.add('star-about');
  starLine[i].classList.add('grey-line');
  starDescription[i].classList.add('star-description');
  // Appending
  starSection.appendChild(starDiv[i]);
  starDiv[i].appendChild(starImage[i]);
  starDiv[i].appendChild(starInformation[i]);
  starInformation[i].appendChild(starName[i]);
  starInformation[i].appendChild(starAbout[i]);
  starInformation[i].appendChild(starLine[i]);
  starInformation[i].appendChild(starDescription[i]);
  // Assigning data
  starImage[i].src = starData[i].image;
  starName[i].innerHTML = starData[i].name;
  starAbout[i].innerHTML = starData[i].about;
  starDescription[i].innerHTML = starData[i].description;
}