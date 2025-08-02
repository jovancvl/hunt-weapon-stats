import { AmmoStats, AmmoInfo } from "../arsenal/ammo";
import { ActionType, Weapon } from "../arsenal/weapon";

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
const IMAGE = "https://huntshowdown.wiki.gg/images/e/e3/Weapon_Haymaker.png?a1f197"

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
    new AmmoStats({
        info: AmmoInfo.LONG_FMJ,
        scarce: false,

        baseDamage: BASE_DAMAGE,
        optimalRange: OPTIMAL_RANGE + 10,
        dropRange: DROP_RANGE - 15,
        spread: SPREAD,
        verticalRecoil: VERTICAL_RECOIL + 2,
        muzzleVelocity: MUZZLE_VELOCITY - 155,
        ammoReserve: AMMO_RESERVE
    }),
    new AmmoStats({
        info: AmmoInfo.LONG_POISON,
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