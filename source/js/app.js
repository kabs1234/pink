const navButton = document.querySelector('.nav__button');
const header = document.querySelector('.header');
const navList = document.querySelector('.nav__list');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('nav__button--active');
  header.classList.toggle('header--menu-opened');
  navList.classList.toggle('nav__list--opened');
});
