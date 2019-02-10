class Parser {
  constructor(strategy, doc, fields) {
    this.strategy = strategy;
    this.doc = doc;
    this.fields = fields;
  }

  parse() {
    return this.strategy(this.doc, this.fields);
  }
}

export default Parser;
