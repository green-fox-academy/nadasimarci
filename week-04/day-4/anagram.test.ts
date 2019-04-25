'use strict';

import { checkAnagram } from './anagram';

declare function require(path: string): any;
let test = require('tape').test;

test('comparing anagrams', function (t: any) {

  const actual: boolean = checkAnagram('mark', 'karm');
  const expected: boolean = true;

  t.equal(actual, expected);
  t.end();
})

