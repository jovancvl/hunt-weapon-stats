import { AmmoInfo } from "../arsenal/ammo-info";
import { AmmoStats } from "../arsenal/ammo-stats";
import { ActionType, Weapon } from "../arsenal/weapon";

const BASE_DAMAGE = 999
const OPTIMAL_RANGE = 999
const DROP_RANGE = 999
const SPREAD = 999
const VERTICAL_RECOIL = 999
const MUZZLE_VELOCITY = 999
const AMMO_RESERVE = 999

const NAME = "NAME"
const COST = 999
const SIZE = 999
const ACTION = ActionType.BOLT_ACTION
const SWAY = 999
const RATE_OF_FIRE = 999
const CYCLE_TIME = 999
const RELOAD_TIME = 999
const MAGAZINE = 999
const HAS_EXTRA_BULLET = false
const MELEE_DAMAGE = 999
const STAMINA_CONSUMPTION = 999
const HEAVY_MELEE_DAMAGE = 999
const HEAVY_STAMINA_CONSUMPTION = 999
const IMAGE = "999"

/**
 * Includes all available ammo types, including the base ammo, which is always first.
 */
const AMMO = [
  new AmmoStats({
    info: AmmoInfo.LONG,
    scarce: false,

    baseDamage: BASE_DAMAGE,
    optimalRange: OPTIMAL_RANGE,
    dropRange: DROP_RANGE,
    spread: SPREAD,
    verticalRecoil: VERTICAL_RECOIL,
    muzzleVelocity: MUZZLE_VELOCITY,
    ammoReserve: AMMO_RESERVE
  }),
]

export const __NAME: Weapon = new Weapon({
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