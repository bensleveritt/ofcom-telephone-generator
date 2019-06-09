import test from 'ava';

import { leftPad } from '../leftPad';

test('outputs `000` with nothing to pad', t => {
  t.true(leftPad(0) === '000');
});

test('outputs `001`', t => {
  t.true(leftPad(1) === '001');
});

test('outputs `001`', t => {
  t.true(leftPad('1') === '001');
});

test('outputs `999`', t => {
  t.true(leftPad('999') === '999');
});

test('outputs original string on overflow', t => {
  t.true(leftPad('9999') === '9999');
});
