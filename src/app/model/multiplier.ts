export interface MultiplierBreakpoint {
  range: number
  multiplier: number
}

export class MultiplierFunction {
  m: number
  b: number
  range: number

  constructor (m: number, b: number, range: number) {
    this.m = m
    this.b = b
    this.range = range
  }

  calculateMultiplier(range: number) {
    return this.m * range + this.b
  }
}

export const COMPACT_AMMO_MULTIPLIER_BREAKPOINTS: MultiplierBreakpoint[] = [
  {
    range: 0,
    multiplier: 1
  },
  {
    range: 20,
    multiplier: 1
  },
  {
    range: 50,
    multiplier: 0.61818181
  },
  {
    range: 100,
    multiplier: 0.5
  }
]

export const COMPACT_FMJ_AMMO_MULTIPLIER_BREAKPOINTS: MultiplierBreakpoint[] = [
  {
    range: 0,
    multiplier: 1
  },
  {
    range: 30,
    multiplier: 1
  },
  {
    range: 60,
    multiplier: 0.61818181
  },
  {
    range: 100,
    multiplier: 0.52727272
  }
]