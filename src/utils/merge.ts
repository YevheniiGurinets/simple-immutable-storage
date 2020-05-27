import { transformToImmutable } from './transformToImmutable'
import { F } from './internal';

export const merge = (target: object, source: object, isRecursively: boolean) => {
  if (isRecursively) return F({ ...target, ...transformToImmutable(source) })
  return F({ ...target, ...transformToImmutable(source) })
};
