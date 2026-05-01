import { AmmoName } from "../ammo-name"
import { Ammo, CompactAmmo, CompactFmjAmmo, CompactHighVelocityAmmo } from "./ammo-v2"
import { ActionType } from "../weapon"

export interface WeaponInfo {
  name: string
  cost: number
  size: number
  action: ActionType

  availableAmmo: Ammo[]

  sway: number
  rateOfFire: number
  cycleTime: number
  reloadTime: number
  magazine: number
  hasExtraBullet: boolean

  meleeDamage: number
  staminaConsumption: number
  heavyMeleeDamage: number
  heavyStaminaConsumption: number

  image: string
}

export class WeaponV2 {
  name: string
  cost: number
  size: number
  action: ActionType

  activeAmmo: Ammo
  baseAmmo: Ammo
  availableAmmo: Ammo[]

  sway: number
  rateOfFire: number
  cycleTime: number
  reloadTime: number
  magazine: number
  hasExtraBullet: boolean

  meleeDamage: number
  staminaConsumption: number
  heavyMeleeDamage: number
  heavyStaminaConsumption: number

  image: string

  constructor (weapon: WeaponInfo) {
    this.name = weapon.name
    this.cost = weapon.cost
    this.size = weapon.size
    this.action = weapon.action

    if (weapon.availableAmmo.length === 0) {
      throw new Error("Weapon must have at least 1 available ammo - MUST be regular ammo for the weapon")
    }
    this.availableAmmo = weapon.availableAmmo
    this.baseAmmo = this.availableAmmo[0]
    this.activeAmmo = this.availableAmmo[0]

    this.sway = weapon.sway
    this.rateOfFire = weapon.rateOfFire
    this.cycleTime = weapon.cycleTime
    this.reloadTime = weapon.reloadTime
    this.magazine = weapon.magazine
    this.hasExtraBullet = weapon.hasExtraBullet

    this.meleeDamage = weapon.meleeDamage
    this.staminaConsumption = weapon.staminaConsumption
    this.heavyMeleeDamage = weapon.heavyMeleeDamage
    this.heavyStaminaConsumption = weapon.heavyStaminaConsumption

    this.image = weapon.image
  }

  hasAnyOfTheseCustomAmmoTypes(ammoTypes: Set<AmmoName>) {
    return this.availableAmmo.some(a => ammoTypes.has(a.name)) !== undefined
  }
}