export const operators = [{
  name: 'At least',
  details: {
      code: 'ATLEAST',
      description: 'The entry contains at least a given amount of values.'
  }
}, {
  name: 'Between',
  details: {
    code: 'BETWEEN',
    description: 'The entry contains a value between two numbers.'
  }
}, {
  name: 'Includes',
  details: {
    code: 'INCLUDES',
    description: 'The entry includes one of the given values.'
  }
}, {
  name: 'Maximum',
  details: {
    code: 'MAX',
    description: 'Items are sorted by this entry value, and the score for each item will be determined by\
                  it being on the top n, being n the given value for this operator.'
  }
}];
