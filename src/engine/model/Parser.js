// Parser strategies.
import { csvParser } from '../parsers/csvParser';
import { htmlParser } from '../parsers/htmlParser';
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
      case 'csvParser':
        return csvParser;
      case 'tsvParser':
        return tsvParser;

      default:
        return undefined;
    }
  };


  parse = (doc, field) => {
    console.log('Parser PARSE', this, doc.split('\n', 1)[0], field);

    return this.parseStrategy(doc, field);
  }
}

export default Parser;
