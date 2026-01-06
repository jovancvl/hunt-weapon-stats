import { AmmoInfo } from "../model/ammo-info";
import { AmmoStats } from "../model/ammo-stats";
import { DamageBreakpoint } from "../model/damage"
import { ActionType, Weapon } from "../model/weapon";

const BASE_DAMAGE = 120
const OPTIMAL_RANGE = 30
const DROP_RANGE = 110
const SPREAD = 42.5
const VERTICAL_RECOIL = 15
const MUZZLE_VELOCITY = 540
const AMMO_RESERVE = 12

const NAME = "Centennial Shorty"
const COST = 103
const SIZE = 2
const ACTION = ActionType.LEVER_ACTION
const SWAY = 100
const RATE_OF_FIRE = 24
const CYCLE_TIME = 1.6
const RELOAD_TIME = 10.9
const MAGAZINE = 5
const HAS_EXTRA_BULLET = true
const MELEE_DAMAGE = 13
const STAMINA_CONSUMPTION = 10
const HEAVY_MELEE_DAMAGE = 31
const HEAVY_STAMINA_CONSUMPTION = 25
const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_Centennial_Shorty.png"
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
    range: 80,
    damage: 76 // 0.6333
  },
  {
    range: 100,
    damage: 70 // 0.5833
  },
]
/**
 * Includes all available ammo types, including the base ammo, which is always first.
 */
const AMMO = [
  new AmmoStats({
    info: AmmoInfo.MEDIUM,
    scarce: false,

    dropRange: DROP_RANGE,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
  }),
  new AmmoStats({
    info: AmmoInfo.MEDIUM_DUMDUM,
    scarce: true,

    dropRange: 85,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: 432,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
  }),
  new AmmoStats({
    info: AmmoInfo.MEDIUM_FMJ,
    scarce: false,

    dropRange: 85,
    spread: SPREAD,
    verticalRecoil: 19,
    muzzleVelocity: 432,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: [
      {
        range: 0,
        damage: BASE_DAMAGE
      },
      {
        range: 40,
        damage: BASE_DAMAGE
      },
      {
        range: 90,
        damage: 76
      },
      {
        range: 100,
        damage: 74
      },
    ]
  }),
  new AmmoStats({
    info: AmmoInfo.MEDIUM_HIGH_VELOCITY,
    scarce: false,

    dropRange: 125,
    spread: SPREAD,
    verticalRecoil: 19,
    muzzleVelocity: 640,
    ammoReserve: 8,
    damageBreakpoints: [
      {
        range: 0,
        damage: 114
      },
      {
        range: OPTIMAL_RANGE,
        damage: 114
      },
      {
        range: 80,
        damage: 72
      },
      {
        range: 100,
        damage: 66
      },
    ]
  }),
  new AmmoStats({
    info: AmmoInfo.MEDIUM_POISON,
    scarce: false,

    dropRange: DROP_RANGE,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
  }),
  new AmmoStats({
    info: AmmoInfo.MEDIUM_SUBSONIC,
    scarce: false,

    dropRange: 80,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: 312,
    ammoReserve: 14,
    damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
  }),
]

export const CENTENNIAL_SHORTY: Weapon = new Weapon({
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