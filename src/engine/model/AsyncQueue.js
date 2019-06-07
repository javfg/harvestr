class AsyncItemQueue {
  constructor(items, concurrency, progressBar) {
    this.items = items;
    this.concurrency = concurrency;
    this.progressBar = progressBar;
  }

  run = async () => {
    const bundles = Math.ceil(this.items.length / this.concurrency);
    let currentBundle = 0;

    this.progressBar.setTotalProgress(bundles);

    while (currentBundle < bundles) {
      console.log(`<--------- FETCHING ITEM BUNDLE ${currentBundle + 1} OF ${bundles} --------->`);

      const lowerRange = currentBundle * this.concurrency;
      const upperRange = (currentBundle + 1) * this.concurrency;

      const itemNames = this.items.slice(lowerRange, upperRange).map(item => item.name);
      this.progressBar.setCurrentMessage('Processing items');
      this.progressBar.setCurrentItems(itemNames);

      await Promise.all(this.items.slice(lowerRange, upperRange).map(item => item.run()));

      console.log('<--------- BATCH DONE, delaying before next batch --------->');
      await new Promise (resolve => setTimeout(resolve, 100));

      currentBundle++;

      this.progressBar.setCurrentProgress(currentBundle);
    }

    this.progressBar.setCurrentItems([]);
  };
}


export default AsyncItemQueue;
