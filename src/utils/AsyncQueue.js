class AsyncItemQueue {
  constructor(items, concurrency) {
    this.items = items;
    this.concurrency = concurrency;
  }

  run = async () => {
    let itemPromises = [];

    const bundles = Math.ceil(this.items.length / this.concurrency);
    let currentBundle = 0;

    while (currentBundle < bundles) {
      console.log(`<--------- FETCHING ITEM BUNDLE ${currentBundle + 1} OF ${bundles} --------->`);

      const lowerRange = currentBundle * this.concurrency;
      const upperRange = (currentBundle + 1) * this.concurrency;

      await Promise.all(this.items.slice(lowerRange, upperRange).map(item => item.run()));

      console.log('DONE, delaying for 1sec until next batch');
      await new Promise (resolve => setTimeout(resolve, 1000));

      currentBundle++;
    }
  };
}


export default AsyncItemQueue;
