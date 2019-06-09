/**
 * Generator module
 */
const random = () => Math.round(Math.random() * 999);
const pad = num => ('000' + num).slice(-3);

/**
 * Generator function
 * @return {String} A generated UK telephone number
 */
export default function() {
  const telNumber = pad(random());
  return `01632960${telNumber}`;
}
