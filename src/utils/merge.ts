import { F, type, TYPES, has } from './internal';
import { transformToImmutable } from './transformToImmutable'


export const merge = (target: any, source: any) => {
  let result: any;

  switch (type(source)) {
    case TYPES.ARRAY:
      result = [ ...target ];
      source.forEach((item: unknown) => {
        result.push(transformToImmutable(item));
      })
      break;
    case TYPES.OBJECT:
      result = { ...target }
      for (const key in source) {
        result[key] = has(key, target)
          ? merge(target[key], source[key])
          : transformToImmutable(source[key]);
      }
      break;
    default:
      result = source;
  }

  return F(result)
};
