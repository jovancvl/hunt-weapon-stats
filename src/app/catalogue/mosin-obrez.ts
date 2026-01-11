import { AmmoInfo } from "../model/ammo-info"
import { AmmoStats } from "../model/ammo-stats"
import { DamageBreakpoint } from "../model/damage"
import { ActionType, Weapon } from "../model/weapon"

const BASE_DAMAGE = 126
const OPTIMAL_RANGE = 40
const DROP_RANGE = 100
const SPREAD = 55
const VERTICAL_RECOIL = 16
const MUZZLE_VELOCITY = 520
const AMMO_RESERVE = 10

const NAME = "Mosin Obrez"
const COST = 290
const SIZE = 3
const ACTION = ActionType.BOLT_ACTION
const SWAY = 100
const RATE_OF_FIRE = 26
const CYCLE_TIME = 1.9
const RELOAD_TIME = 3.7
const MAGAZINE = 5
const HAS_EXTRA_BULLET = false
const MELEE_DAMAGE = 13
const STAMINA_CONSUMPTION = 12
const HEAVY_MELEE_DAMAGE = 31
const HEAVY_STAMINA_CONSUMPTION = 25

const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_Mosin_Obrez.png"
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
    damage: 78
  },
  {
    range: 100,
    damage: 76
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

    dropRange: 120,
    spread: SPREAD,
    verticalRecoil: 21,
    muzzleVelocity: 710,
    ammoReserve: 7,
    damageBreakpoints: [
      {
        range: 0,
        damage: 106
      },
      {
        range: OPTIMAL_RANGE,
        damage: 106
      },
      {
        range: 90,
        damage: 66
      },
      {
        range: 100,
        damage: 65
      }
    ]
  })
]

export const MOSIN_OBREZ: Weapon = new Weapon({
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