/**
 * leftPad
 * Fairly standard left pad implementation for `000`
 * @param num Number to be padded
 * @returns {string}
 */
export const leftPad = (num: number): string => ('000' + num).slice(-3);
