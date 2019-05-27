export const serverFetcher = (serverFetcherUrl) => function(url) {
  const requestUrl = `${serverFetcherUrl}/query?address=${encodeURIComponent(url)}`;
  return fetch(requestUrl);
};
