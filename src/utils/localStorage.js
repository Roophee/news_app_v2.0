export const localStorageGetItem = key => {
  try {
    if (typeof localStorage !== 'undefined') {
      return JSON.parse(localStorage.getItem(key));
    }
  } catch (e) {
    console.error(e);
  }

  return null;
};

export const localStorageSetItem = (key, value) => {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (e) {
    console.error(e);
  }
};
