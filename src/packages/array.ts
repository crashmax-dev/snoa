/* eslint-disable */
import { applyHandler } from '../utils.js'

export class SnoaArray<T extends unknown[]> extends Array {
  // private proxy: this

  constructor(value: T) {
    // @ts-ignore
    super(...value)

    return new Proxy(this, {
      get(target, prop, receiver) {
        const ref = Reflect.get(target, prop, receiver)
        if (typeof ref === 'function') {
          return new Proxy(ref, applyHandler(target))
        }
        return ref
      }
    })
  }
}

// const arr = new SnoaArray([1, 2, 3])
// arr
//   .do()
//   .forEach(() => { })
//   .join(",")
