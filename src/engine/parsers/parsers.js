export const parsers = [{
  name: 'XML',
  details: {
      format: 'eXtensible Markup Language.',
      mediaType: ['application/XML', 'text/XML'],
      description: 'Markup language that defines a set of rules for encoding documents in a format\
                    that is both human-readable and machine-readable.'
  }
}, {
  name: 'JSON',
  details: {
    format: 'JavaScript Object Notation.',
    mediaType: 'application/JSON',
    description: 'Open-standard file format that uses human-readable text to transmit data objects\
                  consisting of attribute–value pairs and array data types.'
  }
}, {
  name: 'TXT',
  details: {
      format: 'Plain text file.',
      mediaType: 'text/plain'

  }
}, {
  name: 'HTML',
  details: {
    format: 'HyperText Markup Language.',
    mediaType: 'text/html',
    description: 'Markup language for documents designed to be displayed in a web browser.'

  }
  }, {
  name: 'DSV',
  details: {
    format: 'Delimiter separated values.',
    mediaType: ['text/csv', 'text/tab-separated-values'],
    types: ['CSV', 'TSV'],
    description: 'Store two-dimensional arrays of data by separating the values in each row with\
                    specific delimiter characters.'
  }
}];
