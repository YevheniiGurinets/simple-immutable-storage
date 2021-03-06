import { type, TYPES } from './type';

const freeze = Object.freeze;

export const F = function freezeIfObj <T extends unknown>(val: T): T {
  if (Object.isFrozen(val)) return val;

  return (type(val) === TYPES.ARRAY) || (type(val) === TYPES.OBJECT)
    ? freeze(val)
    : val
};
