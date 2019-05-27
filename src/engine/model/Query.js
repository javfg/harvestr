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
      field.entries
    ));
  }


  resolveUrl = (item) => {this.url = this.url.replace(/{{ITEM}}/, item)};

  fetch = () => this.fetcher.fetch(this.url);

  parseEntry = (doc, entry) => this.parser.parse(doc, entry);

  resolveField = (field, fieldData) => {
    const finalValue = fieldData.map(entry => ({name: entry.name, value: entry.value}));

    field.value = finalValue.length === 1 ? finalValue[0] : finalValue;
  }


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

    // For every field.
    this.fields.forEach(field => {
      let fieldData = [];

      // For every entry.
      field.entries.forEach((entry) => {
        console.log('Query -> entry', entry);

        fieldData.push(this.parseEntry(fetchedDocument, entry));
      });

      this.resolveField(field, fieldData);
    });

    this.fields.forEach(field => console.log('field', field.name, field.value));
  }
}


export default Query;
