import { CustomAmmo, BaseAmmoName, CustomAmmoEffectType, CustomAmmoEffectSeverity, BaseAmmoDescription } from "./ammo"

export class Weapon {
    private _activeCustomAmmo: CustomAmmo | undefined
    baseAmmoEffectActive: boolean = false

    name: string
    cost: number
    size: number
    action: ActionType

    baseAmmoName: BaseAmmoName
    baseAmmoEffectType: CustomAmmoEffectType
    baseAmmoEffectSeverity: CustomAmmoEffectSeverity
    baseAmmoDescription: BaseAmmoDescription

    baseDamage: number
    /**
     * For rifles and pistols, this is the range at which the weapon deals its full damage.
     * 
     * For shotguns and special weapons, this is the range at which the weapon will reliably down a hunter in one shot.
     */
    optimalRange: number 
    dropRange: number
    spread: number
    verticalRecoil: number
    muzzleVelocity: number
    ammoReserve: number

    sway: number
    rateOfFire: number
    cycleTime: number
    reloadTime: number
    magazine: number
    hasExtraBullet: boolean

    meleeDamage: number
    heavyMeleeDamage: number
    staminaConsumption: number

    customAmmos: CustomAmmo[] = []

    get activeCustomAmmo(): CustomAmmo | undefined { return this._activeCustomAmmo; }
    set activeCustomAmmo(value: CustomAmmo | undefined) {
        if (value === undefined) { // want to remove active
            if (this._activeCustomAmmo !== undefined) { // there is active
                this._activeCustomAmmo.remove(this)
                this._activeCustomAmmo = undefined
                return
            }
            return // already removed
        }

        // want to change active
        if (this._activeCustomAmmo !== undefined) {
            this._activeCustomAmmo.remove(this)
            this._activeCustomAmmo = undefined
        }

        const ca = this.customAmmos.find(ca => ca.name === value.name)
        if (ca === undefined) {
            throw new Error(`Custom ammo type not on weapon: ${value}`)
        }
        ca.apply(this)
        this._activeCustomAmmo = ca
    }

    constructor(weapon: WeaponInterface) {
        this.name = weapon.name
        this.cost = weapon.cost
        this.size = weapon.size
        this.action = weapon.action

        this.baseAmmoName = weapon.baseAmmoName
        this.baseAmmoEffectType = weapon.baseAmmoEffectType
        this.baseAmmoEffectSeverity = weapon.baseAmmoEffectSeverity
        this.baseAmmoDescription = weapon.baseAmmoDescription
        
        this.baseDamage = weapon.baseDamage

        this.dropRange = weapon.dropRange
        this.spread = weapon.spread
        this.verticalRecoil = weapon.verticalRecoil
        this.muzzleVelocity = weapon.muzzleVelocity
        this.ammoReserve = weapon.ammoReserve

        this.sway = weapon.sway
        this.rateOfFire = weapon.rateOfFire
        this.cycleTime = weapon.cycleTime
        this.reloadTime = weapon.reloadTime
        this.magazine = weapon.magazine
        this.hasExtraBullet = weapon.hasExtraBullet
        
        this.meleeDamage = weapon.meleeDamage
        this.heavyMeleeDamage = weapon.heavyMeleeDamage
        this.staminaConsumption = weapon.staminaConsumption
        
        this.customAmmos = weapon.customAmmos

        switch (weapon.baseAmmoName) {
            case BaseAmmoName.COMPACT: {
                this.optimalRange = 20
                break
            }
            case BaseAmmoName.MEDIUM: {
                this.optimalRange = 30
                break
            }
            case BaseAmmoName.LONG: {
                this.optimalRange = 40
                break
            }
            default: {
                throw new Error("RegularAmmoName not recognized")
            }
        }
    }
}

export interface WeaponInterface {
    name: string
    cost: number
    size: number
    action: ActionType

    baseAmmoName: BaseAmmoName
    baseAmmoEffectType: CustomAmmoEffectType
    baseAmmoEffectSeverity: CustomAmmoEffectSeverity
    baseAmmoDescription: BaseAmmoDescription

    baseDamage: number
    dropRange: number
    spread: number
    verticalRecoil: number
    muzzleVelocity: number
    ammoReserve: number

    sway: number
    rateOfFire: number
    cycleTime: number
    reloadTime: number
    magazine: number
    hasExtraBullet: boolean

    meleeDamage: number
    heavyMeleeDamage: number
    staminaConsumption: number

    customAmmos: CustomAmmo[]
}



export enum ActionType {
    BOLT_ACTION,
    LEVER_ACTION,
    PUMP_ACTION,
    SINGLE_SHOT,
    SEMI_OR_FULL_AUTO,
    SINGLE_ACTION,
    DOUBLE_ACTION
}

