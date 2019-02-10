class Fetcher {
  constructor(strategy, url, cache) {
    this.strategy = strategy;
    this.url = url;
    this.cache = cache;
  }

  fetch() {
    return this.strategy(this.url);
  }
}

export default Fetcher;
