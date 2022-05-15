import { SnoaArray } from './array.js'

export class SnoaObject<T> {
  constructor(private value: T) { }

  keys(): SnoaArray<string[]> {
    const keys = Object.keys(this.value)
    return new SnoaArray(keys)
  }
}

// class Foo extends Object {
//   constructor(value) {
//     super(value)
//   }
// }
// new Foo({})
