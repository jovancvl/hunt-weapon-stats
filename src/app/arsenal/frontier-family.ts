import { CustomAmmo, AmmoInfo } from "./ammo";
import { ActionType, Weapon } from "./weapon";

const FRONTIER_73C_CUSTOM_AMMO = [
    new CustomAmmo({
        info: AmmoInfo.COMPACT_FMJ,
        scarce: false,

        maxDamageRangeModifier: +10,
        dropRangeModifier: -15,
        spreadModifier: 10,
        verticalRecoilModifier: +3,
        muzzleVelocityModifier: -70
    }),
    new CustomAmmo({
        info: AmmoInfo.COMPACT_HIGH_VELOCITY,
        scarce: false,

        damageModifier: -6,
        dropRangeModifier: +20,
        verticalRecoilModifier: +3,
        muzzleVelocityModifier: +100,
        ammoReserveModifier: -10
    }),
    new CustomAmmo({
        info: AmmoInfo.COMPACT_INCENDIARY,
        scarce: false
    }),
    new CustomAmmo({
        info: AmmoInfo.COMPACT_POISON,
        scarce: false
    }),
    new CustomAmmo({
        info: AmmoInfo.COMPACT_SUBSONIC,
        scarce: false,

        dropRangeModifier: -30,
        muzzleVelocityModifier: -137
    })
]

export const FRONTIER_73C: Weapon = new Weapon({
    name: "Frontier 73C",
    cost: 41,
    size: 3,
    action: ActionType.LEVER_ACTION,

    baseAmmo: AmmoInfo.COMPACT,
    
    optimalRange: 20,
    baseDamage: 110,
    dropRange: 140,
    spread: 17.5,
    verticalRecoil: 5,
    muzzleVelocity: 400,
    ammoReserve: 28,

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
    
    customAmmos: FRONTIER_73C_CUSTOM_AMMO,
})