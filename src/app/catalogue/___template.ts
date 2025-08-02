import { AmmoStats, AmmoInfo } from "../arsenal/ammo";
import { ActionType, Weapon } from "../arsenal/weapon";

const BASE_DAMAGE = 23232323
const OPTIMAL_RANGE = 2232323
const DROP_RANGE = 2323232
const SPREAD = 232323223
const VERTICAL_RECOIL = 23232323
const MUZZLE_VELOCITY = 2323323223
const AMMO_RESERVE = 232322323 

const NAME = "asdasdasdasdasd"
const COST = 222222
const SIZE = 222222
const ACTION = ActionType.BOLT_ACTION
const SWAY = 222222
const RATE_OF_FIRE = 222222
const CYCLE_TIME = 222222
const RELOAD_TIME = 222222
const MAGAZINE = 222222
const HAS_EXTRA_BULLET = false
const MELEE_DAMAGE = 222222
const STAMINA_CONSUMPTION = 222222
const HEAVY_MELEE_DAMAGE = 222222
const HEAVY_STAMINA_CONSUMPTION = 222222
const IMAGE = "222222"

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
]

export const ____NAME: Weapon = new Weapon({
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