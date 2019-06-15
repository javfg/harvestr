class Rule {
  constructor(name, entry, field, importance, query, type, value) {
    this.name = name;
    this.entry = entry;
    this.field = field;
    this.importance = importance;
    this.query = query;
    this.type = type;
    this.value = value;
  }


  compute(item) {
    console.log('computing', this.name, 'on', item.name);

    /*
    1.1.1. get relevant entry values.
    1.1.2. get relevant operator, value and importance from rule.
    1.1.3. compute operation with entry values and rule values.
    1.1.4. accumulate score and store explanation.
    */
  }
}


export default Rule;
