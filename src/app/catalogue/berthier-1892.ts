import { AmmoInfo } from "../arsenal/ammo-info";
import { AmmoStats } from "../arsenal/ammo-stats";
import { ActionType, Weapon } from "../arsenal/weapon";

const BASE_DAMAGE = 133
const OPTIMAL_RANGE = 40
const DROP_RANGE = 120
const SPREAD = 42.5
const VERTICAL_RECOIL = 12
const MUZZLE_VELOCITY = 590
const AMMO_RESERVE = 18 

const NAME = "Berthier 1892"
const COST = 330 
const SIZE = 3
const ACTION = ActionType.BOLT_ACTION
const SWAY = 77
const RATE_OF_FIRE = 27
const CYCLE_TIME = 1.7
const RELOAD_TIME = 2.7
const MAGAZINE = 3 
const HAS_EXTRA_BULLET = false
const MELEE_DAMAGE = 27
const STAMINA_CONSUMPTION = 12
const HEAVY_MELEE_DAMAGE = 54
const HEAVY_STAMINA_CONSUMPTION = 25

const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_Berthier_1892.png"

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
        info: AmmoInfo.LONG_INCENDIARY,
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
        info: AmmoInfo.LONG_SPITZER,
        scarce: false,

        baseDamage: BASE_DAMAGE -20,
        optimalRange: OPTIMAL_RANGE,
        dropRange: DROP_RANGE +20,
        spread: SPREAD,
        verticalRecoil: VERTICAL_RECOIL +4,
        muzzleVelocity: MUZZLE_VELOCITY +190,
        ammoReserve: AMMO_RESERVE -6
    })
]

export const BERTHIER_1892: Weapon = new Weapon({
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