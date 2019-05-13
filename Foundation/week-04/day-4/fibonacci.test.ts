'use strict';

import * as test from 'tape';

import { fibonacci } from './fibonacci'

test('Testing fibonacci function', t => {
  let actual: number = fibonacci(2);
  let expected: number = 1;


  t.equal(actual, expected, 'Test fibonacci');
  t.end();
})

