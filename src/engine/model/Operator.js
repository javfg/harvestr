// Operators.
import { atLeastOperator } from '../operators/atLeastOperator.js';
import { includesOperator } from '../operators/includesOperator.js';
import { betweenOperator } from '../operators/betweenOperator.js';


class Operator {
  constructor(computeFunction) {
    this.computeStrategy = this.getComputeStrategy(computeFunction);
  }

  getComputeStrategy = (computeFunctionName) => {
    switch (computeFunctionName) {
      case 'ATLEAST':
        return atLeastOperator;
      case 'BETWEEN':
        return betweenOperator;
      case 'INCLUDES':
        return includesOperator;

        default:
          return undefined;
    }
  };


  compute = (ruleValues, value) => this.computeStrategy(ruleValues, value);
}

export default Operator;
