import { TPath, formatPath } from './internal';

type TGetInOr = (paths: TPath, obj: object, or?: unknown) => unknown;

const innerGetInOr: TGetInOr = function(paths, obj, or) {
  let val: any = obj;
  let idx = 0;
  let p;
  while (idx < paths.length) {
    if (val === null || val === undefined) {
      return;
    }
    p = paths[idx];
    val = val[p];
    idx += 1;
  }
  return val === undefined
    ? or
    : val
}

export const getInOr = formatPath<TGetInOr>(innerGetInOr);
