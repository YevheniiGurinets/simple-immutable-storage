export function isString (x: unknown): boolean {
  return Object.prototype.toString.call(x) === '[object String]';
}
