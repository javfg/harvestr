// Ranking engine model.
import Operator from "./Operator";


class Rule {
  constructor(name, entry, field, importance, query, operator, values) {
    this.name = name;
    this.entry = entry;
    this.field = field;
    this.importance = importance;
    this.query = query;
    this.operator = operator;
    this.values = values;
  }


  run(item, items) {
    const relevantQuery = item.queries.find(query => query.name === this.query);
    if (!relevantQuery) {
      return;
    }

    const relevantField = relevantQuery.fields.find(field => field.name === this.field);
    if (!relevantField) {
      return;
    }

    const relevantEntry = relevantField.entries.find(entry => this.entry.includes(entry.name));
    if (!relevantEntry) {
      return;
    }

    const relevantValues = relevantEntry.value;

    console.log('computing', this.name, 'with operator', this.operator, 'on', item.name, 'value is', relevantValues, 'rule values', this.values);

    const operator = new Operator(this.operator);
    operator.compute(this, relevantValues, item, items);

    /*
    1.1.1. get relevant entry values.
    1.1.2. get relevant operator, value and importance from rule.
    1.1.3. compute operation with entry values and rule values.
    1.1.4. accumulate score and store explanation.
    */
  }
}


export default Rule;
