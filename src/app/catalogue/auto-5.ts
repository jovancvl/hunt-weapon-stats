import { AmmoInfo } from "../model/ammo-info";
import { AmmoStats } from "../model/ammo-stats";
import { DamageBreakpoint } from "../model/damage"
import { ActionType, Weapon } from "../model/weapon";

const BASE_DAMAGE = 150
const OPTIMAL_RANGE = 12
const DROP_RANGE = 30
const SPREAD = 35
const VERTICAL_RECOIL = 20
const MUZZLE_VELOCITY = 425
const AMMO_RESERVE = 8

const NAME = "Auto-5"
const COST = 600
const SIZE = 5
const ACTION = ActionType.SEMI_OR_FULL_AUTO
const SWAY = 133
const RATE_OF_FIRE = 24
const CYCLE_TIME = 0.6
const RELOAD_TIME = 10.7
const MAGAZINE = 4
const HAS_EXTRA_BULLET = true
const MELEE_DAMAGE = 27
const STAMINA_CONSUMPTION = 12
const HEAVY_MELEE_DAMAGE = 54
const HEAVY_STAMINA_CONSUMPTION = 25
const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_Auto-5.png"
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
    info: AmmoInfo.SHELL_FLECHETTE,
    scarce: false,

    dropRange: DROP_RANGE,
    spread: 25,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: [
      {
        range: 0,
        damage: 135
      },
      {
        range: OPTIMAL_RANGE,
        damage: 135
      }
    ]
  }),
  new AmmoStats({
    info: AmmoInfo.SHELL_PENNYSHOT,
    scarce: false,

    dropRange: DROP_RANGE,
    spread: 100,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: 12,
    damageBreakpoints: [
      {
        range: 0,
        damage: 150
      },
      {
        range: OPTIMAL_RANGE,
        damage: 147
      }
    ]
  }),
  new AmmoStats({
    info: AmmoInfo.SHELL_SLUG,
    scarce: false,

    dropRange: DROP_RANGE,
    spread: 95,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: 5,
    damageBreakpoints: [
      {
        range: 0,
        damage: 150
      },
      {
        range: 16,
        damage: 150
      }
    ]
  }),
]

export const AUTO_5: Weapon = new Weapon({
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