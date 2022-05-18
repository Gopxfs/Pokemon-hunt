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
// Adding id/classes
starAbout.setAttribute('id', 'star-about');
starDescription.setAttribute('id', 'star-description');
orangeLine.classList.add('orange-line');
starLine.classList.add('grey-line');
// Appending children
featuredStars.appendChild(featuredTitle);
featuredStars.appendChild(orangeLine);
// Creating and appending divs and its elements i times
for (let i = 0; i < 6; i += 1) {
  starDiv[i] = document.createElement('div');
  starImage[i] = document.createElement('img');
  starInformation[i] = document.createElement('div');
  starName[i] = document.createElement('h3');
  starAbout[i] = document.createElement('p');
  starLine[i] = document.createElement('span');
  starDescription[i] = document.createElement('p');
  featuredStars.appendChild(starDiv[i]);
  starDiv[i].appendChild(starImage[i]);
  starDiv[i].appendChild(starInformation);
  starInformation[i].appendChild(starName[i]); 
  starInformation[i].appendChild(starAbout[i]); 
  starInformation[i].appendChild(starLine[i]); 
  starInformation[i].appendChild(starDescription[i]); 
  }