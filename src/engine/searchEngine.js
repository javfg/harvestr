// Fetcher/Parser and strategies.
import Fetcher from "./fetcher";
import { standardFetcher } from "./fetchers/standardFetcher";
import Parser from "./parser";
import { xmlParser } from "./parsers/xmlParser";
import { jsonParser } from "./parsers/jsonParser";

export default class SearchEngine {
  savedData = {};

  getFetcher = fetcherFunctionName => {
    switch (fetcherFunctionName) {
      case "standardFetcher":
        return standardFetcher;

      default:
        return undefined;
    }
  };

  getParser = parserFunctionName => {
    switch (parserFunctionName) {
      case "xmlParser":
        return xmlParser;
      case "jsonParser":
        return jsonParser;

      default:
        return undefined;
    }
  };

  processQuery = async (query, item) => {
    let url = query.url.replace(/{{ITEM}}/, item);

    // If requisites, await and replace them.
    if (query.requires) {
      await this.savedData[query.requires];

      const regexp = new RegExp(`{{${query.requires}}}`, "g");

      url = url.replace(regexp, this.savedData[query.requires]);
    }

    const fetcher = new Fetcher(
      this.getFetcher(query.fetcher),
      url,
      this.cache
    );
    const data = fetcher.fetch();

    // Save data promise.
    if (query.saveTo) {
      this.savedData[query.saveTo] = data;
    }

    const fetch = await data;

    const parser = new Parser(
      this.getParser(query.parser),
      fetch.data,
      query.fields,
      query.multiple
    );
    const parse = parser.parse();

    // Save data if specified.
    if (query.saveTo) {
      this.savedData[query.saveTo] = parse;
    }

    return parse;
  };

  run = async (searchProfile, itemList) => {
    let searchResult = [];

    await Promise.all(
      itemList.map(async item => {
        searchResult.push({
          item,
          queries: await Promise.all(
            searchProfile.map(async query => {
              const data = await this.processQuery(query, item);

              const queryResult = {
                query: query.name,
                data
              };

              return queryResult;
            })
          )
        });
      })
    );

    return searchResult;
  };
}
