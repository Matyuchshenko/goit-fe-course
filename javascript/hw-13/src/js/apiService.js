const baseUrl = 'https://pixabay.com/api/';

export default {
  page: 1,
  query: '',
  async fetchArticles(query) {
    const keyApi = '18815450-007739eb5f1c89a4d6d918d62';
    const requestParams = `?image_type=photo&orientation=horizontal
      &q=${this.query}
      &page=${this.page}
      &per_page=12
      &key=${keyApi}`;

    const parseRes = await((await fetch(baseUrl + requestParams)).json());

    this.incrementPage();
    return parseRes.hits;
  },

  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};
