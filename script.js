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
featuredStars.innerHTML = 'Featured Stars';
// Adding id/classes
starAbout.id = 'star-about';
starDescription.id = 'star-description';
orangeLine.classList.add('orange-line');
// Appending children
featuredStars.appendChild(featuredTitle);
featuredStars.appendChild(orangeLine);
// Creating an array of objects to store stars data
const starData = [
  {
    name: '1',
    image: '',
    about: 'a1',
    description: 'd1',
  },
  {
    name: '2',
    image: '',
    about: 'a2',
    description: 'd2',
  },
  {
    name: '3',
    image: '',
    about: 'a3',
    description: 'd3',
  },
  {
    name: '4',
    image: '',
    about: 'a4',
    description: 'd4',
  },
  {
    name: '5',
    image: '',
    about: 'a5',
    description: 'd5',
  },
  {
    name: '6',
    image: '',
    about: 'a6',
    description: 'd6',
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
  starLine[i].classList.add('grey-line');
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