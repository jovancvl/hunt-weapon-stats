import { AmmoInfo } from "../model/ammo-info"
import { AmmoStats } from "../model/ammo-stats"
import { DamageBreakpoint } from "../model/damage"
import { ActionType, Weapon } from "../model/weapon"

const BASE_DAMAGE = 133
const OPTIMAL_RANGE = 40
const DROP_RANGE = 120
const SPREAD = 42.5
const VERTICAL_RECOIL = 12
const MUZZLE_VELOCITY = 590
const AMMO_RESERVE = 18

const NAME = "Berthier 1892"
const COST = 330
const SIZE = 3
const ACTION = ActionType.BOLT_ACTION
const SWAY = 77
const RATE_OF_FIRE = 27
const CYCLE_TIME = 1.7
const RELOAD_TIME = 2.7
const MAGAZINE = 3
const HAS_EXTRA_BULLET = false
const MELEE_DAMAGE = 27
const STAMINA_CONSUMPTION = 12
const HEAVY_MELEE_DAMAGE = 54
const HEAVY_STAMINA_CONSUMPTION = 25

const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_Berthier_1892.png"
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
    range: 90,
    damage: 83
  },
  {
    range: 100,
    damage: 81
  }
]

const AMMO = [
  new AmmoStats({
    info: AmmoInfo.LONG,
    scarce: false,

    dropRange: DROP_RANGE,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
  }),
  new AmmoStats({
    info: AmmoInfo.LONG_INCENDIARY,
    scarce: false,

    dropRange: DROP_RANGE,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
  }),
  new AmmoStats({
    info: AmmoInfo.LONG_SPITZER,
    scarce: false,

    dropRange: 140,
    spread: SPREAD,
    verticalRecoil: 16,
    muzzleVelocity: 780,
    ammoReserve: 12,
    damageBreakpoints: [
      {
        range: 0,
        damage: 113
      },
      {
        range: OPTIMAL_RANGE,
        damage: 113
      },
      {
        range: 90,
        damage: 70
      },
      {
        range: 100,
        damage: 68
      }
    ]
  })
]

export const BERTHIER_1892: Weapon = new Weapon({
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