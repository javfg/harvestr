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
      console.log(`<--------- FETCHING ITEM BUNDLE ${currentBundle} OF ${bundles} --------->`);

      const lowerRange = currentBundle * this.concurrency;
      const upperRange = (currentBundle + 1) * this.concurrency;

      itemPromises.push(
        this.items.slice(lowerRange, upperRange).map(item => item.run())
      );

      await Promise.all(itemPromises);
      currentBundle++;
    }
  };
}


export default AsyncItemQueue;
