import Query from './Query';
import Rule from './Rule';


class Item {
  constructor(name, queries, rules, savedData, score = 0, explanations = []) {
    this.name = name;
    this.savedData = savedData;
    this.score = score;
    this.explanations = explanations;

    this.queries = queries.map(query => new Query(
      query.name,
      query.urlTemplate,
      query.fields,
      query.fetcher,
      query.parser,
      query.requires,
      query.saveData,
      this.savedData
    ));

    this.rules = rules.map(rule => new Rule(
      rule.name,
      rule.entry,
      rule.field,
      rule.importance,
      rule.query,
      rule.operator,
      rule.values,
      rule.parameters
    ));
  }


  run = async () => Promise.all(this.queries.map(query => query.run(this.name)));
}


export default Item;
