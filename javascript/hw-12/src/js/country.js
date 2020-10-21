
import countrySearch from './services/country-service.js';
import articlesCountry from '../templates/templatesCountry.hbs';
import countryList from '../templates/templatesCountries.hbs';
import { error } from '@pnotify/core';
import refs from './refs.js';

const debounce = require('lodash.debounce');

refs.searchForm.addEventListener(
  'input',
  debounce(countrySearchInputHandler, 500),
);

function countrySearchInputHandler(event) {
  event.preventDefault();
  
  clearArticlesContainer();

  const searchQuery = event.target.value;
 
  countrySearch
    .fetchArticles(searchQuery)
    .then(data => {
      if (data.length > 10) {
        error({
          text: 'Too many matches found. Please enter a more specific query!',
        });
      } else if (data.status === 404) {
        error({
          text:
            'No country has been found!',
        });
      } else if (data.length === 1) {
        buildListMarkup(data, articlesCountry);
      } else if (data.length <= 10) {
        buildListMarkup(data, countryList);
      }
    })
    .catch((err) => {
        error({
            text: 'You must enter query parameters!'
        });
        console.error(error);
  });
};

const buildListMarkup = (countries, template) => {
  const markup = countries.map(country => template(country)).join('');
  refs.articlesContainer.insertAdjacentHTML('beforeend', markup);
};

const clearArticlesContainer = () => {
  refs.articlesContainer.innerHTML = '';
};
