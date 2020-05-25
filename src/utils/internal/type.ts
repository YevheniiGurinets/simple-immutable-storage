export enum TYPES {
  OBJECT = 'Object',
  ARRAY = 'Array',
  DATE = 'Date',
  NULL = 'Null',
  UNDEFINED = 'Undefined'
}

export function type (val: unknown): TYPES {
  return val === null
    ? TYPES.NULL
    : val === undefined
      ? TYPES.UNDEFINED
      : (Object.prototype.toString.call(val).slice(8, -1) as TYPES);
}
