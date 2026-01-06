import { AmmoInfo } from "../model/ammo-info"
import { AmmoStats } from "../model/ammo-stats"
import { DamageBreakpoint } from "../model/damage"
import { Weapon, ActionType } from "../model/weapon"

const BASE_DAMAGE = 97
const OPTIMAL_RANGE = 20
const DROP_RANGE = 75
const SPREAD = 47.5
const VERTICAL_RECOIL = 5
const MUZZLE_VELOCITY = 230
const AMMO_RESERVE = 12

const NAME = "New Army"
const COST = 90
const SIZE = 1
const ACTION = ActionType.DOUBLE_ACTION
const SWAY = 128
const RATE_OF_FIRE = 30
const CYCLE_TIME = 0.5
const RELOAD_TIME = 9.5
const MAGAZINE = 6
const HAS_EXTRA_BULLET = false
const MELEE_DAMAGE = 13
const STAMINA_CONSUMPTION = 12
const HEAVY_MELEE_DAMAGE = 31
const HEAVY_STAMINA_CONSUMPTION = 20
const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_New_Army.png"
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
    damage: 53
  },
  {
    range: 60,
    damage: 46
  },
  {
    range: 100,
    damage: 46
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
    info: AmmoInfo.COMPACT_DUMDUM,
    scarce: false,

    dropRange: 70,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: 200,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
  }),
  new AmmoStats({
    info: AmmoInfo.COMPACT_FMJ,
    scarce: false,

    dropRange: 70,
    spread: SPREAD,
    verticalRecoil: 7,
    muzzleVelocity: 200,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: [
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
        damage: 53
      },
      {
        range: 70,
        damage: 48
      },
      {
        range: 100,
        damage: 48
      }
    ]
  }),
]

export const NEW_ARMY: Weapon = new Weapon({
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