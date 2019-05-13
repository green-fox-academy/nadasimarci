import * as test from 'tape';

import { Apple } from './apple'

test('add 2 numbers', t => {
  const operations = new Apple();

  let actual = operations.getApple();
  let expected = 'apple';

  t.equal(actual, expected);
  t.end();
});

