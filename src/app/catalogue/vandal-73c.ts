import { AmmoStats, AmmoInfo } from "../arsenal/ammo";
import { ActionType, Weapon } from "../arsenal/weapon";

const BASE_DAMAGE = 107
const OPTIMAL_RANGE = 20
const DROP_RANGE = 120
const SPREAD = 25
const VERTICAL_RECOIL = 8
const MUZZLE_VELOCITY = 370
const AMMO_RESERVE = 28

const NAME = "Vandal 73C"
const COST = 35
const SIZE = 2
const ACTION = ActionType.LEVER_ACTION
const SWAY = 100
const RATE_OF_FIRE = 28
const CYCLE_TIME = 1.2
const RELOAD_TIME = 9.4
const MAGAZINE = 6
const HAS_EXTRA_BULLET = true
const MELEE_DAMAGE = 13
const STAMINA_CONSUMPTION = 12
const HEAVY_MELEE_DAMAGE = 31
const HEAVY_STAMINA_CONSUMPTION = 25
const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_Vandal_73C.png"

/**
 * Includes all available ammo types, including the base ammo, which is always first.
 */
const AMMO = [
  new AmmoStats({
    info: AmmoInfo.COMPACT,
    scarce: false,

    baseDamage: BASE_DAMAGE,
    optimalRange: OPTIMAL_RANGE,
    dropRange: DROP_RANGE,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: AMMO_RESERVE
  }),
  new AmmoStats({
    info: AmmoInfo.COMPACT_FMJ,
    scarce: false,

    baseDamage: BASE_DAMAGE,
    optimalRange: OPTIMAL_RANGE + 10,
    dropRange: DROP_RANGE - 10,
    spread: SPREAD + 10,
    verticalRecoil: VERTICAL_RECOIL + 3,
    muzzleVelocity: MUZZLE_VELOCITY - 60,
    ammoReserve: AMMO_RESERVE
  }),
  new AmmoStats({
    info: AmmoInfo.COMPACT_HIGH_VELOCITY,
    scarce: false,

    baseDamage: BASE_DAMAGE - 6,
    optimalRange: OPTIMAL_RANGE,
    dropRange: DROP_RANGE + 25,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL + 4,
    muzzleVelocity: MUZZLE_VELOCITY + 100,
    ammoReserve: AMMO_RESERVE - 10
  }),
  new AmmoStats({
    info: AmmoInfo.COMPACT_INCENDIARY,
    scarce: false,

    baseDamage: BASE_DAMAGE,
    optimalRange: OPTIMAL_RANGE,
    dropRange: DROP_RANGE,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: AMMO_RESERVE
  }),
  new AmmoStats({
    info: AmmoInfo.COMPACT_POISON,
    scarce: false,

    baseDamage: BASE_DAMAGE,
    optimalRange: OPTIMAL_RANGE,
    dropRange: DROP_RANGE,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: AMMO_RESERVE
  }),
  new AmmoStats({
    info: AmmoInfo.COMPACT_SUBSONIC,
    scarce: false,

    baseDamage: BASE_DAMAGE,
    optimalRange: OPTIMAL_RANGE,
    dropRange: DROP_RANGE - 25,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY - 118,
    ammoReserve: AMMO_RESERVE + 6
  })
]

export const VANDAL_73C: Weapon = new Weapon({
  name: NAME,
  cost: COST,
  size: SIZE,
  action: ACTION,

  availableAmmo: AMMO,

  sway: SWAY,
  rateOfFire: RATE_OF_FIRE,
  cycleTime: CYCLE_TIME,
  reloadTime: RELOAD_TIME,
  magazine: MAGAZINE,
  hasExtraBullet: HAS_EXTRA_BULLET,

  meleeDamage: MELEE_DAMAGE,
  staminaConsumption: STAMINA_CONSUMPTION,
  heavyMeleeDamage: HEAVY_MELEE_DAMAGE,
  heavyStaminaConsumption: HEAVY_STAMINA_CONSUMPTION,

  image: IMAGE
})