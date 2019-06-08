const labels = {
  csvParser: 'CSV',
  dsvParser: 'DSV',
  entry: 'Entry',
  entries: 'Entries',
  fetcher: 'Fetch strategy',
  field: 'Field',
  htmlParser: 'HTML',
  importance: 'Importance',
  jsonParser: 'JSON',
  or: 'Alternative path',
  parser: 'Parse strategy',
  path: 'Path',
  saveData: 'Provides',
  serverFetcher: 'Safe',
  standardFetcher: 'Standard',
  query: 'Query',
  requires: 'Requires',
  type: 'Type',
  tsvParser: 'TSV',
  urlTemplate: 'URL Template',
  value: 'Value',
  xmlParser: 'XML'
};

export const translate = (entry) => labels[entry] ? labels[entry] : entry;