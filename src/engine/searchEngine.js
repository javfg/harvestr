// Fetcher/Parser and strategies.
import Fetcher from "./fetcher";
import { standardFetcher } from "./fetchers/standardFetcher";

import Parser from "./parser";
import { xmlParser } from "./parsers/xmlParser";
import { jsonParser } from "./parsers/jsonParser";
import { corsFetcher } from "./fetchers/corsFetcher";
import { htmlParser } from "./parsers/htmlParser";
import { csvParser } from "./parsers/csvParser";
import { tsvParser } from "./parsers/tsvParser";

export default class SearchEngine {
  savedData = {};

  getFetcher = fetcherFunctionName => {
    switch (fetcherFunctionName) {
      case "standardFetcher":
        return standardFetcher;
      case "corsFetcher":
        return corsFetcher;

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
      case "htmlParser":
        return htmlParser;
      case "csvParser":
        return csvParser;
      case "tsvParser":
        return tsvParser;

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
    if (query.saveData) {
      query.saveData.forEach(sd => (this.savedData[sd] = data));
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

    console.log("parse", parse);

    // Add final url to results.
    return {
      url,
      data: parse
    };
  };

  run = async (searchProfile, itemList) => {
    let searchResult = [];

    await Promise.all(
      itemList.map(async item => {
        searchResult.push({
          name: item,
          queries: await Promise.all(
            searchProfile.map(async query => {
              const result = await this.processQuery(query, item);

              console.log("result", result);

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
