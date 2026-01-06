import { AmmoInfo } from "../model/ammo-info"
import { AmmoStats } from "../model/ammo-stats"
import { DamageBreakpoint } from "../model/damage"
import { ActionType, Weapon } from "../model/weapon"

const BASE_DAMAGE = 136
const OPTIMAL_RANGE = 30
const DROP_RANGE = 150
const SPREAD = 25
const VERTICAL_RECOIL = 8
const MUZZLE_VELOCITY = 560
const AMMO_RESERVE = 26

const NAME = "Maynard Sniper Silencer"
const COST = 159
const SIZE = 3
const ACTION = ActionType.SINGLE_SHOT
const SWAY = 69
const RATE_OF_FIRE = 11
const CYCLE_TIME = 5.8
const RELOAD_TIME = 5
const MAGAZINE = 1
const HAS_EXTRA_BULLET = false
const MELEE_DAMAGE = 27
const STAMINA_CONSUMPTION = 15
const HEAVY_MELEE_DAMAGE = 54
const HEAVY_STAMINA_CONSUMPTION = 25
const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_Maynard_Sniper_Silencer.png"
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
    damage: 67
  },
  {
    range: 80,
    damage: 59
  },
  {
    range: 100,
    damage: 59
  }
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
    scarce: true,

    dropRange: 140,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: 380,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
  }),
  new AmmoStats({
    info: AmmoInfo.MEDIUM_HIGH_VELOCITY,
    scarce: false,

    dropRange: 160,
    spread: SPREAD,
    verticalRecoil: 12,
    muzzleVelocity: 576,
    ammoReserve: 18,
    damageBreakpoints: [
      {
        range: 0,
        damage: 128
      },
      {
        range: OPTIMAL_RANGE,
        damage: 128
      },
      {
        range: 60,
        damage: 63
      },
      {
        range: 80,
        damage: 55
      },
      {
        range: 100,
        damage: 55
      }
    ]
  }),
  new AmmoStats({
    info: AmmoInfo.MEDIUM_SUBSONIC,
    scarce: false,

    dropRange: 130,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: 289,
    ammoReserve: 30,
    damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
  }),
]

export const MAYNARD_SNIPER_SILENCER: Weapon = new Weapon({
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