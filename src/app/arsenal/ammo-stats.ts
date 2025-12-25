import { AmmoInfo } from "./ammo-info"

export interface AmmoStatsInterface {
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
}

export class AmmoStats {
  info: AmmoInfo
  scarce: boolean

  baseDamage: number
  optimalRange: number
  dropRange: number
  spread: number
  verticalRecoil: number
  muzzleVelocity: number
  ammoReserve: number

  constructor(ammoStatsInterface: AmmoStatsInterface) {
    this.info = ammoStatsInterface.info
    this.scarce = ammoStatsInterface.scarce

    this.baseDamage = ammoStatsInterface.baseDamage
    this.optimalRange = ammoStatsInterface.optimalRange
    this.dropRange = ammoStatsInterface.dropRange
    this.spread = ammoStatsInterface.spread
    this.verticalRecoil = ammoStatsInterface.verticalRecoil
    this.muzzleVelocity = ammoStatsInterface.muzzleVelocity
    this.ammoReserve = ammoStatsInterface.ammoReserve
  }  

  static readonly EMPTY = new AmmoStats({
    info: AmmoInfo.COMPACT,
    scarce: false,

    baseDamage: 0,
    optimalRange: 0,
    dropRange: 0,
    spread: 0,
    verticalRecoil: 0,
    muzzleVelocity: 0,
    ammoReserve: 0,
  })
}