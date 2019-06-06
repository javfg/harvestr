import Query from './Query';


class Item {
  constructor(name, queries, savedData) {
    this.name = name;
    this.savedData = savedData;

    this.queries = queries.map(query => new Query(
      query.name,
      query.urlTemplate,
      query.fields,
      query.fetcher,
      query.parser,
      query.requires,
      query.saveData,
      this.savedData
    ));
  }


  run = async () => {
    console.log('Item RUN', this, this.name);

    const itemPromise = Promise.all(this.queries.map(query => query.run(this.name)));

    console.log('itemPromise', itemPromise);
    return itemPromise;
  }
}


export default Item;
