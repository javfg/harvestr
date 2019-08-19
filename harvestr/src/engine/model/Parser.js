// Config.
import { config } from '../../config/Config';

// Parser strategies.
import { csvParser } from '../parsers/csvParser';
import { htmlParser } from '../parsers/htmlParser';
import { htmlDocParser } from '../parsers/htmlDocParser';
import { jsonParser } from '../parsers/jsonParser';
import { tsvParser } from '../parsers/tsvParser';
import { xmlParser } from '../parsers/xmlParser';


class Parser {
  constructor(parseStrategy) {
    this.parseStrategy = this.getParser(parseStrategy);
  }

  getParser = parserFunctionName => {
    switch (parserFunctionName) {
      case 'xmlParser':
        return xmlParser;
      case 'jsonParser':
        return jsonParser;
      case 'htmlParser':
        return htmlParser;
      case 'htmlDocParser':
        return htmlDocParser;
      case 'csvParser':
        return csvParser;
      case 'tsvParser':
        return tsvParser;

      default:
        return undefined;
    }
  };


  parse = (doc, entry) => {
    config.debugSearchEngine && console.log('-> Parsing', doc.slice(0, 64));

    return this.parseStrategy(doc, entry);
  }
}

export default Parser;
