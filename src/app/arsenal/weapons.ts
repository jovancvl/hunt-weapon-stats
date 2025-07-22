import { CustomAmmo, CustomAmmoType, RegularAmmoType } from "./ammo"

export class Weapon {
    private _activeCustomAmmo: CustomAmmo | undefined
    maxDamageRange: number

    name: string
    cost: number
    size: number
    regularAmmoType: RegularAmmoType
    customAmmos: CustomAmmo[]
    baseDamage: number
    dropRange: number
    rateOfFire: number
    cycleTime: number
    spread: number
    sway: number
    verticalRecoil: number
    reloadSpeed: number
    muzzleVelocity: number
    meleeDamage: number
    heavyMeleeDamage: number
    staminaConsumption: number
    magazine: number
    ammoReserve: number

    get activeCustomAmmo(): CustomAmmo | undefined { return this.activeCustomAmmo; }
    set activeCustomAmmo(value: CustomAmmoType | undefined) {
        if (value === undefined) { // want to remove active
            if (this._activeCustomAmmo !== undefined) { // there is active
                this._activeCustomAmmo.remove()
                this._activeCustomAmmo = undefined
                return
            }
            return // already removed
        }

        // want to change active
        if (this._activeCustomAmmo !== undefined) {
            this._activeCustomAmmo.remove()
            this._activeCustomAmmo = undefined
        }

        const ca = this.customAmmos.find(ca => ca.type === value)
        if (ca === undefined) {
            throw new Error(`Custom ammo type not on weapon: ${value}`)
        }
        ca.apply()
        this._activeCustomAmmo = ca
    }

    constructor(weapon: WeaponInterface) {
        this.name = weapon.name
        this.cost = weapon.cost
        this.size = weapon.size
        this.regularAmmoType = weapon.regularAmmoType
        this.customAmmos = weapon.customAmmos
        this.baseDamage = weapon.baseDamage
        this.dropRange = weapon.dropRange
        this.rateOfFire = weapon.rateOfFire
        this.cycleTime = weapon.cycleTime
        this.spread = weapon.spread
        this.sway = weapon.sway
        this.verticalRecoil = weapon.verticalRecoil
        this.reloadSpeed = weapon.reloadSpeed
        this.muzzleVelocity = weapon.muzzleVelocity
        this.meleeDamage = weapon.meleeDamage
        this.heavyMeleeDamage = weapon.heavyMeleeDamage
        this.staminaConsumption = weapon.staminaConsumption
        this.magazine = weapon.magazine
        this.ammoReserve = weapon.ammoReserve

        switch (weapon.regularAmmoType) {
            case RegularAmmoType.COMPACT: {
                this.maxDamageRange = 20
                break
            }
            case RegularAmmoType.MEDIUM: {
                this.maxDamageRange = 30
                break
            }
            case RegularAmmoType.LONG: {
                this.maxDamageRange = 40
                break
            }
            default: {
                throw new Error("RegularAmmoType not recognized")
            }
        }

        for (const ca of this.customAmmos) {
            ca.weapon = this
        }
    }
}

export interface WeaponInterface {
    name: string
    cost: number
    size: number
    regularAmmoType: RegularAmmoType
    customAmmos: CustomAmmo[]
    baseDamage: number
    dropRange: number
    rateOfFire: number
    cycleTime: number
    spread: number
    sway: number
    verticalRecoil: number
    reloadSpeed: number
    muzzleVelocity: number
    meleeDamage: number
    heavyMeleeDamage: number
    staminaConsumption: number
    magazine: number
    ammoReserve: number
}

export enum CycleType {
    BOLT_ACTION,
    LEVER_ACTION,
    PUMP_ACTION,
    SINGLE_SHOT,
    SEMI_OR_FULL_AUTO,
    SINGLE_ACTION,
    DOUBLE_ACTION
}

