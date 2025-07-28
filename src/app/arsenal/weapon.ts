import { CustomAmmo, AmmoInfo } from "./ammo"

export enum ActionType {
    BOLT_ACTION,
    LEVER_ACTION,
    PUMP_ACTION,
    SINGLE_SHOT,
    SEMI_OR_FULL_AUTO,
    SINGLE_ACTION,
    DOUBLE_ACTION
}

export class Weapon {
    private _activeCustomAmmo: CustomAmmo | undefined
    // baseAmmoEffectActive: boolean = false

    name: string
    cost: number
    size: number
    action: ActionType

    baseAmmo: AmmoInfo

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
    staminaConsumption: number
    heavyMeleeDamage: number
    heavyStaminaConsumption: number

    customAmmos: CustomAmmo[] = []

    get activeCustomAmmo(): CustomAmmo | undefined { return this._activeCustomAmmo; }
    set activeCustomAmmo(value: CustomAmmo | undefined) {
        console.log('HALLO')
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

        const ca = this.customAmmos.find(ca => ca.info.name === value.info.name)
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

        this.baseAmmo = weapon.baseAmmo

        this.baseDamage = weapon.baseDamage

        this.optimalRange = weapon.optimalRange
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
        this.staminaConsumption = weapon.staminaConsumption
        this.heavyMeleeDamage = weapon.heavyMeleeDamage
        this.heavyStaminaConsumption = weapon.heavyStaminaConsumption

        this.customAmmos = weapon.customAmmos
    }

    /**
     * Used to initialize a variable without using undefined or null
     */
    static readonly EMPTY = new Weapon({
        name: 'none',
        cost: 0,
        size: 0,
        action: ActionType.BOLT_ACTION,

        baseAmmo: AmmoInfo.COMPACT,
        optimalRange: 0,

        baseDamage: 0,
        dropRange: 0,
        spread: 0,
        verticalRecoil: 0,
        muzzleVelocity: 0,
        ammoReserve: 0,

        sway: 0,
        rateOfFire: 0,
        cycleTime: 0,
        reloadTime: 0,
        magazine: 0,
        hasExtraBullet: false,

        meleeDamage: 0,
        heavyMeleeDamage: 0,
        staminaConsumption: 0,
        heavyStaminaConsumption: 0,

        customAmmos: []
    })
}

export interface WeaponInterface {
    name: string
    cost: number
    size: number
    action: ActionType

    baseAmmo: AmmoInfo
    optimalRange: number

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
    heavyStaminaConsumption: number

    customAmmos: CustomAmmo[]
}

