/**
 * leftPad
 * Fairly standard left pad implementation for `000`
 * @param num Number to be padded
 * @returns {string}
 */
export const leftPad = (num: number | string): string =>
  ('000' + num).slice(
    num.toString().length > 3 ? num.toString().length - 1 : -3
  );
