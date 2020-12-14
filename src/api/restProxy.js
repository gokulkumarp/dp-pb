import axios from 'axios';

export const post = (url, data) => {
  return axios
    .post(url, data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get = (url) => {
  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

