const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');

const showMenu = () => {
  navMenu.classList.add('show-menu');
};
if(navToggle) {
  navToggle.addEventListener('click', showMenu);
}

const closeMenu = () => {
  navMenu.classList.remove('show-menu');
};
if(navClose) {
  navClose.addEventListener('click', closeMenu);
};

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  navMenu.classList.remove('show-menu');
};
navLink.forEach(link => link.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
