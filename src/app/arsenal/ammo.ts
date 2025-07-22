
import { StatusEffect } from "./status-effects"
import { Weapon } from "./weapons"

export class CustomAmmo {
    // url: string
    type: CustomAmmoType
    cost: number
    damageModifier?: number
    maxDamageRangeModifier?: number
    dropRangeModifier?: number
    spreadModifier?: number
    verticalRecoilModifier?: number
    muzzleVelocityModifier?: number
    ammoReserveModifier?: number
    statusEffect?: StatusEffect
    weapon?: Weapon
    
    constructor(customAmmoInterface: CustomAmmoInterface) {
        this.type = customAmmoInterface.type
        this.cost = customAmmoInterface.cost
        this.damageModifier = customAmmoInterface.damageModifier 
        this.maxDamageRangeModifier = customAmmoInterface.maxDamageRangeModifier 
        this.dropRangeModifier = customAmmoInterface.dropRangeModifier 
        this.spreadModifier = customAmmoInterface.spreadModifier 
        this.verticalRecoilModifier = customAmmoInterface.verticalRecoilModifier
        this.muzzleVelocityModifier = customAmmoInterface.muzzleVelocityModifier
        this.ammoReserveModifier = customAmmoInterface.ammoReserveModifier 
        this.statusEffect = customAmmoInterface.statusEffect
    }

    apply() {
        if (this.weapon === undefined) {
            throw new Error('Weapon property must be set inside CustomAmmo before use.')
        }
        // this.weapon.activeCustomAmmo = this
        this.weapon.baseDamage += this.damageModifier ? this.damageModifier : 0
        this.weapon.maxDamageRange += this.maxDamageRangeModifier ? this.maxDamageRangeModifier : 0
        this.weapon.dropRange += this.dropRangeModifier ? this.dropRangeModifier : 0
        this.weapon.spread += this.spreadModifier ? this.spreadModifier : 0
        this.weapon.verticalRecoil += this.verticalRecoilModifier ? this.verticalRecoilModifier : 0
        this.weapon.muzzleVelocity += this.muzzleVelocityModifier ? this.muzzleVelocityModifier : 0
        this.weapon.ammoReserve += this.ammoReserveModifier ? this.ammoReserveModifier : 0
    }

    remove() {
        if (this.weapon === undefined) {
            throw new Error('Weapon property must be set inside CustomAmmo before use.')
        }
        // this.weapon.activeCustomAmmo = undefined
        this.weapon.baseDamage -= this.damageModifier ? this.damageModifier : 0
        this.weapon.maxDamageRange -= this.maxDamageRangeModifier ? this.maxDamageRangeModifier : 0
        this.weapon.dropRange -= this.dropRangeModifier ? this.dropRangeModifier : 0
        this.weapon.spread -= this.spreadModifier ? this.spreadModifier : 0
        this.weapon.verticalRecoil -= this.verticalRecoilModifier ? this.verticalRecoilModifier : 0
        this.weapon.muzzleVelocity -= this.muzzleVelocityModifier ? this.muzzleVelocityModifier : 0
        this.weapon.ammoReserve -= this.ammoReserveModifier ? this.ammoReserveModifier : 0
    }
}

export interface CustomAmmoInterface {
    type: CustomAmmoType,
    cost: number,
    damageModifier?: number,
    maxDamageRangeModifier?: number,
    dropRangeModifier?: number,
    spreadModifier?: number,
    verticalRecoilModifier?: number,
    muzzleVelocityModifier?: number,
    ammoReserveModifier?: number,
    statusEffect?: StatusEffect
}

export enum RegularAmmoType {
    COMPACT = 'Compact',
    MEDIUM = 'Medium',
    LONG = 'Long'
}

export enum CustomAmmoType {
    POISON = 'Poison',
    FMJ = 'FMJ',
    HIGH_VELOCITY = 'High Velocity'
}