import { AmmoInfo } from "../model/ammo-info"
import { AmmoStats } from "../model/ammo-stats"
import { DamageBreakpoint } from "../model/damage"
import { Weapon, ActionType } from "../model/weapon"

const BASE_DAMAGE = 113
const OPTIMAL_RANGE = 20
const DROP_RANGE = 140
const SPREAD = 15
const VERTICAL_RECOIL = 7
const MUZZLE_VELOCITY = 430
const AMMO_RESERVE = 24

const NAME = "Marathon"
const COST = 68
const SIZE = 3
const ACTION = ActionType.PUMP_ACTION
const SWAY = 77
const RATE_OF_FIRE = 31
const CYCLE_TIME = 1
const RELOAD_TIME = 19.2
const MAGAZINE = 15
const HAS_EXTRA_BULLET = true
const MELEE_DAMAGE = 27
const STAMINA_CONSUMPTION = 12
const HEAVY_MELEE_DAMAGE = 54
const HEAVY_STAMINA_CONSUMPTION = 25
const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_Marathon.png"
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
    damage: 70
  },
  {
    range: 100,
    damage: 57
  }
]

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
    info: AmmoInfo.COMPACT_FMJ,
    scarce: false,

    dropRange: 125,
    spread: SPREAD,
    verticalRecoil: 9,
    muzzleVelocity: 360,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: [
      {
        range: 0,
        damage: BASE_DAMAGE
      },
      {
        range: 30,
        damage: BASE_DAMAGE
      },
      {
        range: 60,
        damage: 70
      },
      {
        range: 100,
        damage: 59
      }
    ]
  }),
  new AmmoStats({
    info: AmmoInfo.COMPACT_HIGH_VELOCITY,
    scarce: false,

    dropRange: 170,
    spread: SPREAD,
    verticalRecoil: 9,
    muzzleVelocity: 555,
    ammoReserve: 16,
    damageBreakpoints: [
      {
        range: 0,
        damage: 107
      },
      {
        range: 20,
        damage: 107
      },
      {
        range: 50,
        damage: 66
      },
      {
        range: 100,
        damage: 54
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
    info: AmmoInfo.COMPACT_INCENDIARY,
    scarce: false,

    dropRange: DROP_RANGE,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
  }),
]

export const MARATHON: Weapon = new Weapon({
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