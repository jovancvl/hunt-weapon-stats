import { AmmoInfo } from "./ammo-info"
import { DamageBreakpoint, DamageFunction } from "./damage"

export interface AmmoStatsInterface {
  info: AmmoInfo
  scarce: boolean

  // baseDamage: number
  
  // optimalRange: number
  dropRange: number
  spread: number
  verticalRecoil: number
  muzzleVelocity: number
  ammoReserve: number

  damageBreakpoints: DamageBreakpoint[]
}

export class AmmoStats {
  info: AmmoInfo
  scarce: boolean

  baseDamage: number
  /**
   * For rifles, this is the range at which damage dropoff starts happening
   * 
   * For weapons that can kill in a single shot, this is the range at which it no longer does so reliably.
   */
  optimalRange: number
  dropRange: number
  spread: number
  verticalRecoil: number
  muzzleVelocity: number
  ammoReserve: number

  damageFunctions: DamageFunction[]

  constructor(ammoStatsInterface: AmmoStatsInterface) {
    this.info = ammoStatsInterface.info
    this.scarce = ammoStatsInterface.scarce

    this.dropRange = ammoStatsInterface.dropRange
    this.spread = ammoStatsInterface.spread
    this.verticalRecoil = ammoStatsInterface.verticalRecoil
    this.muzzleVelocity = ammoStatsInterface.muzzleVelocity
    this.ammoReserve = ammoStatsInterface.ammoReserve

    this.damageFunctions = this.calculateDamageFunctions(ammoStatsInterface.damageBreakpoints)
    this.baseDamage = this.calculateDamage(0).chest
    this.optimalRange = this.damageFunctions.length > 0 ? this.damageFunctions[0].range : 0
  }

  private calculateDamageFunctions(breakpoints: DamageBreakpoint[]) {
    const functions: DamageFunction[] = []
    const length = breakpoints.length - 1
    let i = 0
    while (i < length) {
      const leftBreakpoint = breakpoints[i]
      const rightBreakpoint = breakpoints[i + 1]

      // find the linear function
      const y1 = leftBreakpoint.damage
      const y2 = rightBreakpoint.damage
      const x1 = leftBreakpoint.range
      const x2 = rightBreakpoint.range

      const m = (y2 - y1) / (x2 - x1) // slope
      // y = mx + b
      const b = y1 - m * x1

      functions.push(new DamageFunction(m, b, rightBreakpoint.range))
      i++
    }
    return functions
  }

  calculateDamage(range: number) {
    if (range < 0 || range > 100) {
      throw new Error("Range cannot be negative or above 100")
    }

    if (this.damageFunctions.length === 0) {
      throw new Error("damageFunctions property empty")
    }

    // find the damage function to use
    let i = 0
    while (i < this.damageFunctions.length && this.damageFunctions[i].range < range) {
      i++
    }
    if (i === this.damageFunctions.length) {
      i--
    }
    return this.damageFunctions[i].calculate(range)
  }

  getDamageArray() {
    const result: number[] = []
    const maxRange = this.damageFunctions[this.damageFunctions.length - 1].range + 1
    for(let i = 0; i < maxRange; i++) {
      const value = Math.round(this.calculateDamage(i).chest * 100) / 100
      result.push(value)
    }
    return result
  }

  static readonly EMPTY = new AmmoStats({
    info: AmmoInfo.COMPACT,
    scarce: false,

    dropRange: 0,
    spread: 0,
    verticalRecoil: 0,
    muzzleVelocity: 0,
    ammoReserve: 0,
    damageBreakpoints: [
      {
        range: 0,
        damage: 150
      },
      {
        range: 100,
        damage: 0
      }
    ]
  })
}