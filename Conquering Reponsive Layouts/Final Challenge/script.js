const button = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');

button.addEventListener('click', () => {
  button.classList.toggle('toggled');
  nav.classList.toggle('toggled');
})