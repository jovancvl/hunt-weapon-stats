import { AmmoInfo } from "../model/ammo-info";
import { AmmoStats } from "../model/ammo-stats";
import { DamageBreakpoint } from "../model/damage"
import { ActionType, Weapon } from "../model/weapon";

const BASE_DAMAGE = 110
const OPTIMAL_RANGE = 30
const DROP_RANGE = 65
const SPREAD = 32.5
const VERTICAL_RECOIL = 10
const MUZZLE_VELOCITY = 330
const AMMO_RESERVE = 12

const NAME = "Pax"
const COST = 80
const SIZE = 1
const ACTION = ActionType.SINGLE_ACTION
const SWAY = 128
const RATE_OF_FIRE = 22
const CYCLE_TIME = 1.4
const RELOAD_TIME = 11.2
const MAGAZINE = 6
const HAS_EXTRA_BULLET = false
const MELEE_DAMAGE = 13
const STAMINA_CONSUMPTION = 12
const HEAVY_MELEE_DAMAGE = 31
const HEAVY_STAMINA_CONSUMPTION = 20
const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_Pax.png"
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
    range: 60,
    damage: 61
  },
  {
    range: 80,
    damage: 52
  },
  {
    range: 100,
    damage: 52
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
    scarce: false,

    dropRange: 60,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: 300,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
  }),
  new AmmoStats({
    info: AmmoInfo.MEDIUM_FMJ,
    scarce: false,

    dropRange: 60,
    spread: SPREAD,
    verticalRecoil: 12,
    muzzleVelocity: 300,
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
        range: 70,
        damage: 61
      },
      {
        range: 80,
        damage: 54
      },
      {
        range: 100,
        damage: 54
      },
    ]
  }),
  new AmmoStats({
    info: AmmoInfo.MEDIUM_HIGH_VELOCITY,
    scarce: false,

    dropRange: 70,
    spread: SPREAD,
    verticalRecoil: 12,
    muzzleVelocity: 405,
    ammoReserve: 8,
    damageBreakpoints: [
      {
        range: 0,
        damage: 104
      },
      {
        range: OPTIMAL_RANGE,
        damage: 104
      },
      {
        range: 60,
        damage: 57
      },
      {
        range: 80,
        damage: 49
      },
      {
        range: 100,
        damage: 49
      },
    ]
  }),
  new AmmoStats({
    info: AmmoInfo.MEDIUM_INCENDIARY,
    scarce: false,

    dropRange: DROP_RANGE,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
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
]

export const PAX: Weapon = new Weapon({
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