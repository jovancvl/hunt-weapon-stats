import { CustomAmmo, CustomAmmoEffectType, CustomAmmoName, BaseAmmoName, CustomAmmoEffectSeverity, CustomAmmoDescription, BaseAmmoDescription } from "./ammo";
import { ActionType, Weapon } from "./weapon";

const FRONTIER_73C_CUSTOM_AMMO = [
    new CustomAmmo({
        name: CustomAmmoName.FMJ,
        type: CustomAmmoEffectType.NA,
        severity: CustomAmmoEffectSeverity.NA,
        description: CustomAmmoDescription.FMJ,
        cost: 50,
        scarce: false,

        maxDamageRangeModifier: +10,
        dropRangeModifier: -15,
        spreadModifier: 10,
        verticalRecoilModifier: +3,
        muzzleVelocityModifier: -70
    }),
    new CustomAmmo({
        name: CustomAmmoName.HIGH_VELOCITY,
        type: CustomAmmoEffectType.NA,
        severity: CustomAmmoEffectSeverity.NA,
        description: CustomAmmoDescription.HIGH_VELOCITY,
        cost: 60,
        scarce: false,

        damageModifier: -6,
        dropRangeModifier: +20,
        verticalRecoilModifier: +3,
        muzzleVelocityModifier: +100,
        ammoReserveModifier: -10
    }),
    new CustomAmmo({
        name: CustomAmmoName.INCENDIARY,
        type: CustomAmmoEffectType.BURN,
        severity: CustomAmmoEffectSeverity.MEDIUM,
        description: CustomAmmoDescription.INCENDIARY,
        cost: 40,
        scarce: false
    }),
    new CustomAmmo({
        name: CustomAmmoName.POISON,
        type: CustomAmmoEffectType.POISON,
        severity: CustomAmmoEffectSeverity.MEDIUM,
        description: CustomAmmoDescription.POISON,
        cost: 50,
        scarce: false
    }),
    new CustomAmmo({
        name: CustomAmmoName.SUBSONIC,
        type: CustomAmmoEffectType.NA,
        severity: CustomAmmoEffectSeverity.NA,
        description: CustomAmmoDescription.SUBSONIC,
        cost: 5,
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

    baseAmmoName: BaseAmmoName.COMPACT,
    baseAmmoEffectType: CustomAmmoEffectType.NA,
    baseAmmoEffectSeverity: CustomAmmoEffectSeverity.NA,
    baseAmmoDescription: BaseAmmoDescription.COMPACT,
    
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