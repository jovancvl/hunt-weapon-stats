import { AmmoInfo } from "../model/ammo-info";
import { AmmoStats } from "../model/ammo-stats";
import { DamageBreakpoint } from "../model/damage"
import { ActionType, Weapon } from "../model/weapon";

const BASE_DAMAGE = 132
const OPTIMAL_RANGE = 30
const DROP_RANGE = 160
const SPREAD = 20
const VERTICAL_RECOIL = 6
const MUZZLE_VELOCITY = 490
const AMMO_RESERVE = 24

const NAME = "Springfield 1866"
const COST = 38
const SIZE = 3
const ACTION = ActionType.SINGLE_SHOT
const SWAY = 77
const RATE_OF_FIRE = 19
const CYCLE_TIME = 3.3
const RELOAD_TIME = 3
const MAGAZINE = 1
const HAS_EXTRA_BULLET = false
const MELEE_DAMAGE = 27
const STAMINA_CONSUMPTION = 12
const HEAVY_MELEE_DAMAGE = 54
const HEAVY_STAMINA_CONSUMPTION = 25
const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_Springfield_1866.png"
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
    damage: 84
  },
  {
    range: 100,
    damage: 78
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

    dropRange: 155,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: 440,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
  }),
  new AmmoStats({
    info: AmmoInfo.MEDIUM_EXPLOSIVE,
    scarce: false,

    dropRange: 120,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: 370,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: [
      {
        range: 0,
        damage: 123
      },
      {
        range: OPTIMAL_RANGE,
        damage: 123
      },
      {
        range: 100,
        damage: 28+31
      },
    ]
  }),
  new AmmoStats({
    info: AmmoInfo.MEDIUM_HIGH_VELOCITY,
    scarce: false,

    dropRange: 180,
    spread: SPREAD,
    verticalRecoil: 10,
    muzzleVelocity: 615,
    ammoReserve: 16,
    damageBreakpoints: [
      {
        range: 0,
        damage: 126
      },
      {
        range: OPTIMAL_RANGE,
        damage: 126
      },
      {
        range: 80,
        damage: 80
      },
      {
        range: 100,
        damage: 74
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
]

export const SPRINGFIELD_1866: Weapon = new Weapon({
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