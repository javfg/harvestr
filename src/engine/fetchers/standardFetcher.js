import axios from 'axios';


export const standardFetcher = function (url) {
  return axios.get(url);
}