/* eslint-disable */
// @ts-nocheck

export const applyHandler = (target) => ({
  apply(fn) {
    const ret = Reflect.apply(...arguments);
    console.log("call %s", fn.name);

    if (ret === undefined) {
      return target;
    }

    return ret;
  }
})
