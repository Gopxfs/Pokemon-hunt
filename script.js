// Creating featured stars section elements
const featuredStars = document.getElementById('featured-stars')
const featuredTitle = document.createElement('h2');
const orangeLine = document.createElement('span');
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
// Creating an array of objects to store stars data
const starData = [
  {
    name: 'Name1',
    image: '',
    about: 'About1',
    description: 'Description1',
  },
  {
    name: 'Name2',
    image: '',
    about: 'About2',
    description: 'Description2',
  },
  {
    name: 'Name3',
    image: '',
    about: 'About3',
    description: 'Description3',
  },
  {
    name: 'Name4',
    image: '',
    about: 'About4',
    description: 'Description4',
  },
  {
    name: 'Name5',
    image: '',
    about: 'About5',
    description: 'Description5',
  },
  {
    name: 'Name6',
    image: '',
    about: 'About6',
    description: 'Description6',
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
  featuredStars.appendChild(starDiv[i]);
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