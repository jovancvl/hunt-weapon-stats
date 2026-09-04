import { AmmoInfo } from "../model/ammo-info";
import { AmmoStats } from "../model/ammo-stats";
import { DamageBreakpoint } from "../model/damage"
import { ActionType, Weapon } from "../model/weapon";

const BASE_DAMAGE = 150
const OPTIMAL_RANGE = 13
const DROP_RANGE = 30
const SPREAD = 25
const VERTICAL_RECOIL = 20
const MUZZLE_VELOCITY = 425
const AMMO_RESERVE = 12

const NAME = "Specter 1882"
const COST = 188
const SIZE = 4
const ACTION = ActionType.PUMP_ACTION
const SWAY = 77
const RATE_OF_FIRE = 20
const CYCLE_TIME = 1
const RELOAD_TIME = 14.8
const MAGAZINE = 4
const HAS_EXTRA_BULLET = true
const MELEE_DAMAGE = 27
const STAMINA_CONSUMPTION = 12
const HEAVY_MELEE_DAMAGE = 54
const HEAVY_STAMINA_CONSUMPTION = 25
const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_Specter_1882.png"
const BASE_AMMO_DAMAGE_BREAKPOINTS: DamageBreakpoint[] = [
  {
    range: 0,
    damage: BASE_DAMAGE
  },
  {
    range: OPTIMAL_RANGE,
    damage: BASE_DAMAGE
  },
]

/**
 * Includes all available ammo types, including the base ammo, which is always first.
 */
const AMMO = [
  new AmmoStats({
    info: AmmoInfo.BUCKSHOT,
    scarce: false,

    dropRange: DROP_RANGE,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
  }),
  new AmmoStats({
    info: AmmoInfo.SHELL_DRAGONBREATH,
    scarce: false,

    dropRange: DROP_RANGE,
    spread: 60,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: 100,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: [
      {
        range: 0,
        damage: 141
      },
      {
        range: OPTIMAL_RANGE,
        damage: 141
      },
    ]
  }),
  new AmmoStats({
    info: AmmoInfo.SHELL_FLECHETTE,
    scarce: false,

    dropRange: DROP_RANGE,
    spread: SPREAD, // same as base?
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: [
      {
        range: 0,
        damage: 138
      },
      {
        range: OPTIMAL_RANGE,
        damage: 138
      },
    ]
  }),
  new AmmoStats({
    info: AmmoInfo.SHELL_PENNYSHOT,
    scarce: false,

    dropRange: DROP_RANGE,
    spread: 75,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: 18,
    damageBreakpoints: [
      {
        range: 0,
        damage: 150
      },
      {
        range: OPTIMAL_RANGE,
        damage: 150
      },
    ]
  }),
  new AmmoStats({
    info: AmmoInfo.SHELL_SLUG,
    scarce: false,

    dropRange: DROP_RANGE,
    spread: 75,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: 8,
    damageBreakpoints: [
      {
        range: 0,
        damage: 150
      },
      {
        range: 16,
        damage: 150
      },
    ]
  }),
]

export const SPECTER_1882: Weapon = new Weapon({
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