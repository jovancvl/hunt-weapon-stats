import { AmmoInfo } from "../model/ammo-info"
import { AmmoStats } from "../model/ammo-stats"
import { DamageBreakpoint } from "../model/damage"
import { ActionType, Weapon } from "../model/weapon"

const BASE_DAMAGE = 122
const OPTIMAL_RANGE = 40
const DROP_RANGE = 65
const SPREAD = 40
const VERTICAL_RECOIL = 23
const MUZZLE_VELOCITY = 530
const AMMO_RESERVE = 9

const NAME = "Haymaker"
const COST = 279
const SIZE = 2
const ACTION = ActionType.SINGLE_ACTION
const SWAY = 100
const RATE_OF_FIRE = 18
const CYCLE_TIME = 1.3
const RELOAD_TIME = 21.8
const MAGAZINE = 9
const HAS_EXTRA_BULLET = false
const MELEE_DAMAGE = 13
const STAMINA_CONSUMPTION = 12
const HEAVY_MELEE_DAMAGE = 31
const HEAVY_STAMINA_CONSUMPTION = 20
const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_Haymaker.png?a1f197"
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
    range: 70,
    damage: 72
  },
  {
    range: 90,
    damage: 58
  },
  {
    range: 100,
    damage: 58
  },
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
    info: AmmoInfo.LONG_FMJ,
    scarce: false,

    dropRange: 50,
    spread: SPREAD,
    verticalRecoil: 25,
    muzzleVelocity: 375,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: [
      {
        range: 0,
        damage: BASE_DAMAGE
      },
      {
        range: 50,
        damage: BASE_DAMAGE
      },
      {
        range: 80,
        damage: 72
      },
      {
        range: 90,
        damage: 61
      },
      {
        range: 100,
        damage: 61
      },
    ]
  }),
  new AmmoStats({
    info: AmmoInfo.LONG_POISON,
    scarce: false,

    dropRange: DROP_RANGE,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: AMMO_RESERVE,
    damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
  }),
]

export const HAYMAKER: Weapon = new Weapon({
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