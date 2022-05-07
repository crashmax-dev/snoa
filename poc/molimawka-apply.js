/**
 * @author molimawka
 */
class SnoaArray {
  constructor(value) {
    const t = new Array(value)
    const orgFuncs = {}
    const funcs = Object.getOwnPropertyNames(
      Object.getPrototypeOf(t)
    ).filter((name) => typeof t[name] === 'function')

    for (const funcName of funcs) {
      orgFuncs[funcName] = t[funcName]
      t[funcName] = function (...args) {
        console.log('call %s', funcName, 'arguments', args)
        const ret = orgFuncs[funcName].apply(this, args)
        console.log('ret', ret)

        if (ret === undefined) {
          return this
        }

        return ret
      }
    }

    return t
  }
}

const value = new SnoaArray([1, 2, 3])
  .forEach((v) => console.log(v))
  .join(',')
  .split(',')
  .map(Number)
  .reduce((acc, value) => {
    acc += value
    return acc
  })

console.log(value)
