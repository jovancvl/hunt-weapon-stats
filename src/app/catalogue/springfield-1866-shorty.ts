import { AmmoInfo } from "../model/ammo-info";
import { AmmoStats } from "../model/ammo-stats";
import { DamageBreakpoint } from "../model/damage"
import { ActionType, Weapon } from "../model/weapon";

const BASE_DAMAGE = 130
const OPTIMAL_RANGE = 30
const DROP_RANGE = 120
const SPREAD = 40
const VERTICAL_RECOIL = 12
const MUZZLE_VELOCITY = 440
const AMMO_RESERVE = 24

const NAME = "Springfield 1866 Shorty"
const COST = 33
const SIZE = 2
const ACTION = ActionType.SINGLE_SHOT
const SWAY = 100
const RATE_OF_FIRE = 19
const CYCLE_TIME = 3.3
const RELOAD_TIME = 3
const MAGAZINE = 1
const HAS_EXTRA_BULLET = false
const MELEE_DAMAGE = 13
const STAMINA_CONSUMPTION = 12
const HEAVY_MELEE_DAMAGE = 31
const HEAVY_STAMINA_CONSUMPTION = 25
const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_Springfield_1866_Shorty.png"
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
    damage: 83
  },
  {
    range: 100,
    damage: 75
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

    dropRange: 110,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: 390,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
  }),
  new AmmoStats({
    info: AmmoInfo.MEDIUM_EXPLOSIVE,
    scarce: false,

    dropRange: 80,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: 330,
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
        damage: 28+32
      },
    ]
  }),
  new AmmoStats({
    info: AmmoInfo.MEDIUM_HIGH_VELOCITY,
    scarce: false,

    dropRange: 130,
    spread: SPREAD,
    verticalRecoil: 16,
    muzzleVelocity: 515,
    ammoReserve: 16,
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
        range: 80,
        damage: 79
      },
      {
        range: 100,
        damage: 71
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

export const SPRINGFIELD_1866_SHORTY: Weapon = new Weapon({
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