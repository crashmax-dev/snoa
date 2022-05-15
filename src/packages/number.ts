import { SnoaString } from './string.js'

type ExcludeNumberType =
  | 'prototype'
  | 'MAX_SAFE_INTEGER'
  | 'MIN_SAFE_INTEGER'
  | 'NEGATIVE_INFINITY'
  | 'POSITIVE_INFINITY'
  | 'EPSILON'
  | 'MAX_VALUE'
  | 'MIN_VALUE'
  | 'NaN'
  | 'parseInt' //!
  | 'parseFloat' // !
  | 'toString'

type SnoaNumberImpl = Omit<NumberConstructor, ExcludeNumberType> & {
  // parseInt(radix?: number): number
  toStr(): SnoaString
}

export class SnoaNumber<T extends number> implements SnoaNumberImpl {
  constructor(private value: T) { }

  toStr(): SnoaString {
    return new SnoaString(this.value.toString())
  }

  isOdd(): boolean {
    return (this.value % 2) === 1
  }

  isEven(): boolean {
    return !this.isOdd()
  }

  isFinite(): boolean {
    return Number.isFinite(this.value)
  }

  isInteger(): boolean {
    return Number.isInteger(this.value)
  }

  isNaN(): boolean {
    return Number.isNaN(this.value)
  }

  isSafeInteger(): boolean {
    return Number.isSafeInteger(this.value)
  }

  // parseFloat(): number {
  //   return Number.parseFloat(this.value)
  // }

  // parseInt(radix?: number): number {
  //   return Number.parseInt(this.value, radix)
  // }
}

// class Foo implements A {
//   constructor() {
//   }
//   toString(radix?: number): string {
//     throw new Error('Method not implemented.')
//   }
//   toFixed(fractionDigits?: number): string {
//     throw new Error('Method not implemented.')
//   }
//   toExponential(fractionDigits?: number): string {
//     throw new Error('Method not implemented.')
//   }
//   toPrecision(precision?: number): string {
//     throw new Error('Method not implemented.')
//   }
//   valueOf(): number {
//     throw new Error('Method not implemented.')
//   }
//   toLocaleString(locales?: string | string[], options?: Intl.NumberFormatOptions): string {
//     throw new Error('Method not implemented.')
//   }
//   isFinite(number: unknown): boolean {
//     throw new Error('Method not implemented.')
//   }
//   isInteger(number: unknown): boolean {
//     throw new Error('Method not implemented.')
//   }
//   isNaN(number: unknown): boolean {
//     throw new Error('Method not implemented.')
//   }
//   isSafeInteger(number: unknown): boolean {
//     throw new Error('Method not implemented.')
//   }
//   parseFloat(string: string): number {
//     throw new Error('Method not implemented.')
//   }
//   parseInt(radix?: number): number {
//     throw new Error('Method not implemented.')
//   }
// }
