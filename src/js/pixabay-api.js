import axios from 'axios';

const baseUrl = 'https://pixabay.com/api/';
const API = '54348256-4fe7e6271296be96900661c2d';

export function getImagesByQuery(query) {
  return axios
    .get(baseUrl, {
      params: {
        key: API,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
