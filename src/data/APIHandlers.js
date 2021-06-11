import {
  valuesFromKey,
  getResponseNoMatch,
  getResponseErrorNewsArticle,
  errorString,
} from './dataHandlers';

const API_KEY = process.env.REACT_APP_API_KEY;

export const initialQueryPropertyState = {
  q: '*',
  topic: 'default',
  lang: 'default',
  country: 'default',
  page_size: 75,
  from: '',
};

export const startEndpoint =
  'https://free-news.p.rapidapi.com/v1/search?q=*&lang=uk&country=ua&page_size=100&';

export const createQueryToApi = queryProperties => {
  let url = `https://free-news.p.rapidapi.com/v1/search?`;
  Object.entries(queryProperties)
    .filter(item => item[0] !== 'from')
    .map(([key, value]) => (url += valuesFromKey(key, value)));
  if (queryProperties.from !== '') {
    return (url += `from=${queryProperties['from'].replaceAll('-', '/')}`);
  }
  return url;
};

export const fetchingNews = (url = startEndpoint) => {
  return fetch(`${url}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': `${API_KEY}`,
      'x-rapidapi-host': 'free-news.p.rapidapi.com',
    },
  })
    .then(response => {
      const { status, message } = response;
      if (response.ok) return response.json();
      if (status > 300) throw Error(errorString);
    })
    .catch(error => {
      // console.log('error', error);
      return getResponseErrorNewsArticle(error);
    })
    .then(data => {
      const articles = data.articles || [];
      return articles.length > 0 ? articles : getResponseNoMatch();
    });
};
