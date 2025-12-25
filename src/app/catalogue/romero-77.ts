import { AmmoInfo } from "../arsenal/ammo-info";
import { AmmoStats } from "../arsenal/ammo-stats";
import { ActionType, Weapon } from "../arsenal/weapon";

const BASE_DAMAGE = 220
const OPTIMAL_RANGE = 14
const DROP_RANGE = 30
const SPREAD = 20
const VERTICAL_RECOIL = 20
const MUZZLE_VELOCITY = 450
const AMMO_RESERVE = 12  

const NAME = "Romero 77"
const COST = 66 
const SIZE = 3
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

        baseDamage: BASE_DAMAGE - 76,
        optimalRange: OPTIMAL_RANGE - 5,
        dropRange: DROP_RANGE,
        spread: SPREAD,
        verticalRecoil: VERTICAL_RECOIL,
        muzzleVelocity: MUZZLE_VELOCITY - 350,
        ammoReserve: AMMO_RESERVE
    }),
    new AmmoStats({
        info: AmmoInfo.SHELL_PENNYSHOT,
        scarce: false,

        baseDamage: BASE_DAMAGE - 28,
        optimalRange: OPTIMAL_RANGE - 3,
        dropRange: DROP_RANGE,
        spread: SPREAD + 55,
        verticalRecoil: VERTICAL_RECOIL,
        muzzleVelocity: MUZZLE_VELOCITY,
        ammoReserve: AMMO_RESERVE + 8
    }),
    new AmmoStats({
        info: AmmoInfo.SHELL_SLUG,
        scarce: false,

        baseDamage: BASE_DAMAGE - 41,
        optimalRange: OPTIMAL_RANGE + 1,
        dropRange: DROP_RANGE,
        spread: SPREAD + 45,
        verticalRecoil: VERTICAL_RECOIL,
        muzzleVelocity: MUZZLE_VELOCITY,
        ammoReserve: AMMO_RESERVE - 4
    }),
    new AmmoStats({
        info: AmmoInfo.SHELL_STARSHELL,
        scarce: false,

        baseDamage: BASE_DAMAGE - 217,
        optimalRange: OPTIMAL_RANGE,
        dropRange: DROP_RANGE,
        spread: SPREAD + 30,
        verticalRecoil: VERTICAL_RECOIL - 17,
        muzzleVelocity: MUZZLE_VELOCITY - 375,
        ammoReserve: AMMO_RESERVE - 4
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