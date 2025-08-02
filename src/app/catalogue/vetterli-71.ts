import { AmmoInfo, AmmoStats } from "../arsenal/ammo"
import { Weapon, ActionType } from "../arsenal/weapon"

const BASE_DAMAGE = 130
const OPTIMAL_RANGE = 30
const DROP_RANGE = 125
const SPREAD = 22.5
const VERTICAL_RECOIL = 5
const MUZZLE_VELOCITY = 410
const AMMO_RESERVE = 20

const NAME = "Vetterli 71"
const COST = 105 
const SIZE = 3
const ACTION = ActionType.BOLT_ACTION
const SWAY = 77
const RATE_OF_FIRE = 24
const CYCLE_TIME = 1.4
const RELOAD_TIME = 12.1
const MAGAZINE = 6
const HAS_EXTRA_BULLET = true
const MELEE_DAMAGE = 27
const STAMINA_CONSUMPTION = 12
const HEAVY_MELEE_DAMAGE = 54
const HEAVY_STAMINA_CONSUMPTION = 25
const IMAGE = "https://huntshowdown.wiki.gg/images/thumb/7/71/Weapon_Vetterli_71.png/256px-Weapon_Vetterli_71.png"

const AMMO = [
    new AmmoStats({
        info: AmmoInfo.MEDIUM,
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
        info: AmmoInfo.MEDIUM_FMJ,
        scarce: false,

        baseDamage: BASE_DAMAGE,
        optimalRange: OPTIMAL_RANGE + 10,
        dropRange: DROP_RANGE - 10,
        spread: SPREAD,
        verticalRecoil: VERTICAL_RECOIL + 4,
        muzzleVelocity: MUZZLE_VELOCITY - 60,
        ammoReserve: AMMO_RESERVE
    }),
    new AmmoStats({
        info: AmmoInfo.MEDIUM_HIGH_VELOCITY,
        scarce: false,

        baseDamage: BASE_DAMAGE - 7,
        optimalRange: OPTIMAL_RANGE,
        dropRange: DROP_RANGE + 15,
        spread: SPREAD,
        verticalRecoil: VERTICAL_RECOIL + 4,
        muzzleVelocity: MUZZLE_VELOCITY + 100,
        ammoReserve: AMMO_RESERVE - 7
    }),
    new AmmoStats({
        info: AmmoInfo.MEDIUM_INCENDIARY,
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
        info: AmmoInfo.MEDIUM_SUBSONIC,
        scarce: false,

        baseDamage: BASE_DAMAGE,
        optimalRange: OPTIMAL_RANGE,
        dropRange: DROP_RANGE - 25,
        spread: SPREAD,
        verticalRecoil: VERTICAL_RECOIL,
        muzzleVelocity: MUZZLE_VELOCITY - 144,
        ammoReserve: AMMO_RESERVE
    }),
]

export const VETTERLI_71: Weapon = new Weapon({
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