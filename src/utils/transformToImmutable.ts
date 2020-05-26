import { type, TYPES, F } from './internal';

export const transformToImmutable = <T>(source: any): Partial<T> => {
  let result: any;
  switch (type(source)) {
    case TYPES.ARRAY:
      result = source.map((item: unknown) => transformToImmutable(item))
      result = F(result)
      break;
    case TYPES.OBJECT:
      result = {}
      for (const key in source) {
        result[key] = transformToImmutable(source[key]);
      }
      result = F(result)
      break;
    default:
      result = source;
  }

  return F(result)
}
