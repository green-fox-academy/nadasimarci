'use strict';

import * as test from 'tape';
import { allLettersAsKeys } from './count-letters';

test('count letters', t => {
  t.deepEqual(allLettersAsKeys('marci'), { 'a': 1, 'c': 1, 'i': 1, 'm': 1, 'r': 1, });
  t.end();
});

