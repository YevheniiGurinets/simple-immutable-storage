import {  Api  } from './Api'
import { F, TPath } from './utils/internal';

export class SIS<T> extends Api {
  constructor() {
    super()
  }

  // @ts-ignore
  public set(key: string, value: unknown) {
    const updated = super.set(key, value);
    return SIS.create<T>(updated)
  }

  public setIn(path: TPath, value: unknown) {
    const updated = super.setIn(path, value)
    return SIS.create<T>(updated)
  }

  // TODO: find a legal way for setting sis proto and fix create method
  static create<T>(from: any): T & Api {
    const sis = Object.create(new SIS());
    const data = { ...from };
    // @ts-ignore
    data.__proto__ = sis;
    return F(data) as T & Api
  }
}

/**
 * @returns {Object} immutable object with api in th prototype for working with
 * this object
 *
 * set (key, value) {
    return freeze({...this, [key]: F(value)});
  },
 setIn (path, value) {
    return setIn(path, value, this)
  },
 get (key) {
    return this[key];
  },
 getInOr (path, or) {
    return getInOr(path, this, or)
  }
 */
function createSIS<T> () {
  return SIS.create<T>({})
}

export default createSIS;
