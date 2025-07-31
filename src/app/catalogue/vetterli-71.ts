import { AmmoInfo, AmmoStats } from "../arsenal/ammo"
import { Weapon, ActionType } from "../arsenal/weapon"

const BASE_DAMAGE = 130
const OPTIMAL_RANGE = 30
const DROP_RANGE = 125
const SPREAD = 22.5
const VERTICAL_RECOIL = 5
const MUZZLE_VELOCITY = 410
const AMMO_RESERVE = 20

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
    name: "Vetterli 71",
    cost: 105,
    size: 3,
    action: ActionType.BOLT_ACTION,

    availableAmmo: AMMO,

    sway: 77,
    rateOfFire: 24,
    cycleTime: 1.4,
    reloadTime: 12.1,
    magazine: 6,
    hasExtraBullet: true,

    meleeDamage: 27,
    staminaConsumption: 12,
    heavyMeleeDamage: 54,
    heavyStaminaConsumption: 25,

    image: "https://huntshowdown.wiki.gg/images/thumb/7/71/Weapon_Vetterli_71.png/256px-Weapon_Vetterli_71.png"
})