class Parser {
  constructor(strategy, doc, fields, multiple) {
    this.strategy = strategy;
    this.doc = doc;
    this.fields = fields;
    this.multiple = multiple;
  }

  parse() {
    const res = this.fields.map(f => {
      let data = this.strategy(this.doc, f);

      let res = {
        name: f.name,
        field: f.field,
        data
      };

      // Add saveData field if present in query.
      if (f.saveData) {
        res["saveData"] = f.saveData;
      }

      return res;
    });

    return res;
  }
}

export default Parser;
