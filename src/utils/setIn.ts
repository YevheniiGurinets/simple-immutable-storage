import { TPath, formatPath, F, isNil, has, isInteger, type, TYPES } from './internal';

type TSetIn = (paths: TPath, val: unknown, obj: object) => unknown

const innerSetIn: TSetIn = function(path, val, obj) {

  if (path.length === 0) {
    return type(val) === TYPES.OBJECT || type(val) === TYPES.ARRAY
      ? F(val)
      : F({ [(val as string)]: val });
  }

  const key = path[0];

  if (path.length > 1) {
    const nextObj = (!isNil(obj) && has((key as string), obj))
      // @ts-ignore
      ? obj[key]
      : isInteger(Number(path[1])) ? [] : {};

    // eslint-disable-next-line no-param-reassign
    val = innerSetIn(Array.prototype.slice.call(path, 1), val, nextObj);
  }

  if (isInteger(Number(key)) && Array.isArray(obj)) {
    const arr: unknown[] = [...obj];
    arr[(key as number)] = F(val);
    return F(arr);
  } else {
    return F({ ...obj, [key]: F(val) });
  }
}

export const setIn = formatPath<TSetIn>(innerSetIn);
