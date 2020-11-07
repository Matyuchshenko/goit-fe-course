import service from './apiService.js';
import cardImages from '../templates/templatesImages.hbs';
import refs from './refs.js';
import * as basicLightbox from 'basiclightbox';

const imageSearchInputHandler = event => {
  event.preventDefault();

  service.searchQuery = event.currentTarget.elements.query.value;

  service.resetPage();

  service.fetchArticles()
    .then(hits => {
      clearListItems();
      const markup = buildListItemsTemplate(hits);
      serviceListItems(markup);
  });
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
      top: document.body.scrollHeight,
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
