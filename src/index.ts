import {  Api  } from './Api'
import { F, TPath } from './utils/internal';
import { transformToImmutable } from './utils/transformToImmutable';

export class SIS<T> extends Api {
  // @ts-ignore
  public set(key: string, value: unknown): T & Api {
    const updated = super.set(key, value);
    return SIS.create<T>(updated)
  }

  public setIn(path: TPath, value: unknown): T & Api {
    const updated = super.setIn(path, value)
    return SIS.create<T>(updated)
  }

  public merge(value: object): T & Api {
    const merged = super.merge(value)
    return SIS.create<T>(merged)
  }

  static create<T>(from?: any, isTransformationNeeded: boolean = false): T & Api {
    const sis = Object.create(new SIS());
    const data = Object.assign(sis, isTransformationNeeded ? transformToImmutable<T>(from) : from);
    return F(data) as T & Api
  }
}

/**
 * @returns {Object} immutable object that provide a convenient interface for data manipulations

 @example  : existing methods
 set (key, value) {
    return {...this, [key]: F(value)};
  },
 setIn (path, value) {
    return setIn(path, value, this)
  },
 get (key) {
    return this[key];
  },
 getInOr (path, or) {
    return getInOr(path, this, or)
  },
 merge(value: object) {
    return merge(this, value)
  }
 */
function createSIS<T> (from?: T) {
  return SIS.create<T>(from, true)
}

export default createSIS;
