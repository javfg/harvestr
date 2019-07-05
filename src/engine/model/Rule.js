// Config.
import { config } from '../../config/Config';

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

    const relevantEntries = relevantField.entries.filter(entry => this.entry.includes(entry.name));
    if (!relevantEntries) {
      return;
    }

    const relevantValues = relevantEntries.map(relevantEntry => relevantEntry.value).flat();

    config.debugRankingEngine && console.log('computing', this.name, 'with operator', this.operator, 'on', item.name, 'value is', relevantValues, 'rule values', this.values);

    const operator = new Operator(this.operator);
    return operator.compute(this, relevantValues, item, items);
  }
}


export default Rule;
