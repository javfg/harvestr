import axios from "axios";

export const corsFetcher = function(url) {
  return axios.get(`https://cors-anywhere.herokuapp.com/${url}`);
};
