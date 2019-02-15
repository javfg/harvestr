import get from "lodash/get";

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

      return {
        name: f.name,
        field: f.field,
        data
      };
    });

    return res;
  }
}

export default Parser;
