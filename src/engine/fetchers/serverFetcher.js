import { standardFetcher } from "./standardFetcher";

export const serverFetcher = (serverFetcherUrl) => function(url) {
  const requestUrl = `${serverFetcherUrl}/query?address=${encodeURIComponent(url)}`;
  return standardFetcher(requestUrl);
};
