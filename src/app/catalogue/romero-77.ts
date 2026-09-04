import { AmmoInfo } from "../model/ammo-info"
import { AmmoStats } from "../model/ammo-stats"
import { DamageBreakpoint } from "../model/damage"
import { ActionType, Weapon } from "../model/weapon"

const BASE_DAMAGE = 150
const OPTIMAL_RANGE = 14
const DROP_RANGE = 30
const SPREAD = 20
const VERTICAL_RECOIL = 20
const MUZZLE_VELOCITY = 450
const AMMO_RESERVE = 12

const NAME = "Romero 77"
const COST = 66
const SIZE = 4
const ACTION = ActionType.SINGLE_SHOT
const SWAY = 77
const RATE_OF_FIRE = 16
const CYCLE_TIME = 4
const RELOAD_TIME = 3.4
const MAGAZINE = 1
const HAS_EXTRA_BULLET = false
const MELEE_DAMAGE = 27
const STAMINA_CONSUMPTION = 12
const HEAVY_MELEE_DAMAGE = 54
const HEAVY_STAMINA_CONSUMPTION = 25
const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_Romero_77.png"
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
    spread: 50,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: 100,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: [
      {
        range: 0,
        damage: 144
      },
      {
        range: OPTIMAL_RANGE,
        damage: 144
      },
    ]
  }),
  new AmmoStats({
    info: AmmoInfo.SHELL_PENNYSHOT,
    scarce: false,

    dropRange: DROP_RANGE,
    spread: 75,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: 20,
    damageBreakpoints: [
      {
        range: 0,
        damage: 150
      },
      {
        range: OPTIMAL_RANGE,
        damage: 150
      },
    ]
  }),
  new AmmoStats({
    info: AmmoInfo.SHELL_SLUG,
    scarce: false,

    dropRange: DROP_RANGE,
    spread: 65,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: 8,
    damageBreakpoints: [
      {
        range: 0,
        damage: 150
      },
      {
        range: 16,
        damage: 150
      },
    ]
  }),
  new AmmoStats({
    info: AmmoInfo.SHELL_STARSHELL,
    scarce: false,

    dropRange: DROP_RANGE,
    spread: 50,
    verticalRecoil: 3,
    muzzleVelocity: 75,
    ammoReserve: 8,
    damageBreakpoints: [
      {
        range: 0,
        damage: 3
      },
      {
        range: OPTIMAL_RANGE,
        damage: 3
      },
    ]
  }),
]

export const ROMERO_77: Weapon = new Weapon({
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