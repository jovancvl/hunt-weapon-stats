import { AmmoInfo, AmmoStats } from "../arsenal/ammo"
import { Weapon, ActionType } from "../arsenal/weapon"

const BASE_DAMAGE = 110
const OPTIMAL_RANGE = 20
const DROP_RANGE = 145
const SPREAD = 17.5
const VERTICAL_RECOIL = 3
const MUZZLE_VELOCITY = 400
const AMMO_RESERVE = 20

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
    new AmmoStats({
        info: AmmoInfo.COMPACT_HIGH_VELOCITY,
        scarce: false,

        baseDamage: BASE_DAMAGE,
        optimalRange: OPTIMAL_RANGE,
        dropRange: DROP_RANGE - 30,
        spread: SPREAD,
        verticalRecoil: VERTICAL_RECOIL,
        muzzleVelocity: MUZZLE_VELOCITY - 137,
        ammoReserve: AMMO_RESERVE + 4
    }),
]

export const INFANTRY_37L: Weapon = new Weapon({
    name: "Infantry 37L",
    cost: 78,
    size: 3,
    action: ActionType.LEVER_ACTION,

    availableAmmo: AMMO,

    sway: 77,
    rateOfFire: 35,
    cycleTime: 1.2,
    reloadTime: 17.9,
    magazine: 17,
    hasExtraBullet: true,

    meleeDamage: 27,
    staminaConsumption: 12,
    heavyMeleeDamage: 54,
    heavyStaminaConsumption: 25,

    image: "https://huntshowdown.wiki.gg/images/5/56/Weapon_Infantry_73L.png"
})