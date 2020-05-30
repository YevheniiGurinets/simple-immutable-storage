import { type, TYPES, F } from './internal';

export const transformToImmutable = <T>(source: any): Partial<T> => {
  let result: any;
  switch (type(source)) {
    case TYPES.ARRAY:
      result = source.map((item: unknown) => transformToImmutable(item))
      break;
    case TYPES.OBJECT:
      result = {}
      for (const key in source) {
        result[key] = transformToImmutable(source[key]);
      }
      break;
    default:
      result = source;
  }

  return F(result)
}
