import { randomNumber } from './utils/randomNumber';
import { leftPad } from './utils/leftPad';

/**
 * Ofcom Telgen
 * @return {String} A generated UK telephone number
 */
export default (): string => `01632960${leftPad(randomNumber())}`;
