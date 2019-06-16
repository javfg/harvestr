// Operators.
import { atLeastOperator } from '../operators/atLeastOperator.js';
import { includesOperator } from '../operators/includesOperator.js';
import { betweenOperator } from '../operators/betweenOperator.js';
import { maxOperator } from '../operators/maxOperator.js';



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
      case 'MAX':
        return maxOperator;

        default:
          return undefined;
    }
  };


  compute = (rule, relevantValues, item, items) => this.computeStrategy(rule, relevantValues, item, items);
}

export default Operator;
