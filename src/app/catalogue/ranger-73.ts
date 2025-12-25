import { AmmoInfo } from "../arsenal/ammo-info";
import { AmmoStats } from "../arsenal/ammo-stats";
import { ActionType, Weapon } from "../arsenal/weapon";

const BASE_DAMAGE = 110
const OPTIMAL_RANGE = 20
const DROP_RANGE = 140
const SPREAD = 17.5
const VERTICAL_RECOIL = 4
const MUZZLE_VELOCITY = 40
const AMMO_RESERVE = 20

const NAME = "Ranger 73"
const COST = 75
const SIZE = 3
const ACTION = ActionType.LEVER_ACTION
const SWAY = 77
const RATE_OF_FIRE = 31
const CYCLE_TIME = 1.2
const RELOAD_TIME = 16.4
const MAGAZINE = 15
const HAS_EXTRA_BULLET = true
const MELEE_DAMAGE = 27
const STAMINA_CONSUMPTION = 12
const HEAVY_MELEE_DAMAGE = 54
const HEAVY_STAMINA_CONSUMPTION = 25
const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_Ranger_73.png"

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
    dropRange: DROP_RANGE - 15,
    spread: SPREAD + 10,
    verticalRecoil: VERTICAL_RECOIL + 3,
    muzzleVelocity: MUZZLE_VELOCITY - 70,
    ammoReserve: AMMO_RESERVE
  }),
  new AmmoStats({
    info: AmmoInfo.COMPACT_HIGH_VELOCITY,
    scarce: false,

    baseDamage: BASE_DAMAGE - 6,
    optimalRange: OPTIMAL_RANGE,
    dropRange: DROP_RANGE + 20,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL + 3,
    muzzleVelocity: MUZZLE_VELOCITY + 100,
    ammoReserve: AMMO_RESERVE - 7
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
    dropRange: DROP_RANGE - 30,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY - 137,
    ammoReserve: AMMO_RESERVE + 4
  })
]

export const RANGER_73: Weapon = new Weapon({
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