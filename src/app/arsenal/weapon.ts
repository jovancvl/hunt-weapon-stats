import { AmmoStats } from "./ammo"

export enum ActionType {
    BOLT_ACTION,
    LEVER_ACTION,
    PUMP_ACTION,
    SINGLE_SHOT,
    SEMI_OR_FULL_AUTO,
    SINGLE_ACTION,
    DOUBLE_ACTION
}

export interface WeaponInterface {
    name: string
    cost: number
    size: number
    action: ActionType

    availableAmmo: AmmoStats[]

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

    image: string
}


export class Weapon {
    name: string
    cost: number
    size: number
    action: ActionType

    activeAmmo: AmmoStats
    baseAmmo: AmmoStats
    availableAmmo: AmmoStats[]

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

    image: string

    constructor(weapon: WeaponInterface) {
        this.name = weapon.name
        this.cost = weapon.cost
        this.size = weapon.size
        this.action = weapon.action

        if (weapon.availableAmmo.length === 0) {
            throw new Error("Weapon must have at least 1 available ammo - MUST be regular ammo for the weapon")
        }
        this.availableAmmo = weapon.availableAmmo
        this.baseAmmo = this.availableAmmo[0]
        this.activeAmmo = this.availableAmmo[0]

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

        this.image = weapon.image
    }

    /**
     * Used to initialize a variable without using undefined or null
     */
    static readonly EMPTY = new Weapon({
        name: 'NONE',
        cost: 0,
        size: 0,
        action: ActionType.BOLT_ACTION,

        availableAmmo: [AmmoStats.EMPTY],

        sway: 0,
        rateOfFire: 0,
        cycleTime: 0,
        reloadTime: 0,
        magazine: 0,
        hasExtraBullet: false,

        meleeDamage: 0,
        staminaConsumption: 0,
        heavyMeleeDamage: 0,
        heavyStaminaConsumption: 0,
        image: "https://huntshowdown.wiki.gg/images/thumb/0/0f/Weapon_Frontier_73C.png/256px-Weapon_Frontier_73C.png"
    })
}


