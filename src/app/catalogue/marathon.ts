import { AmmoInfo, AmmoStats } from "../arsenal/ammo"
import { Weapon, ActionType } from "../arsenal/weapon"

const BASE_DAMAGE = 113
const OPTIMAL_RANGE = 20
const DROP_RANGE = 140
const SPREAD = 15
const VERTICAL_RECOIL = 7
const MUZZLE_VELOCITY = 430
const AMMO_RESERVE = 24

const NAME = "Marathon"
const COST = 68 
const SIZE = 3
const ACTION = ActionType.PUMP_ACTION
const SWAY = 77
const RATE_OF_FIRE = 31
const CYCLE_TIME = 1
const RELOAD_TIME = 19.2
const MAGAZINE = 15
const HAS_EXTRA_BULLET = true
const MELEE_DAMAGE = 27
const STAMINA_CONSUMPTION = 12
const HEAVY_MELEE_DAMAGE = 54
const HEAVY_STAMINA_CONSUMPTION = 25
const IMAGE = "https://huntshowdown.wiki.gg/images/thumb/b/b5/Weapon_Marathon.png/256px-Weapon_Marathon.png"

const AMMO = [
    new AmmoStats({
        info: AmmoInfo.COMPACT,
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
        info: AmmoInfo.COMPACT_FMJ,
        scarce: false,

        baseDamage: BASE_DAMAGE,
        optimalRange: OPTIMAL_RANGE + 10,
        dropRange: DROP_RANGE - 15,
        spread: SPREAD,
        verticalRecoil: VERTICAL_RECOIL + 2,
        muzzleVelocity: MUZZLE_VELOCITY - 70,
        ammoReserve: AMMO_RESERVE
    }),
    new AmmoStats({
        info: AmmoInfo.COMPACT_HIGH_VELOCITY,
        scarce: false,

        baseDamage: BASE_DAMAGE - 8,
        optimalRange: OPTIMAL_RANGE,
        dropRange: DROP_RANGE + 30,
        spread: SPREAD,
        verticalRecoil: VERTICAL_RECOIL + 2,
        muzzleVelocity: MUZZLE_VELOCITY + 125,
        ammoReserve: AMMO_RESERVE - 8
    }),
    new AmmoStats({
        info: AmmoInfo.COMPACT_POISON,
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
        info: AmmoInfo.COMPACT_INCENDIARY,
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

export const MARATHON: Weapon = new Weapon({
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