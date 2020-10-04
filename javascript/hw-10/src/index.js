import './styles.css';
import foodList from './menu.json';
import sectionTemplate from './templates/template.hbs';

const menuList = document.querySelector('.js-menu');
const markup = sectionTemplate(foodList);
menuList.insertAdjacentHTML('beforeend', markup);

document.addEventListener('DOMContentLoaded', () => {
  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const body = document.querySelector('body');
  const checkBox = document.querySelector('#theme-switch-toggle');

  const changeLocalstorage = () => {
    localStorage.setItem('themLocalstorage', body.classList);
  };
  const getLocalstorage = (localStorage.getItem('themLocalstorage'));
  
    function themeChangeLocalstorage() {
    if (getLocalstorage === 'dark-theme') {
      body.classList.add(Theme.DARK);
    };
  };
  themeChangeLocalstorage();

  const themeChange = () => {
    if (checkBox.checked || body.classList.contains(Theme.LIGHT)) {
      body.classList.remove(Theme.LIGHT);
      body.classList.add(Theme.DARK);
      changeLocalstorage();
    } else if (body.classList.contains(Theme.DARK)) {
      body.classList.remove(Theme.DARK);
      body.classList.add(Theme.LIGHT);
      changeLocalstorage();
    }
  };
  

  checkBox.addEventListener('change', themeChange);
});
