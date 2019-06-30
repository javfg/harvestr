// Config.
import { config } from '../../config/Config';

// Search engine model.
import Fetcher from './Fetcher';
import Parser from './Parser';
import Field from './Field';


class Query {
  constructor(name, urlTemplate, fields, fetchStrategy, parseStrategy, requires, saveData, savedData) {
    this.name = name;
    this.urlTemplate = urlTemplate;
    this.url = this.urlTemplate;

    this.fetcher = new Fetcher(fetchStrategy);
    this.parser = new Parser(parseStrategy);

    this.requires = requires;

    this.saveData = saveData;
    this.savedData = savedData;

    this.fields = fields.map(field => new Field(
      field.name,
      field.path,
      field.or,
      field.entries,
      field.saveData
    ));
  }


  // Replaces patterns in urls.
  resolveUrl = (item) => {
    if (this.requires) {
      config.debugSearchEngine && console.log('Query requirement ->', this.requires, '->', this.savedData[this.requires].slice(0, 64));

      const requiresRegexp = new RegExp(`{{${this.requires}}}`, 'g');
      this.url = this.url.replace(requiresRegexp, this.savedData[this.requires]);
    }

    this.url = this.url.replace(/{{ITEM}}/, item)
  };

  // Uses fetcher to get a document.
  fetch = async () => {
    const response = await this.fetcher.fetch(this.url);

    if (response.status !== 200) {
      return;
    }

    const document = await response.text();

    return document;
  };

  parseField = (doc, field) => this.parser.parse(doc, field);


  // Run function for a query.
  /* Will perform following steps:
      1. If the query has requisites, await until the promise in savedData is resolved and requisites
         are fulfilled.
      2. Resolve URL by filling all template patterns in it with ITEM and requisites.
      3. If the query provides requisites, create promises in savedData for other queries.
      4. Fetch the resource.
      5. Parse fields.
      6. Parse extra info.
      7. Fill in requisites in savedData.
   */
  run = async (item) => {
    // Step 1: If requisites, await.
    if (this.requires) {
      await this.savedData[this.requires];
    }

    // Step 2: Resolve URL.
    this.resolveUrl(item);

    // Step 3: If provides, create promise in savedData.
    const fetchPromise = this.fetcher.fetch(this.url);

    if (this.saveData) {
      this.saveData.forEach(sd => (this.savedData[sd] = fetchPromise));
    }

    // Step 4: Fetch.
    const document = await fetchPromise;
    config.debugSearchEngine && console.log('Query -> fetch', document.slice(0, 64));

    // Step 5: Parse every field.
    this.fields.forEach(field => this.parseField(document, field));

    // Step 6: Parse extra entry info, like linkTo.
    this.fields.forEach(field => {
      field.entries.forEach(entry => {
        if (entry.linkTo) {
          entry['links'] = entry.value.map((_, index) => entry.linkTo.replace(/{{value}}/, entry.value[index]));
        }
      });
    });

    // Step 7: If provides, save data.
    if (this.saveData) {
      this.saveData.forEach(saveData => {
        this.savedData[saveData] = this.fields
        .find(field => field.saveData === saveData)
        .entries
        .find(entry => entry.saveData === saveData)
        .value[0];
      });
    }
    config.debugSearchEngine && console.log('Query -> AFTER RUN', this);
  }
}


export default Query;
