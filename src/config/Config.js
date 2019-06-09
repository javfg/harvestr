export const config = {
  debug: false,

  serverFetcherUrl: 'http://localhost:8081',

  itemConcurrency: 3,
  retryAttempts: 5,
  retryMinDelay: 1000,
  retryMaxDelay: 2500,

  shortTableResultsElementsToShow: 2
};
