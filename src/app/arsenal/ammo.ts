import { Weapon } from "./weapon"

export enum BaseAmmoName {
    COMPACT = 'Compact',
    MEDIUM = 'Medium',
    LONG = 'Long',
    BUCKSHOT = 'Buckshot',
    DERRINGER = 'Derringer',

    ARROW = 'Arrow', // medium bleed
    BOLT = 'Bolt', // intense bleed
    CHUKONU = 'Compact Bolt', // medium bleed
    HAND_CROSSBOW = 'Compact Bolt', // medium bleed
    DOLCH = 'Dolch',
    LANCE = 'Lance Bolt',
    NITRO = 'Nitro'
}

export enum BaseAmmoDescription {
    COMPACT = 'Small caliber bullet.'
}

export enum CustomAmmoName {
    DUMDUM = 'Dumdum', // compact - medium | medium - intense
    SUBSONIC = 'Subsonic',
    POISON = 'Poison', // compact - medium | medium - medium | long - intense
    HIGH_VELOCITY = 'High Velocity',
    FMJ = 'FMJ',
    INCENDIARY = 'Incendiary', // medium
    EXPLOSIVE = 'Explosive',
    SPITZER = 'Spitzer',

    STARSHELL = 'Starshell', // intense
    SLUG = 'Slug',
    PENNY = 'Pennyshot',
    FLECHETTE = 'Flechette', // medium [variable]
    DRAGON_BREATH = 'Dragon Breath', // medium

    WAXED_FRAG_CHARGE = 'Waxed Frag Charge', // intense bleed
    STEEL_BALL = 'Steel Balls',
    HARPOON = 'Harpoon', // intense bleed
    DRAGON_BREATH_CHARGE = 'Dragon Breath Charge', // medium burn

    POISON_BOLT = 'Poison Bolt', // remove bleed
    DRAGON_BREATH_BOLT = 'Dragon Breath Bolt', // remove bleed | medium burn
    CHAOS_BOLT = 'Chaos Bolt', // remove bleed
    CHOKE_BOLT = 'Choke Bolt', // remove bleed

    STEEL_BOLT = 'Steel Bolt', // remove bleed but reapply
    SHOT_BOLT = 'Shot Bolt', // remove bleed
    EXPLOSIVE_BOLT = 'Explosive Bolt', // remove bleed
    
    POISON_ARROW = 'Poison Arrows', // intense poison
    FRAG_ARROW = 'Frag Arrows', // remove bleed but reapply
    CONCERTINA_ARROW = 'Concertina Arrows', // remove bleed but reapply

    EXPLOSIVE_CHUKONU = 'Explosive Bolt', // light bleed, remove bleed
    INCENDIARY_CHUKONU = 'Incendiary Bolt', // medium burn, remove bleed

    SHREDDER = 'Shredder' // intense
}

export enum CustomAmmoEffectType {
    NA = 'N/A',
    BURN = 'burning',
    BLEED = 'bleeding',
    POISON = 'poison',
}

export enum CustomAmmoEffectSeverity {
    NA = 'N/A',
    LIGHT = 'light',
    MEDIUM = 'medium',
    INTENSE = 'intense',
}

export enum CustomAmmoDescription {
    DUMDUM = `Inflicts <EFFECT_SEVERITY> bleeding at the cost of removed penetration.`,
    SUBSONIC = `Reduces gunshot sound profile.`,
    POISON = `Inflicts <EFFECT_SEVERITY> poison at the cost of removed penetration.`,
    HIGH_VELOCITY = `Increases muzzle velocity at the cost of damage and reduced ammo reserves.`,
    FMJ = `Increases penetration and the range at which the gun deals maximum damage at the cost of reduced muzzle velocity and reduced drop range.`,
    INCENDIARY = `Inflicts <EFFECT_SEVERITY> burning in a single hit within maximum damage range at the cost of removed penetration.`,
    EXPLOSIVE = `Explodes on hit.`,
    SPITZER = `Increases penetration and muzzle velocity at the cost of reduced damage and reduced ammo reserves.`
}

export interface CustomAmmoInterface {
    name: CustomAmmoName
    type: CustomAmmoEffectType
    severity: CustomAmmoEffectSeverity
    description: CustomAmmoDescription
    cost: number
    scarce: boolean

    damageModifier?: number,
    maxDamageRangeModifier?: number,
    dropRangeModifier?: number,
    spreadModifier?: number,
    verticalRecoilModifier?: number,
    muzzleVelocityModifier?: number,
    ammoReserveModifier?: number,
}

export class CustomAmmo {
    name: CustomAmmoName
    type: CustomAmmoEffectType
    severity: CustomAmmoEffectSeverity
    description: string // format custom ammo description to input the severity
    cost: number
    scarce: boolean

    damageModifier: number
    maxDamageRangeModifier: number
    dropRangeModifier: number
    spreadModifier: number
    verticalRecoilModifier: number
    muzzleVelocityModifier: number
    ammoReserveModifier: number

    constructor(customAmmoInterface: CustomAmmoInterface) {
        this.name = customAmmoInterface.name
        this.type = customAmmoInterface.type
        this.severity = customAmmoInterface.severity
        this.description = customAmmoInterface.description.replace('<EFFECT_SEVERITY>', customAmmoInterface.severity)
        this.cost = customAmmoInterface.cost
        this.scarce = customAmmoInterface.scarce

        this.damageModifier = customAmmoInterface.damageModifier ? customAmmoInterface.damageModifier : 0
        this.maxDamageRangeModifier = customAmmoInterface.maxDamageRangeModifier ? customAmmoInterface.maxDamageRangeModifier : 0
        this.dropRangeModifier = customAmmoInterface.dropRangeModifier ? customAmmoInterface.dropRangeModifier : 0
        this.spreadModifier = customAmmoInterface.spreadModifier ? customAmmoInterface.spreadModifier : 0
        this.verticalRecoilModifier = customAmmoInterface.verticalRecoilModifier ? customAmmoInterface.verticalRecoilModifier : 0
        this.muzzleVelocityModifier = customAmmoInterface.muzzleVelocityModifier ? customAmmoInterface.muzzleVelocityModifier : 0
        this.ammoReserveModifier = customAmmoInterface.ammoReserveModifier ? customAmmoInterface.ammoReserveModifier : 0
    }

    apply(weapon: Weapon) {
        // remove base ammo effect
        if ([BaseAmmoName.BOLT, BaseAmmoName.CHUKONU, BaseAmmoName.HAND_CROSSBOW].includes(weapon.baseAmmoName)) {
            weapon.baseAmmoEffectActive = false
        }

        if ([CustomAmmoName.FRAG_ARROW, CustomAmmoName.CONCERTINA_ARROW].includes(this.name)) {
            weapon.baseAmmoEffectActive = false
        }

        weapon.baseDamage += this.damageModifier
        weapon.optimalRange += this.maxDamageRangeModifier
        weapon.dropRange += this.dropRangeModifier
        weapon.spread += this.spreadModifier 
        weapon.verticalRecoil += this.verticalRecoilModifier
        weapon.muzzleVelocity += this.muzzleVelocityModifier
        weapon.ammoReserve += this.ammoReserveModifier
    }

    remove(weapon: Weapon) {
        // put back base ammo effect
        if ([BaseAmmoName.BOLT, BaseAmmoName.CHUKONU, BaseAmmoName.HAND_CROSSBOW].includes(weapon.baseAmmoName)) {
            weapon.baseAmmoEffectActive = true
        }

        if ([CustomAmmoName.FRAG_ARROW, CustomAmmoName.CONCERTINA_ARROW].includes(this.name)) {
            weapon.baseAmmoEffectActive = true
        }

        weapon.baseDamage -= this.damageModifier
        weapon.optimalRange -= this.maxDamageRangeModifier
        weapon.dropRange -= this.dropRangeModifier
        weapon.spread -= this.spreadModifier 
        weapon.verticalRecoil -= this.verticalRecoilModifier
        weapon.muzzleVelocity -= this.muzzleVelocityModifier
        weapon.ammoReserve -= this.ammoReserveModifier
    }
}