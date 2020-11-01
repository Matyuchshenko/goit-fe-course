
export default class NewsApiService {
  constructor () {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles(searchQuery) {
    const keyApi = '18815450-007739eb5f1c89a4d6d918d62';
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal
      &q=${this.searchQuery}
      &page=${this.page}
      &per_page=12
      &key=${keyApi}`;

      return fetch (url)
      .then(Response => Response.json())
      .then(data => {
        this.incrementPage();
        return data.articles;
      })

  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
};
