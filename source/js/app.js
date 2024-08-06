const headerButton = document.querySelector('.header__button');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');

headerButton.addEventListener('click', () => {
  headerButton.classList.toggle('header__button--active');
  header.classList.toggle('header--menu-opened');
  nav.classList.toggle('nav--opened');
});
