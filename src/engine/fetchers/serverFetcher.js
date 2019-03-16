import axios from "axios";

// TODO: Server address should be parameter.
export const serverFetcher = function(url) {
  return axios.get(
    `http://localhost:8081/query?address=${encodeURIComponent(url)}`
  );
};
