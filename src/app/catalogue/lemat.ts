import { AmmoInfo } from "../arsenal/ammo-info";
import { AmmoStats } from "../arsenal/ammo-stats";
import { ActionType, Weapon } from "../arsenal/weapon";

const BASE_DAMAGE = 97
const OPTIMAL_RANGE = 20
const DROP_RANGE = 75
const SPREAD = 40
const VERTICAL_RECOIL = 6
const MUZZLE_VELOCITY = 375
const AMMO_RESERVE = 18

const NAME = "LeMat"
const COST = 83
const SIZE = 1
const ACTION = ActionType.SINGLE_ACTION
const SWAY = 128
const RATE_OF_FIRE = 25
const CYCLE_TIME = 1.3
const RELOAD_TIME = 15.8
const MAGAZINE = 6
const HAS_EXTRA_BULLET = false
const MELEE_DAMAGE = 13
const STAMINA_CONSUMPTION = 10
const HEAVY_MELEE_DAMAGE = 31
const HEAVY_STAMINA_CONSUMPTION = 20
const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_LeMat.png"

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
    dropRange: DROP_RANGE - 5,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL + 2,
    muzzleVelocity: MUZZLE_VELOCITY - 40,
    ammoReserve: AMMO_RESERVE
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
]

export const LEMAT: Weapon = new Weapon({
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