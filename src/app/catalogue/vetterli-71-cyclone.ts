import { AmmoInfo } from "../model/ammo-info"
import { AmmoStats } from "../model/ammo-stats"
import { DamageBreakpoint } from "../model/damage"
import { Weapon, ActionType } from "../model/weapon"

const BASE_DAMAGE = 124
const OPTIMAL_RANGE = 30
const DROP_RANGE = 100
const SPREAD = 47.5
const VERTICAL_RECOIL = 6
const MUZZLE_VELOCITY = 370
const AMMO_RESERVE = 20

const NAME = "Vetterli 71 Cyclone"
const COST = 280
const SIZE = 3
const ACTION = ActionType.SEMI_OR_FULL_AUTO
const SWAY = 77
const RATE_OF_FIRE = 27
const CYCLE_TIME = 0.6
const RELOAD_TIME = 8.9
const MAGAZINE = 3
const HAS_EXTRA_BULLET = true
const MELEE_DAMAGE = 27
const STAMINA_CONSUMPTION = 12
const HEAVY_MELEE_DAMAGE = 54
const HEAVY_STAMINA_CONSUMPTION = 25
const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_Vetterli_71_Cyclone.png"
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
    damage: 79
  },
  {
    range: 100,
    damage: 72
  },
]

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
    info: AmmoInfo.MEDIUM_FMJ,
    scarce: false,

    dropRange: 95,
    spread: SPREAD,
    verticalRecoil: 12,
    muzzleVelocity: 315,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: [
      {
        range: 0,
        damage: BASE_DAMAGE
      },
      {
        range: 40,
        damage: BASE_DAMAGE
      },
      {
        range: 90,
        damage: 79
      },
      {
        range: 100,
        damage: 75
      },
    ]
  }),
  new AmmoStats({
    info: AmmoInfo.MEDIUM_HIGH_VELOCITY,
    scarce: false,

    dropRange: 120,
    spread: SPREAD,
    verticalRecoil: 12,
    muzzleVelocity: 460,
    ammoReserve: 13,
    damageBreakpoints: [
      {
        range: 0,
        damage: 116
      },
      {
        range: OPTIMAL_RANGE,
        damage: 116
      },
      {
        range: 80,
        damage: 74
      },
      {
        range: 100,
        damage: 68
      },
    ]
  }),
  new AmmoStats({
    info: AmmoInfo.MEDIUM_INCENDIARY,
    scarce: false,

    dropRange: DROP_RANGE,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
  }),
  new AmmoStats({
    info: AmmoInfo.MEDIUM_SUBSONIC,
    scarce: false,

    dropRange: 75,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: 240,
    ammoReserve: 24,
    damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
  }),
]

export const VETTERLI_71_CYCLONE: Weapon = new Weapon({
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