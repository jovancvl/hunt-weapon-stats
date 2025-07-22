import { CustomAmmo, CustomAmmoType, RegularAmmoType } from "./ammo";
import { StatusEffect } from "./status-effects";
import { Weapon } from "./weapons";

export const FRONTIER_73C: Weapon = new Weapon({
    name: "Frontier 73C",
    cost: 41,
    size: 3,
    regularAmmoType: RegularAmmoType.COMPACT,
    customAmmos: [
        new CustomAmmo({
            type: CustomAmmoType.FMJ,
            cost: 50,
            maxDamageRangeModifier: +10,
            dropRangeModifier: -15,
            spreadModifier: 10,
            verticalRecoilModifier: +3,
            muzzleVelocityModifier: -70
        }),
        new CustomAmmo({
            type: CustomAmmoType.HIGH_VELOCITY,
            cost: 60,
            damageModifier: -6,
            dropRangeModifier: +20,
            verticalRecoilModifier: +3,
            muzzleVelocityModifier: +100,
            ammoReserveModifier: -10
        }),
        new CustomAmmo({
            type: CustomAmmoType.POISON,
            cost: 50,
            statusEffect: StatusEffect.POISON_MEDIUM
        })
    ],
    baseDamage: 110,
    dropRange: 140,
    rateOfFire: 29,
    cycleTime: 1.2,
    spread: 17.5,
    sway: 77,
    verticalRecoil: 5,
    reloadSpeed: 10.1,
    muzzleVelocity: 400,
    meleeDamage: 27,
    heavyMeleeDamage: 54,
    staminaConsumption: 25,
    magazine: 7,
    ammoReserve: 28
})