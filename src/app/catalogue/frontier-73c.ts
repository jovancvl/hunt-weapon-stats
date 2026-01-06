import { AmmoInfo } from "../model/ammo-info"
import { AmmoStats } from "../model/ammo-stats"
import { ActionType, Weapon } from "../model/weapon"

const BASE_DAMAGE = 110
const OPTIMAL_RANGE = 20
const DROP_RANGE = 140
const SPREAD = 17.5
const VERTICAL_RECOIL = 5
const MUZZLE_VELOCITY = 400
const AMMO_RESERVE = 28

const NAME = "Frontier 73C"
const COST = 41
const SIZE = 3
const ACTION = ActionType.LEVER_ACTION
const SWAY = 77
const RATE_OF_FIRE = 29
const CYCLE_TIME = 1.2
const RELOAD_TIME = 10.1
const MAGAZINE = 7
const HAS_EXTRA_BULLET = true
const MELEE_DAMAGE = 27
const STAMINA_CONSUMPTION = 12
const HEAVY_MELEE_DAMAGE = 54
const HEAVY_STAMINA_CONSUMPTION = 25
const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_Frontier_73C.png"

const BASE_AMMO_DAMAGE_BREAKPOINTS = [
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
    damage: 68
  },
  {
    range: 100,
    damage: 55
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
    verticalRecoil: 8,
    muzzleVelocity: 330,
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
        damage: 68
      },
      {
        range: 100,
        damage: 58
      }
    ]
  }),
  new AmmoStats({
    info: AmmoInfo.COMPACT_HIGH_VELOCITY,
    scarce: false,

    dropRange: 160,
    spread: SPREAD,
    verticalRecoil: 8,
    muzzleVelocity: 500,
    ammoReserve: 18,
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
        range: 50,
        damage: 63
      },
      {
        range: 100,
        damage: 52
      }
    ]
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
    info: AmmoInfo.COMPACT_SUBSONIC,
    scarce: false,

    dropRange: 110,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: 263,
    ammoReserve: 34,
    damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
  })
]

export const FRONTIER_73C: Weapon = new Weapon({
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