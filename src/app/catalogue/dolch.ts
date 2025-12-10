import { AmmoStats, AmmoInfo } from "../arsenal/ammo";
import { ActionType, Weapon } from "../arsenal/weapon";

const BASE_DAMAGE = 97
const OPTIMAL_RANGE = 20
const DROP_RANGE = 70
const SPREAD = 35
const VERTICAL_RECOIL = 14
const MUZZLE_VELOCITY = 440
const AMMO_RESERVE = 10 

const NAME = "Dolch 96"
const COST = 690
const SIZE = 1
const ACTION = ActionType.SEMI_OR_FULL_AUTO
const SWAY = 128
const RATE_OF_FIRE = 64
const CYCLE_TIME = 0.4
const RELOAD_TIME = 6
const MAGAZINE = 10
const HAS_EXTRA_BULLET = false
const MELEE_DAMAGE = 13
const STAMINA_CONSUMPTION = 10
const HEAVY_MELEE_DAMAGE = 31
const HEAVY_STAMINA_CONSUMPTION = 20
const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_Dolch_96.png"

const AMMO = [
    new AmmoStats({
        info: AmmoInfo.DOLCH,
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
        info: AmmoInfo.DOLCH_DUMDUM,
        scarce: false,

        baseDamage: BASE_DAMAGE,
        optimalRange: OPTIMAL_RANGE,
        dropRange: DROP_RANGE - 5,
        spread: SPREAD,
        verticalRecoil: VERTICAL_RECOIL,
        muzzleVelocity: MUZZLE_VELOCITY - 50,
        ammoReserve: AMMO_RESERVE
    }),
    new AmmoStats({
        info: AmmoInfo.DOLCH_FMJ,
        scarce: false,

        baseDamage: BASE_DAMAGE,
        optimalRange: OPTIMAL_RANGE + 10,
        dropRange: DROP_RANGE - 5,
        spread: SPREAD,
        verticalRecoil: VERTICAL_RECOIL + 3,
        muzzleVelocity: MUZZLE_VELOCITY - 50,
        ammoReserve: AMMO_RESERVE
    }),
]

export const DOLCH: Weapon = new Weapon({
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