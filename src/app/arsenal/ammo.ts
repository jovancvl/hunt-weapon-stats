import { Weapon } from "./weapon"

// export enum BaseAmmoName {
//     COMPACT = 'Compact',
//     MEDIUM = 'Medium',
//     LONG = 'Long',
//     BUCKSHOT = 'Buckshot',
//     DERRINGER = 'Derringer',

//     ARROW = 'Arrow', // medium bleed
//     BOLT = 'Bolt', // intense bleed
//     CHUKONU = 'Compact Bolt', // medium bleed
//     HAND_CROSSBOW = 'Compact Bolt', // medium bleed
//     DOLCH = 'Dolch',
//     LANCE = 'Lance Bolt',
//     NITRO = 'Nitro'
// }

// export enum BaseAmmoDescription {
//     COMPACT = 'Small caliber bullet.'
// }

export enum AmmoName {
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
    NITRO = 'Nitro',

    // ===========================================================

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

export enum AmmoEffectType {
    BURN = 'burning',
    BLEED = 'bleeding',
    POISON = 'poison',
}

export enum AmmoEffectSeverity {
    LIGHT = 'light',
    MEDIUM = 'medium',
    INTENSE = 'intense',
}

export enum AmmoDescription {
    COMPACT = "20m optimal range, low penetration, what else",
    MEDIUM = "30m optimal range, medium penetration",
    LONG = "40m optimal range, high penetration",
    BUCKSHOT = "Shoots pellets",

    DUMDUM = `Inflicts <EFFECT_SEVERITY> bleeding at the cost of removed penetration.`,
    SUBSONIC = `Reduces gunshot sound profile.`,
    POISON = `Inflicts <EFFECT_SEVERITY> poison at the cost of removed penetration.`,
    HIGH_VELOCITY = `Increases muzzle velocity at the cost of damage and reduced ammo reserves.`,
    FMJ = `Increases penetration and the range at which the gun deals maximum damage at the cost of reduced muzzle velocity and reduced drop range.`,
    INCENDIARY = `Inflicts <EFFECT_SEVERITY> burning in a single hit within optimal range at the cost of removed penetration.`,
    EXPLOSIVE = `Explodes on impact.`,
    SPITZER = `Increases penetration and muzzle velocity at the cost of reduced damage and reduced ammo reserves.`
}

// export interface BaseAmmoInterface {
//     name: string
//     effect?: AmmoEffectType
//     severity?: AmmoEffectSeverity
//     description: string
// }

// export class BaseAmmo {
//     name: string
//     effect?: AmmoEffectType
//     severity?: AmmoEffectSeverity
//     description: string

//     private constructor(baseAmmoInterface: BaseAmmoInterface) {
//         this.name = baseAmmoInterface.name
//         this.effect = baseAmmoInterface.effect
//         this.severity = baseAmmoInterface.severity
//         this.description = baseAmmoInterface.description
//     }

//     static readonly COMPACT = new BaseAmmo({
//         name: "Compact",
//         description: "20m optimal range, low penetration, what else"
//     })
//     static readonly MEDIUM = new BaseAmmo({
//         name: "Medium",
//         description: "30m optimal range, medium penetration"
//     })
//     static readonly LONG = new BaseAmmo({
//         name: "Long",
//         description: "40m optimal range, high penetration"
//     })
//     static readonly BUCKSHOT = new BaseAmmo({
//         name: "Buckshot",
//         description: "Shotgun"
//     })
// }

export interface AmmoInfoInterface {
    name: string
    effect?: AmmoEffectType
    severity?: AmmoEffectSeverity
    description: AmmoDescription | string
    cost: number
}

export class AmmoInfo {
    name: string
    effect?: AmmoEffectType
    severity?: AmmoEffectSeverity
    description: string // format custom ammo description to input the severity
    cost: number

    constructor (customAmmoInfoInterface: AmmoInfoInterface) {
        this.name = customAmmoInfoInterface.name
        this.effect = customAmmoInfoInterface.effect
        if (customAmmoInfoInterface.severity) {
            this.description = customAmmoInfoInterface.description.replace('<EFFECT_SEVERITY>', customAmmoInfoInterface.severity)
        } else {
            this.description = customAmmoInfoInterface.description
        }
        this.cost = customAmmoInfoInterface.cost
    }

    static readonly COMPACT = new AmmoInfo({
        name: AmmoName.COMPACT,
        description: AmmoDescription.COMPACT,
        cost: 0
    })
    static readonly MEDIUM = new AmmoInfo({
        name: AmmoName.MEDIUM,
        description: AmmoDescription.MEDIUM,
        cost: 0
    })
    static readonly LONG = new AmmoInfo({
        name: AmmoName.LONG,
        description: AmmoDescription.LONG,
        cost: 0
    })
    static readonly BUCKSHOT = new AmmoInfo({
        name: AmmoName.BUCKSHOT,
        description: AmmoDescription.BUCKSHOT,
        cost: 0
    })

    static readonly COMPACT_DUMDUM = new AmmoInfo({
        name: AmmoName.DUMDUM,
        effect: AmmoEffectType.BLEED,
        severity: AmmoEffectSeverity.MEDIUM,
        description: AmmoDescription.DUMDUM,
        cost: 50
    })
    static readonly COMPACT_FMJ = new AmmoInfo({
        name: AmmoName.FMJ,
        description: AmmoDescription.FMJ,
        cost: 50
    })
    static readonly COMPACT_HIGH_VELOCITY = new AmmoInfo({
        name: AmmoName.HIGH_VELOCITY,
        description: AmmoDescription.HIGH_VELOCITY,
        cost: 50
    })
    static readonly COMPACT_INCENDIARY = new AmmoInfo({
        name: AmmoName.INCENDIARY,
        effect: AmmoEffectType.BURN,
        severity: AmmoEffectSeverity.MEDIUM,
        description: AmmoDescription.INCENDIARY,
        cost: 50
    })
    static readonly COMPACT_POISON = new AmmoInfo({
        name: AmmoName.POISON,
        effect: AmmoEffectType.POISON,
        severity: AmmoEffectSeverity.MEDIUM,
        description: AmmoDescription.POISON,
        cost: 50
    })
    static readonly COMPACT_SUBSONIC = new AmmoInfo({
        name: AmmoName.SUBSONIC,
        description: AmmoDescription.SUBSONIC,
        cost: 50
    })
    
    static readonly MEDIUM_DUMDUM = new AmmoInfo({
        name: AmmoName.DUMDUM,
        effect: AmmoEffectType.BLEED,
        severity: AmmoEffectSeverity.INTENSE,
        description: AmmoDescription.DUMDUM,
        cost: 50
    })
    static readonly MEDIUM_EXPLOSIVE = new AmmoInfo({
        name: AmmoName.EXPLOSIVE,
        description: AmmoDescription.EXPLOSIVE,
        cost: 50
    })
    static readonly MEDIUM_FMJ = new AmmoInfo({
        name: AmmoName.FMJ,
        description: AmmoDescription.FMJ,
        cost: 50
    })
    static readonly MEDIUM_HIGH_VELOCITY = new AmmoInfo({
        name: AmmoName.HIGH_VELOCITY,
        description: AmmoDescription.HIGH_VELOCITY,
        cost: 50
    })
    static readonly MEDIUM_INCENDIARY = new AmmoInfo({
        name: AmmoName.INCENDIARY,
        effect: AmmoEffectType.BURN,
        severity: AmmoEffectSeverity.MEDIUM,
        description: AmmoDescription.INCENDIARY,
        cost: 50
    })
    static readonly MEDIUM_POISON = new AmmoInfo({
        name: AmmoName.POISON,
        effect: AmmoEffectType.POISON,
        severity: AmmoEffectSeverity.MEDIUM,
        description: AmmoDescription.POISON,
        cost: 50
    })
    static readonly MEDIUM_SUBSONIC = new AmmoInfo({
        name: AmmoName.SUBSONIC,
        description: AmmoDescription.SUBSONIC,
        cost: 50
    })

    static readonly LONG_EXPLOSIVE = new AmmoInfo({
        name: AmmoName.EXPLOSIVE,
        description: AmmoDescription.EXPLOSIVE,
        cost: 50
    })
    static readonly LONG_FMJ = new AmmoInfo({
        name: AmmoName.FMJ,
        description: AmmoDescription.FMJ,
        cost: 50
    })
    static readonly LONG_HIGH_VELOCITY = new AmmoInfo({
        name: AmmoName.HIGH_VELOCITY,
        description: AmmoDescription.HIGH_VELOCITY,
        cost: 50
    })
    static readonly LONG_INCENDIARY = new AmmoInfo({
        name: AmmoName.INCENDIARY,
        effect: AmmoEffectType.BURN,
        severity: AmmoEffectSeverity.MEDIUM,
        description: AmmoDescription.INCENDIARY,
        cost: 50
    })
    static readonly LONG_POISON = new AmmoInfo({
        name: AmmoName.POISON,
        effect: AmmoEffectType.POISON,
        severity: AmmoEffectSeverity.MEDIUM,
        description: AmmoDescription.POISON,
        cost: 50
    })
    static readonly LONG_SUBSONIC = new AmmoInfo({
        name: AmmoName.SUBSONIC,
        description: AmmoDescription.SUBSONIC,
        cost: 50
    })

    static readonly SHELL_DRAGONBREATH = new AmmoInfo({
        name: AmmoName.DRAGON_BREATH,
        effect: AmmoEffectType.BURN,
        severity: AmmoEffectSeverity.MEDIUM,
        description: AmmoDescription.INCENDIARY,
        cost: 50
    })
    static readonly SHELL_FLECHETTE = new AmmoInfo({
        name: AmmoName.FLECHETTE,
        effect: AmmoEffectType.BLEED,
        severity: AmmoEffectSeverity.MEDIUM,
        description: AmmoDescription.DUMDUM,
        cost: 50
    })
    static readonly SHELL_PENNYSHOT = new AmmoInfo({
        name: AmmoName.PENNY,
        description: AmmoDescription.DUMDUM,
        cost: 50
    })
    static readonly SHELL_SLUG = new AmmoInfo({
        name: AmmoName.SLUG,
        description: AmmoDescription.DUMDUM,
        cost: 50
    })
    static readonly SHELL_STARSHELL = new AmmoInfo({
        name: AmmoName.STARSHELL,
        effect: AmmoEffectType.BURN,
        severity: AmmoEffectSeverity.INTENSE,
        description: AmmoDescription.INCENDIARY,
        cost: 50
    })
}

export interface CustomAmmoInterface {
    info: AmmoInfo
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
    info: AmmoInfo
    scarce: boolean

    damageModifier: number
    maxDamageRangeModifier: number
    dropRangeModifier: number
    spreadModifier: number
    verticalRecoilModifier: number
    muzzleVelocityModifier: number
    ammoReserveModifier: number

    constructor(customAmmoInterface: CustomAmmoInterface) {
        this.info = customAmmoInterface.info
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
        // if ([BaseAmmoName.BOLT, BaseAmmoName.CHUKONU, BaseAmmoName.HAND_CROSSBOW].includes(weapon.baseAmmoName)) {
        //     weapon.baseAmmoEffectActive = false
        // }

        // if ([CustomAmmoName.FRAG_ARROW, CustomAmmoName.CONCERTINA_ARROW].includes(this.info.name)) {
        //     weapon.baseAmmoEffectActive = false
        // }

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
        // if ([BaseAmmoName.BOLT, BaseAmmoName.CHUKONU, BaseAmmoName.HAND_CROSSBOW].includes(weapon.baseAmmoName)) {
        //     weapon.baseAmmoEffectActive = true
        // }

        // if ([CustomAmmoName.FRAG_ARROW, CustomAmmoName.CONCERTINA_ARROW].includes((this.info.name))) {
        //     weapon.baseAmmoEffectActive = true
        // }

        weapon.baseDamage -= this.damageModifier
        weapon.optimalRange -= this.maxDamageRangeModifier
        weapon.dropRange -= this.dropRangeModifier
        weapon.spread -= this.spreadModifier
        weapon.verticalRecoil -= this.verticalRecoilModifier
        weapon.muzzleVelocity -= this.muzzleVelocityModifier
        weapon.ammoReserve -= this.ammoReserveModifier
    }
}