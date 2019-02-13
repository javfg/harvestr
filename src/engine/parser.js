class Parser {
  constructor(strategy, doc, fields, multiple) {
    this.strategy = strategy;
    this.doc = doc;
    this.fields = fields;
    this.multiple = multiple;
  }

  parse() {
    return this.strategy(this.doc, this.fields, this.multiple);
  }
}

export default Parser;
