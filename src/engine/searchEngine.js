import async from 'async-es';

// Fetcher/Parser and strategies.
import Fetcher from "./fetcher";
import { standardFetcher } from "./fetchers/standardFetcher";
import Parser from './parser';
import { xmlParser } from "./parsers/xmlParser";
import { jsonParser } from './parsers/jsonParser';


export default class SearchEngine {
  getFetcherFunction = (fetcherFunctionName) => {
    switch (fetcherFunctionName) {
      case 'standardFetcher': return standardFetcher;

      default:
        return undefined;
    }
  };

  getParserFunction = (parserFunctionName) => {
    switch (parserFunctionName) {
      case 'xmlParser': return xmlParser;
      case 'jsonParser': return jsonParser;

      default:
        return undefined;
    }
  };


  run = (searchProfile, itemList) => {
    let searchResult = {};

    const queue = async.queue((promise, callBack) => {
      promise.then((doc) => {
        callBack(doc);
      });
    }, searchProfile.length);

    // Traverse item list...
    itemList.forEach(item => {
      searchResult[item] = {};

      // Traverse search queries in search profile...
      searchProfile.forEach(query => {
        const url = query.url.replace(/{{ITEM}}/, item);
        const fetcher = new Fetcher(this.getFetcherFunction(query.fetcher), url, this.cache);

        queue.push(
          fetcher.fetch(),
          (doc) => {
            searchResult[item][query.name] = new Parser(this.getParserFunction(query.parser), doc.data, query.fields).parse();
          }
        );
      });
    });


    queue.drain = () => {
      console.log('all elements processed');
      return searchResult;
    }
  }
}
