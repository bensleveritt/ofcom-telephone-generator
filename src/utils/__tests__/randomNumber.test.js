import test from 'ava';

import { randomNumber } from '../randomNumber';

test('returns a number in range', t => {
  const toTest = randomNumber();
  t.true(toTest >= 0 && toTest <= 999);
});

test('returns a different number in subsequent calls', t => {
  const toTest1 = randomNumber();
  const toTest2 = randomNumber();
  t.true(toTest1 !== toTest2);
});
