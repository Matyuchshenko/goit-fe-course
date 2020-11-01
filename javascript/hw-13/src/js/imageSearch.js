import service from './apiService.js';
import cardImages from '../templates/templatesImages.hbs';
import refs from './refs.js';
// import search from './on-search.js';
import * as basicLightbox from 'basiclightbox';

const imageSearchInputHandler = event => {
  event.preventDefault();

  const input = event.currentTarget.elements.query.value;

  clearListItems(); // очищаем список
  service.resetPage(); //количество страниц
  service.searchQuery = input;

  service.fetchArticles()
    .then(hits => {
      const markup = buildListItemsTemplate(hits);
      serviceListItems(markup);
  });
  input.value = '';
};

const buildListItemsTemplate = items => {
  return cardImages(items);
};

const serviceListItems = items => {
  refs.gallery.insertAdjacentHTML('beforeend', items);
};

refs.searchForm.addEventListener('submit', imageSearchInputHandler);

const loadMoreBtnHandler = () => {
  service.fetchArticles()
  .then(hits => {
    const markup = buildListItemsTemplate(hits);
    serviceListItems(markup);
    window.scrollTo(0, 1000);
    window.scrollTo({
      top: 1000,
      behavior: 'smooth',
    });
  });
};

refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);

const clearListItems = () => {
  refs.gallery.innerHTML = '';
};

const openLargeImage = (event) => {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const largeImageURL = event.target.dataset.source;
  openModal(largeImageURL);
}

const openModal = (url) => {
  basicLightbox
    .create(`<img width="1600" height="900" src="${url}">`)
    .show();
}

refs.gallery.addEventListener('click', openLargeImage);
