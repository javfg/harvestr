export const config = {
  debug: true,

  //serverFetcherUrl: 'http://localhost:8081',
  serverFetcherUrl: 'http://harvestr.meneillos.com:8081',

  itemConcurrency: 3,
  retryAttempts: 5,
  retryMinDelay: 1000,
  retryMaxDelay: 2500,

  debugSearchEngine: false,
  debugRankingEngine: false,

  shortTableResultsElementsToShow: 2
};
