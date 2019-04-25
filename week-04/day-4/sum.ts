'use strict';

export class Sum {

  sum(integers: number[]): number {
    let totalValue: number = 0;

    if (integers[0] === undefined) {
      return 0
    }

    else {
      for (let i: number = 0; i < integers.length; i++) {
        totalValue = totalValue + integers[i];
      }
      return totalValue;
    }
  }
}

