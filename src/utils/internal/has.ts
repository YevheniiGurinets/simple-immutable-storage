export function has (prop: string, obj: object): boolean {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
