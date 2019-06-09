const random = () => Math.round(Math.random() * 999);
const pad = (num: number) => ('000' + num).slice(-3);

/**
 * Ofcom Telgen
 * @return {String} A generated UK telephone number
 */
export default function(): string {
  const telNumber = pad(random());
  return `01632960${telNumber}`;
}
