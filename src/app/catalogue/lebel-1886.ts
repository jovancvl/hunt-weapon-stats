import { AmmoStats, AmmoInfo } from "../arsenal/ammo";
import { ActionType, Weapon } from "../arsenal/weapon";

const BASE_DAMAGE = 132
const OPTIMAL_RANGE = 40
const DROP_RANGE = 120
const SPREAD = 77
const VERTICAL_RECOIL = 9
const MUZZLE_VELOCITY = 630
const AMMO_RESERVE = 5

const NAME = "Lebel 1886"
const COST = 397
const SIZE = 3
const ACTION = ActionType.BOLT_ACTION
const SWAY = 77
const RATE_OF_FIRE = 20
const CYCLE_TIME = 1.8
const RELOAD_TIME = 18.7
const MAGAZINE = 10
const HAS_EXTRA_BULLET = false
const MELEE_DAMAGE = 27
const STAMINA_CONSUMPTION = 12
const HEAVY_MELEE_DAMAGE = 54
const HEAVY_STAMINA_CONSUMPTION = 25
const IMAGE = "https://huntshowdown.wiki.gg/images/b/b2/Weapon_Lebel_1886.png"

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
        info: AmmoInfo.LONG_SPITZER,
        scarce: false,

        baseDamage: BASE_DAMAGE -19,
        optimalRange: OPTIMAL_RANGE,
        dropRange: DROP_RANGE +25,
        spread: SPREAD,
        verticalRecoil: VERTICAL_RECOIL +4,
        muzzleVelocity: MUZZLE_VELOCITY +220,
        ammoReserve: AMMO_RESERVE -2
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
    })
]

export const LEBEL_1886: Weapon = new Weapon({
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