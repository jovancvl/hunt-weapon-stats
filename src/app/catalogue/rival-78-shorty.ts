import { AmmoInfo } from "../model/ammo-info";
import { AmmoStats } from "../model/ammo-stats";
import { DamageBreakpoint } from "../model/damage"
import { ActionType, Weapon } from "../model/weapon";

const BASE_DAMAGE = 150
const OPTIMAL_RANGE = 10
const DROP_RANGE = 20
const SPREAD = 55;
const VERTICAL_RECOIL = 30
const MUZZLE_VELOCITY = 350
const AMMO_RESERVE = 4

const NAME = "Rival 78 Shorty"
const COST = 145
const SIZE = 2
const ACTION = ActionType.SEMI_OR_FULL_AUTO
const SWAY = 133
const RATE_OF_FIRE = 24
const CYCLE_TIME = 0.3
const RELOAD_TIME = 4.7
const MAGAZINE = 2
const HAS_EXTRA_BULLET = false
const MELEE_DAMAGE = 13
const STAMINA_CONSUMPTION = 12
const HEAVY_MELEE_DAMAGE = 31
const HEAVY_STAMINA_CONSUMPTION = 20
const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_Rival_78_Shorty.png"
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
    spread: 160,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: 100,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: [
      {
        range: 0,
        damage: 89
      },
      {
        range: OPTIMAL_RANGE,
        damage: 89
      },
    ]
  }),
  new AmmoStats({
    info: AmmoInfo.SHELL_FLECHETTE,
    scarce: false,

    dropRange: DROP_RANGE,
    spread: 35,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: [
      {
        range: 0,
        damage: 103
      },
      {
        range: OPTIMAL_RANGE,
        damage: 103
      },
    ]
  }),
  new AmmoStats({
    info: AmmoInfo.SHELL_PENNYSHOT,
    scarce: false,

    dropRange: DROP_RANGE,
    spread: 125,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: 6,
    damageBreakpoints: [
      {
        range: 0,
        damage: 150
      },
      {
        range: OPTIMAL_RANGE,
        damage: 62
      },
    ]
  }),
  new AmmoStats({
    info: AmmoInfo.SHELL_SLUG,
    scarce: false,

    dropRange: DROP_RANGE,
    spread: 105,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: 3,
    damageBreakpoints: [
      {
        range: 0,
        damage: 150
      },
      {
        range: 12,
        damage: 150
      },
    ]
  }),
]

export const RIVAL_78_SHORTY: Weapon = new Weapon({
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