import Query from './Query';


class Item {
  constructor(name, queries) {
    this.name = name;
    this.queries = queries.map(query => new Query(
      query.name,
      query.urlTemplate,
      query.fields,
      query.fetcher,
      query.parser,
      query.saveData
    ));
  }


  run = async () => {
    console.log('Item RUN', this, this.name);

    await Promise.all(this.queries.map(query => query.run(this.name)));
  }
}


export default Item;
