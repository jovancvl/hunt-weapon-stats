import { AmmoInfo } from "../model/ammo-info";
import { AmmoStats } from "../model/ammo-stats";
import { DamageBreakpoint } from "../model/damage"
import { ActionType, Weapon } from "../model/weapon";

const BASE_DAMAGE = 85
const OPTIMAL_RANGE = 20
const DROP_RANGE = 60
const SPREAD = 45
const VERTICAL_RECOIL = 4
const MUZZLE_VELOCITY = 280
const AMMO_RESERVE = 21

const NAME = "Nagant M1895 Silencer"
const COST = 27
const SIZE = 1
const ACTION = ActionType.SINGLE_ACTION
const SWAY = 128
const RATE_OF_FIRE = 21
const CYCLE_TIME = 1.5
const RELOAD_TIME = 12.5
const MAGAZINE = 7
const HAS_EXTRA_BULLET = false
const MELEE_DAMAGE = 13
const STAMINA_CONSUMPTION = 10
const HEAVY_MELEE_DAMAGE = 31
const HEAVY_STAMINA_CONSUMPTION = 20
const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_Nagant_M1895_Silencer.png"
const BASE_AMMO_DAMAGE_BREAKPOINTS: DamageBreakpoint[] = [
  {
    range: 0,
    damage: BASE_DAMAGE
  },
  {
    range: OPTIMAL_RANGE,
    damage: BASE_DAMAGE
  },
  {
    range: 50,
    damage: 40
  },
  {
    range: 60,
    damage: 35
  },
  {
    range: 100,
    damage: 35
  }
]

/**
 * Includes all available ammo types, including the base ammo, which is always first.
 */
const AMMO = [
  new AmmoStats({
    info: AmmoInfo.COMPACT,
    scarce: false,

    dropRange: DROP_RANGE,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
  }),
  new AmmoStats({
    info: AmmoInfo.COMPACT_DUMDUM,
    scarce: false,

    dropRange: 50,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: 224,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
  }),
  new AmmoStats({
    info: AmmoInfo.COMPACT_HIGH_VELOCITY,
    scarce: false,

    dropRange: 70,
    spread: SPREAD,
    verticalRecoil: 6,
    muzzleVelocity: 355,
    ammoReserve: 14,
    damageBreakpoints: [
      {
        range: 0,
        damage: 81
      },
      {
        range: OPTIMAL_RANGE,
        damage: 81
      },
      {
        range: 50,
        damage: 39
      },
      {
        range: 60,
        damage: 33
      },
      {
        range: 100,
        damage: 33
      }
    ]
  }),
  new AmmoStats({
    info: AmmoInfo.COMPACT_POISON,
    scarce: false,

    dropRange: DROP_RANGE,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
  }),
  new AmmoStats({
    info: AmmoInfo.COMPACT_SUBSONIC,
    scarce: false,

    dropRange: 50,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: 221,
    ammoReserve: 26,
    damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
  }),
]

export const NAGANT_M1895_SILENCER: Weapon = new Weapon({
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