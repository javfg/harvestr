import fetchWithRetry from '../../utils/utils';


export const corsFetcher = function(url) {
  return fetchWithRetry(`https://cors-anywhere.herokuapp.com/${url}`, {
    headers: { 'X-Requested-With': 'XMLHttpRequest' }
  });
};
