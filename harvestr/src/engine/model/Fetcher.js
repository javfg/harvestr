// Fetcher strategies.
import { standardFetcher } from '../fetchers/standardFetcher';
import { serverFetcher } from '../fetchers/serverFetcher';

// Config.
import { config } from '../../config/Config';


class Fetcher {
  constructor(fetchStrategy) {
    this.fetchStrategy = this.getFetcher(fetchStrategy);
  }

  getFetcher = (fetchStrategy) => {
    switch (fetchStrategy) {
      case 'standardFetcher':
        return standardFetcher;
      case 'serverFetcher':
        return serverFetcher(config.serverFetcherUrl);

      default:
        return undefined;
    }
  };


  fetch = (url) => this.fetchStrategy(url);
}

export default Fetcher;
