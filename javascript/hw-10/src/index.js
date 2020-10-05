import './styles.css';
import foodList from './menu.json';
import sectionTemplate from './templates/template.hbs';

const menuList = document.querySelector('.js-menu');
const markup = sectionTemplate(foodList);
menuList.insertAdjacentHTML('beforeend', markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
const checkBox = document.querySelector('#theme-switch-toggle');

const themeChangeLocalstorage = () => {
  if (localStorage.getItem('key') === 'dark-theme') {
    body.classList.add(Theme.DARK);
  }
}
themeChangeLocalstorage();

const themeChange = () => {
  if (checkBox.checked || body.classList.contains(Theme.LIGHT)) {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    localStorage.setItem('key', body.classList);
  } else if (body.classList.contains(Theme.DARK)) {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    localStorage.setItem('key', body.classList);
  }
};
checkBox.addEventListener('change', themeChange);
