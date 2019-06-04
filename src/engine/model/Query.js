import Fetcher from './Fetcher';
import Parser from './Parser';
import Field from './Field';


class Query {
  constructor(name, urlTemplate, fields, fetchStrategy, parseStrategy, saveData) {
    this.name = name;
    this.urlTemplate = urlTemplate;
    this.url = this.urlTemplate;

    this.fetcher = new Fetcher(fetchStrategy);
    this.parser = new Parser(parseStrategy);

    this.saveData = saveData;

    this.fields = fields.map(field => new Field(
      field.name,
      field.path,
      field.or,
      field.entries
    ));
  }


  resolveUrl = (item) => {this.url = this.url.replace(/{{ITEM}}/, item)};

  fetch = () => this.fetcher.fetch(this.url);

  parseField = (doc, field) => this.parser.parse(doc, field);


  run = async (item) => {
    console.log('Query RUN', this, item);

    this.resolveUrl(item);

    console.log('Query -> url', this.url);

    const fetchedResponse = await this.fetch();

    if (fetchedResponse.status !== 200) {
      return;
    }

    const fetchedDocument = await fetchedResponse.text();

    console.log('Query -> fetchedDocument', fetchedDocument.split('\n', 1)[0]);

    // Parse every field.
    this.fields.forEach(field => this.parseField(fetchedDocument, field));

    // Parse extra entry info, like linkTo.
    this.fields.forEach(field => {
      field.entries.forEach(entry => {
        if (entry.linkTo) {
          entry['links'] = entry.value.map((_, index) => entry.linkTo.replace(/{{value}}/, entry.value[index]));
        }
      });
    });
  }
}


export default Query;
