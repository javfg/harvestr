import Item from './model/Item';

//
// Search engine class.
//
//
export default class SearchEngine {
  constructor(itemList, searchProfile, rankingDefinition, config) {
    this.config = config;
    this.savedData = {};

    this.items = itemList.map(item => new Item(item, searchProfile));
  }


  run = async () => {
    console.log('SearchEngine RUN', this);

    await Promise.all(this.items.map(item => item.run()));

    console.log('this.items', JSON.stringify(this.items));


    return this.items;
  }



















  processQuery = async (query, item) => {
    let url = query.url.replace(/{{ITEM}}/, item);

    // If requisites, await and replace them.
    if (query.requires) {
      await this.savedData[query.requires];

      const regexp = new RegExp(`{{${query.requires}}}`, 'g');

      url = url.replace(regexp, this.savedData[query.requires]);
    }

    const fetcher = new Fetcher(
      this.getFetcher(query.fetcher),
      url,
      this.cache
    );
    const data = fetcher.fetch();

    // Save data promise.
    if (query.saveData) {
      query.saveData.forEach(sd => (this.savedData[sd] = data));
    }

    const fetch = await data;

    if (fetch.status !== 200) return;

    console.log('fetch', fetch);


    const fetchText = await fetch.text();

    const parser = new Parser(
      this.getParser(query.parser),
      fetchText,
      query.fields,
      query.multiple
    );
    const parse = parser.parse();

    // Save data if specified.
    if (query.saveData) {
      query.saveData.forEach(sd => {
        const fieldToSave = parse.find(f => f.saveData && f.saveData[0] === sd);

        // Save field or subfield, depending on index specified.
        if (fieldToSave.saveData[1] === -1) {
          this.savedData[sd] = fieldToSave.data;
        } else {
          this.savedData[sd] = fieldToSave.data[fieldToSave.saveData[1]];
        }
      });
    }

    // Add final url to results.
    return {
      url,
      data: parse
    };
  };

  runOld = async (searchProfile, itemList) => {
    let searchResult = [];

    await Promise.all(
      itemList.map(async item => {
        searchResult.push({
          name: item,
          queries: await Promise.all(
            searchProfile.map(async query => {
              const result = await this.processQuery(query, item);

              const queryResult = {
                name: query.name,
                url: result.url,
                fields: result.data.map(d => ({
                  name: d.name,
                  field: d.field,
                  data: d.data
                }))
              };

              return queryResult;
            })
          )
        });
      })
    );

    //TODO: CREATE OBJECT WITH QUERY FIELD NAME
    return searchResult;
  };
}
