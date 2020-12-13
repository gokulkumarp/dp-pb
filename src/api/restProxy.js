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
