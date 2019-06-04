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
      const randomDelay = Math.floor(Math.random() * (config.retryMaxDelay - config.retryMaxDelay + 1) + config.retryMinDelay);

      console.error('Error fetching', input, 'retrying after', randomDelay);

      await new Promise(resolve => setTimeout(resolve, randomDelay));
      if (--retryAttempts == 0) throw e;
    }
  }

  return result;
}


export const standardFetcher = function (url) {
  return fetchWithRetry(url);
}
