/**
 * @author molimawka
 */
const applyHandler = (target) => ({
  apply() {
    const ret = Reflect.apply(...arguments)
    if (ret === undefined) {
      return target
    }

    return ret
  }
})

const constructHandler = {
  construct() {
    return new Proxy(Reflect.construct(...arguments), {
      get(target) {
        const ret = Reflect.get(...arguments)
        console.log('ret %s', ret)

        if (typeof ret === 'function') {
          return new Proxy(ret, applyHandler(target))
        }

        return ret
      }
    });
  }
};

const SnoaArray = new Proxy(Array, constructHandler)
const value = new SnoaArray(1, 2, 3)
  .forEach((v) => console.log(v))
  .join(',')

console.log(value)
