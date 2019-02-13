// Fetcher/Parser and strategies.
import Fetcher from "./fetcher";
import { standardFetcher } from "./fetchers/standardFetcher";
import Parser from './parser';
import { xmlParser } from "./parsers/xmlParser";
import { jsonParser } from './parsers/jsonParser';


export default class SearchEngine {
  getFetcher = (fetcherFunctionName) => {
    switch (fetcherFunctionName) {
      case 'standardFetcher': return standardFetcher;

      default:
        return undefined;
    }
  };

  getParser = (parserFunctionName) => {
    switch (parserFunctionName) {
      case 'xmlParser': return xmlParser;
      case 'jsonParser': return jsonParser;

      default:
        return undefined;
    }
  };


  processQuery = async (query, item) => {
    const url = query.url.replace(/{{ITEM}}/, item);

    const fetcher = new Fetcher(this.getFetcher(query.fetcher), url, this.cache);
    const fetch = await fetcher.fetch();

    const parser = new Parser(this.getParser(query.parser), fetch.data, query.fields, query.multiple);
    const parse = parser.parse();

    return parse;
  }


  run = async (searchProfile, itemList) => {
    let searchResult = [];

    itemList.forEach(async item => {
      searchResult.push({
        item,
        queries: await Promise.all(searchProfile.map(async query => {
          const data = await this.processQuery(query, item);
          console.log('data', data);

          const queryResult = {
            query: query.name,
            data
          };

          return queryResult;
        }))
      });
    });

    return searchResult;
  }
}
