import { config } from '../../config/Config';


const fetchWithRetry = async (input, init = {}) => {
  let result;
  let retryAttempts = config.retryAttempts;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    try {
      result = await fetch(input, init);
      break;
    } catch (e) {
      console.error('Error fetching', input, 'retrying after', config.retryDelay);
      await new Promise(resolve => setTimeout(resolve, config.retryDelay));
      if (--retryAttempts == 0) throw e;
    }
  }

  return result;
}


export const standardFetcher = function (url) {
  return fetchWithRetry(url);
}
