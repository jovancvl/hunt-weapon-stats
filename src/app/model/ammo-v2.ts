import { AmmoDescription } from "./ammo-description"
import { AmmoEffectSeverity, AmmoEffectType } from "./ammo-effect"
import { AmmoName } from "./ammo-name"
import { Damage } from "./damage"
import { MultiplierFunction, MultiplierBreakpoint, COMPACT_AMMO_MULTIPLIER_BREAKPOINTS, COMPACT_FMJ_AMMO_MULTIPLIER_BREAKPOINTS } from "./multiplier"

export interface AmmoStats {
  baseDamage: number
  dropRange: number
  spread: number
  verticalRecoil: number
  muzzleVelocity: number
  ammoReserve: number

  scarce?: boolean
}

interface AmmoInfo {
  name: AmmoName
  effect: AmmoEffectType
  severity: AmmoEffectSeverity
  description: string
  cost: number
  icon: string
}

export abstract class Ammo {
  name: AmmoName
  effect: AmmoEffectType
  severity: AmmoEffectSeverity
  description: string
  cost: number
  icon: string

  baseDamage: number
  optimalRange: number
  dropRange: number
  spread: number
  verticalRecoil: number
  muzzleVelocity: number
  ammoReserve: number

  scarce: boolean

  damageMultipliers: MultiplierFunction[]

  constructor (info: AmmoInfo, stats: AmmoStats, multiplierBreakpoints: MultiplierBreakpoint[]) {
    this.name = info.name
    this.effect = info.effect
    this.severity = info.severity
    this.description = info.description.replace('<EFFECT_SEVERITY>', info.severity)
    this.cost = info.cost
    this.icon = info.icon

    this.baseDamage = stats.baseDamage
    this.dropRange = stats.dropRange
    this.spread = stats.spread
    this.verticalRecoil = stats.verticalRecoil
    this.muzzleVelocity = stats.muzzleVelocity
    this.ammoReserve = stats.ammoReserve

    this.scarce = stats.scarce ? stats.scarce : false

    this.damageMultipliers = this.calculateDamageMultipliers(multiplierBreakpoints)

    this.optimalRange = this.damageMultipliers.length > 0 ? this.damageMultipliers[0].range : 0
  }

  private calculateDamageMultipliers(breakpoints: MultiplierBreakpoint[]) {
    const functions: MultiplierFunction[] = []
    const length = breakpoints.length - 1

    for (let i = 0; i < length; i++) {
      const leftBreakpoint = breakpoints[i]
      const rightBreakpoint = breakpoints[i + 1]

      // find the linear function
      const y1 = leftBreakpoint.multiplier
      const y2 = rightBreakpoint.multiplier
      const x1 = leftBreakpoint.range
      const x2 = rightBreakpoint.range

      const m = (y2 - y1) / (x2 - x1) // slope
      // y = mx + b
      const b = y1 - m * x1

      functions.push(new MultiplierFunction(m, b, rightBreakpoint.range))
    }

    return functions
  }

  calculateDamage(range: number) {
    if (range < 0 || range > 100) {
      throw new Error("Range cannot be negative or above 100")
    }

    if (this.damageMultipliers.length === 0) {
      throw new Error("damageFunctions property empty")
    }

    // find the multiplier function to use
    let i = 0
    while (i < this.damageMultipliers.length && this.damageMultipliers[i].range < range) {
      i++
    }
    if (i === this.damageMultipliers.length) {
      i--
    }

    const multiplier = this.damageMultipliers[i].calculateMultiplier(range)
    return new Damage(this.baseDamage * multiplier)
  }

  getDamageArray() {
    const result: number[] = []
    const maxRange = this.damageMultipliers[this.damageMultipliers.length - 1].range + 1 // usually 100 but it's like this for cases where I have missing values
    for (let i = 0; i < maxRange; i++) {
      const value = Math.round(this.calculateDamage(i).chest * 100) / 100
      result.push(value)
    }
    return result
  }
}

export class CompactAmmo extends Ammo {
  constructor (ammoStats: AmmoStats) {
    const info = {
      name: AmmoName.COMPACT,
      effect: AmmoEffectType.NA,
      severity: AmmoEffectSeverity.NA,
      description: AmmoDescription.COMPACT,
      cost: 0,
      icon: 'ammo-icons/ammo_compact-base.svg'
    }
    super(info, ammoStats, COMPACT_AMMO_MULTIPLIER_BREAKPOINTS)
  }
}

export class CompactIncendiaryAmmo extends Ammo {
  constructor (ammoStats: AmmoStats) {
    const info = {
      name: AmmoName.INCENDIARY,
      effect: AmmoEffectType.BURN,
      severity: AmmoEffectSeverity.MEDIUM,
      description: AmmoDescription.INCENDIARY,
      cost: 0,
      icon: 'ammo-icons/ammo_compact-incendiary.svg'
    }
    super(info, ammoStats, COMPACT_AMMO_MULTIPLIER_BREAKPOINTS)
  }
}

export class CompactPoisonAmmo extends Ammo {
  constructor(ammoStats: AmmoStats) {
    const info = {
      name: AmmoName.POISON,
      effect: AmmoEffectType.POISON,
      severity: AmmoEffectSeverity.MEDIUM,
      description: AmmoDescription.POISON,
      cost: 0,
      icon: 'ammo-icons/ammo_compact-poison.svg'
    }
    super(info, ammoStats, COMPACT_AMMO_MULTIPLIER_BREAKPOINTS)
  }
}

export class CompactFmjAmmo extends Ammo {
  constructor(stats: AmmoStats) {
    const info = {
      name: AmmoName.FMJ,
      description: AmmoDescription.FMJ,
      effect: AmmoEffectType.NA,
      severity: AmmoEffectSeverity.NA,
      cost: 50,
      icon: "ammo-icons/ammo_compact-fmj.svg"
    }
    super(info, stats, COMPACT_FMJ_AMMO_MULTIPLIER_BREAKPOINTS)
  }
}

export class CompactHighVelocityAmmo extends Ammo {
  constructor (stats: AmmoStats) {
    const info = {
      name: AmmoName.HIGH_VELOCITY,
      description: AmmoDescription.HIGH_VELOCITY,
      effect: AmmoEffectType.NA,
      severity: AmmoEffectSeverity.NA,
      cost: 50,
      icon: "ammo-icons/ammo_compact-hv.svg"
    }
    super(info, stats, COMPACT_AMMO_MULTIPLIER_BREAKPOINTS)
  }
}

export class CompactSubsonicAmmo extends Ammo {
  constructor (ammoStats: AmmoStats) {
    const info = {
      name: AmmoName.SUBSONIC,
      description: AmmoDescription.SUBSONIC,
      effect: AmmoEffectType.NA,
      severity: AmmoEffectSeverity.NA,
      cost: 50,
      icon: "ammo-icons/ammo_compact-subsonic.svg"
    }
    super(info, ammoStats, COMPACT_AMMO_MULTIPLIER_BREAKPOINTS)
  }
}