// Creating a function to toggle the mobile menu
const hamburger = document.getElementById('hamburger');
const hamburgerImage = document.getElementById('hamburger-image');
const navbar = document.getElementById('navbar');
let isTheMenuActive = false;
function toggleMenu() {
  if (isTheMenuActive === false) {
    hamburgerImage.src = 'Assets/images/icons/close-button.png';
    isTheMenuActive = true;
  } else {
    hamburgerImage.src = 'Assets/images/icons/hamburger.png'
    isTheMenuActive = false;
  }
  navbar.classList.toggle('active');
}
hamburger.addEventListener('click', toggleMenu);