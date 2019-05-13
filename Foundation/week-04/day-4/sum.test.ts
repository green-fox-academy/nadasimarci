'use strict';

import * as test from 'tape';
import { Sum } from './sum';

test('sums up a list of integers', t => {
  const mySum: Sum = new Sum();
  const actual: number = mySum.sum([1, 2, 3, 4, 5]);
  const expected: number = 15;
  t.equal(actual, expected);
  t.end();
})

