/* @flow */

const set = (data: { [key: string]: any }) => {
  Object.keys(data).forEach((key) => {
    localStorage.setItem(key, JSON.stringify(data[key]));
  });
};

const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

export default {
  set,
  removeItem,
};
