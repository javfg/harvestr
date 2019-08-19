export const config = {
  debug: true,

  // Replace this with the relay server's url
  serverFetcherUrl: 'http://localhost:8081',

  itemConcurrency: 3,
  retryAttempts: 5,
  retryMinDelay: 1000,
  retryMaxDelay: 2500,

  debugSearchEngine: false,
  debugRankingEngine: false,

  shortTableResultsElementsToShow: 2
};