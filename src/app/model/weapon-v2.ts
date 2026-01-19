import { AmmoName } from "./ammo-name"
import { Ammo, CompactAmmo, CompactFmjAmmo, CompactHighVelocityAmmo } from "./ammo-v2"
import { ActionType } from "./weapon"

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
    return this.availableAmmo.find(a => ammoTypes.has(a.name)) !== undefined
  }
}

export const FRONTIER_73C_V2: WeaponV2 = new WeaponV2({
  name: "Frontier 73C",
  cost: 41,
  size: 3,
  action: ActionType.LEVER_ACTION,

  availableAmmo: [
    new CompactAmmo({
      baseDamage: 110,
      dropRange: 140,
      spread: 17.5,
      verticalRecoil: 5,
      muzzleVelocity: 400,
      ammoReserve: 28,
    }),
    new CompactFmjAmmo({
      baseDamage: 110,
      dropRange: 125,
      spread: 17.5,
      verticalRecoil: 8,
      muzzleVelocity: 330,
      ammoReserve: 28,
    }),
    new CompactHighVelocityAmmo({
      baseDamage: 104,
      dropRange: 160,
      spread: 17.5,
      verticalRecoil: 8,
      muzzleVelocity: 500,
      ammoReserve: 18,
    })
  ],

  sway: 77,
  rateOfFire: 29,
  cycleTime: 1.2,
  reloadTime: 10.1,
  magazine: 7,
  hasExtraBullet: true,

  meleeDamage: 27,
  staminaConsumption: 12,
  heavyMeleeDamage: 54,
  heavyStaminaConsumption: 25,

  image: "https://huntshowdown.wiki.gg/images/Weapon_Frontier_73C.png"
})