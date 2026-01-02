export interface DamageBreakpoint {
  range: number,
  damage: number
}

/**
 * y = mx + b
 */
export class DamageFunction {
  m: number
  b: number
  range: number

  constructor(m: number, b: number, range: number) {
    this.m = m
    this.b = b
    this.range = range
  }

  calculate(range: number) {
    return new Damage(this.m * range + this.b)
  }
}

export class Damage {
  readonly chest: number
  readonly cock: number
  readonly arms: number
  readonly legs: number
  constructor(baseDamage: number) {
    this.chest = baseDamage
    this.cock = Math.floor(baseDamage * 0.9231)
    this.arms = Math.floor(baseDamage * 0.6923)
    this.legs = Math.floor(baseDamage * 0.6154)
  }
}