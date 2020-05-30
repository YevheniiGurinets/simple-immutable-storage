export function _isInteger(n: unknown): boolean { // eslint-disable-line no-underscore-dangle
  return ((n as number) << 0) === n;
}
export const isInteger = Number.isInteger || _isInteger;
