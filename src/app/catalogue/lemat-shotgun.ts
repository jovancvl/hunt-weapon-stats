import { AmmoInfo } from "../arsenal/ammo-info";
import { AmmoStats } from "../arsenal/ammo-stats";
import { ActionType, Weapon } from "../arsenal/weapon";

const BASE_DAMAGE = 150
const OPTIMAL_RANGE = 10
const DROP_RANGE = 10
const SPREAD = 40
const VERTICAL_RECOIL = 35
const MUZZLE_VELOCITY = 350
const AMMO_RESERVE = 3

const NAME = "LeMat Shotgun"
const COST = 83
const SIZE = 1
const ACTION = ActionType.SINGLE_SHOT
const SWAY = 128
const RATE_OF_FIRE = 12
const CYCLE_TIME = 5.2
const RELOAD_TIME = 3.9
const MAGAZINE = 1
const HAS_EXTRA_BULLET = false
const MELEE_DAMAGE = 13
const STAMINA_CONSUMPTION = 10
const HEAVY_MELEE_DAMAGE = 31
const HEAVY_STAMINA_CONSUMPTION = 20
const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_LeMat.png"

/**
 * Includes all available ammo types, including the base ammo, which is always first.
 */
const AMMO = [
  new AmmoStats({
    info: AmmoInfo.BUCKSHOT,
    scarce: false,

    baseDamage: BASE_DAMAGE,
    optimalRange: OPTIMAL_RANGE,
    dropRange: DROP_RANGE,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: AMMO_RESERVE
  }),
  new AmmoStats({
    info: AmmoInfo.SHELL_DRAGONBREATH,
    scarce: false,

    baseDamage: BASE_DAMAGE - 110,
    optimalRange: OPTIMAL_RANGE - 6,
    dropRange: DROP_RANGE,
    spread: SPREAD + 110,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY - 250,
    ammoReserve: AMMO_RESERVE
  }),
  new AmmoStats({
    info: AmmoInfo.SHELL_SLUG,
    scarce: false,

    baseDamage: BASE_DAMAGE + 7,
    optimalRange: OPTIMAL_RANGE + 2,
    dropRange: DROP_RANGE,
    spread: SPREAD + 75,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: AMMO_RESERVE - 1
  }),
  new AmmoStats({
    info: AmmoInfo.SHELL_STARSHELL,
    scarce: false,

    baseDamage: BASE_DAMAGE - BASE_DAMAGE + 1,
    optimalRange: OPTIMAL_RANGE - OPTIMAL_RANGE + 1,
    dropRange: DROP_RANGE,
    spread: SPREAD + 10,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY - 275,
    ammoReserve: AMMO_RESERVE
  }),
]

export const LEMAT_SHOTGUN: Weapon = new Weapon({
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