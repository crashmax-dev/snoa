import { Snoa } from './snoa.js'
import {
  SnoaString,
  SnoaNumber,
  SnoaObject,
  SnoaArray
} from './packages/index.js'

const str = new SnoaString('hello world')
  .split(' ')
  .forEach((v) => console.log(v))
console.log(str)

const obj = new SnoaObject({ a: 1, b: 2, c: 3 })
  .keys()
console.log(obj)

const num = new SnoaNumber(123)
  .toStr()
  .split('')
  .map(Number)
console.log(num)

export { Snoa }
export default Snoa
