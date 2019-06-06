export const config = {
  debug: false,

  serverFetcherUrl: 'http://localhost:8081',

  itemConcurrency: 3,
  retryAttempts: 5,
  retryMinDelay: 1000,
  retryMaxDelay: 5000,

  shortTableResultsElementsToShow: 2
};
