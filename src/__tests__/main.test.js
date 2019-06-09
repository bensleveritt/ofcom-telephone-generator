import test from 'ava';

import telgen from '../main';

test('matches validation pattern when no area code provided', t => {
  t.true(/^01632960[0-9]{3}$/.test(telgen()));
});
