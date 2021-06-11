export const errorString =
  'Status code more then 200. It could be a connection or server error. Try submitting your request again.';

export const getResponseErrorNewsArticle = error => ({
  articles: [
    {
      title: 'Response received with an Error',
      published_date: '1970-01-01 00:00:00',
      summary: error,
      media:
        'https://media.istockphoto.com/photos/computer-error-picture-id1222806141?k=6&m=1222806141&s=612x612&w=0&h=7KXHxbzikLbq4MXqxiEPO4wbKkd6ckRVXACDCJUA908=',
    },
  ],
});

export const getResponseNoMatch = () => [
  {
    title: 'No matches for your search.',
    published_date: '1970-01-01 00:00:00',
    summary: 'No matches',
    media: 'https://via.placeholder.com/450x250.png/F5F5F5/d32f2f?text=No Matches',
  },
];

export const checkNullOrContent = arg => (arg === null ? '' : arg);

const concatTimeStamp = time => {
  if (time) {
    return time.replace(' ', 'T');
  }
  return null;
};

const sortNewsByTimeStamp = (a, b) =>
  Date.parse(concatTimeStamp(b.published_date)) - Date.parse(concatTimeStamp(a.published_date));

const filterNewsByRealTimeStamp = article =>
  Date.parse(concatTimeStamp(article.published_date)) <= Date.now();

export const normalizeNews = news =>
  news.sort(sortNewsByTimeStamp).filter(filterNewsByRealTimeStamp);

// export const getQueryParam = name => {
//   if (getItemFromLocalStore(name) !== '*' && getItemFromLocalStore(name) !== '0') {
//     return `${getItemFromLocalStore(name)}`;
//   }
//   return '';
// };

const returnPlaceHolderUrl = (msg = 'No Image') =>
  `https://via.placeholder.com/450x250.png/F5F5F5/d32f2f?text=${msg}`;

export const getUrlForNewsImage = (url, placeHolderText) => {
  if (checkNullOrContent(url)) {
    let x = url.split('/');
    const protocol = x[0];
    if (protocol.length === 4) return returnPlaceHolderUrl(checkNullOrContent(placeHolderText));
    x = x[x.length - 1].split('.');
    const fileName = x[0];
    if (fileName.toLowerCase() === 'favicon')
      return returnPlaceHolderUrl(checkNullOrContent(placeHolderText));
    if (x[1] === 'ico') return returnPlaceHolderUrl(checkNullOrContent(placeHolderText));
    return url;
  }
  return returnPlaceHolderUrl(checkNullOrContent(placeHolderText));
};

export const keywordSetterHandler = input => (input.trim() === '' ? '*' : input.trim());

export const keywordGetterHandler = value => (value === '*' ? '' : value);

export const valuesFromKey = (key, value) =>
  !(value === false || value === 'default') ? `${key}=${value}&` : ``;

const getControlledDate = x => {
  const n = new Date();
  n.setDate(n.getDate() + x);
  return n.toLocaleDateString();
};

export const getDateLabel = date => {
  const itemDate = new Date(date).toLocaleDateString();
  if (itemDate === getControlledDate(0)) {
    return 'Tooday';
  }
  if (itemDate === getControlledDate(-1)) {
    return 'Yesterday';
  }
  return itemDate;
};

export const authorHandler = author =>
  !checkNullOrContent(author) ||
  author.toLocaleLowerCase() === 'http' ||
  author.toLocaleLowerCase() === 'https'
    ? ''
    : author;

export const newsSourceHandler = (author, source) => {
  if (authorHandler(author)) return checkNullOrContent(source) ? ` ( ${source} )` : '';
  return checkNullOrContent(source) ? source : '';
};
