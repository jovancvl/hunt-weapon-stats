import { AmmoStats, AmmoInfo } from "../arsenal/ammo";
import { ActionType, Weapon } from "../arsenal/weapon";

const BASE_DAMAGE = 110
const OPTIMAL_RANGE = 20
const DROP_RANGE = 140
const SPREAD = 17.5
const VERTICAL_RECOIL = 5
const MUZZLE_VELOCITY = 400
const AMMO_RESERVE = 28

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
        optimalRange: OPTIMAL_RANGE +10,
        dropRange: DROP_RANGE -15,
        spread: SPREAD + 10,
        verticalRecoil: VERTICAL_RECOIL +3,
        muzzleVelocity: MUZZLE_VELOCITY -70,
        ammoReserve: AMMO_RESERVE
    }),
    new AmmoStats({
        info: AmmoInfo.COMPACT_HIGH_VELOCITY,
        scarce: false,

        baseDamage: BASE_DAMAGE -6,
        optimalRange: OPTIMAL_RANGE,
        dropRange: DROP_RANGE +20,
        spread: SPREAD,
        verticalRecoil: VERTICAL_RECOIL +3,
        muzzleVelocity: MUZZLE_VELOCITY +100,
        ammoReserve: AMMO_RESERVE -10
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
        info: AmmoInfo.COMPACT_SUBSONIC,
        scarce: false,

        baseDamage: BASE_DAMAGE,
        optimalRange: OPTIMAL_RANGE,
        dropRange: DROP_RANGE - 30,
        spread: SPREAD,
        verticalRecoil: VERTICAL_RECOIL,
        muzzleVelocity: MUZZLE_VELOCITY - 137,
        ammoReserve: AMMO_RESERVE
    })
]

export const FRONTIER_73C: Weapon = new Weapon({
    name: "Frontier 73C",
    cost: 41,
    size: 3,
    action: ActionType.LEVER_ACTION,

    availableAmmo: AMMO,

    sway: 77,
    rateOfFire: 29,
    cycleTime: 1.2,
    reloadTime: 10.1,
    magazine: 7,
    hasExtraBullet: true,

    meleeDamage: 27,
    staminaConsumption: 12,
    heavyMeleeDamage: 54,
    heavyStaminaConsumption: 25,

    image: "https://huntshowdown.wiki.gg/images/thumb/0/0f/Weapon_Frontier_73C.png/256px-Weapon_Frontier_73C.png"
})