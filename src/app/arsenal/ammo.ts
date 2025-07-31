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

    constructor(customAmmoInfoInterface: AmmoInfoInterface) {
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

export interface AmmoStatsInterface {
    info: AmmoInfo
    scarce: boolean

    baseDamage: number
    /**
     * For rifles, this is the range at which damage dropoff starts happening
     * 
     * For weapons that can one shot kill, this is the range at which it is no longer possible to oneshot.
     */
    optimalRange: number
    dropRange: number
    spread: number
    verticalRecoil: number
    muzzleVelocity: number
    ammoReserve: number
}

export class AmmoStats {
    info: AmmoInfo
    scarce: boolean

    baseDamage: number
    optimalRange: number
    dropRange: number
    spread: number
    verticalRecoil: number
    muzzleVelocity: number
    ammoReserve: number

    constructor(ammoStatsInterface: AmmoStatsInterface) {
        this.info = ammoStatsInterface.info
        this.scarce = ammoStatsInterface.scarce

        this.baseDamage = ammoStatsInterface.baseDamage
        this.optimalRange = ammoStatsInterface.optimalRange
        this.dropRange = ammoStatsInterface.dropRange
        this.spread = ammoStatsInterface.spread
        this.verticalRecoil = ammoStatsInterface.verticalRecoil
        this.muzzleVelocity = ammoStatsInterface.muzzleVelocity
        this.ammoReserve = ammoStatsInterface.ammoReserve
    }

    static readonly EMPTY = new AmmoStats({
        info: AmmoInfo.COMPACT,
        scarce: false,

        baseDamage: 0,
        optimalRange: 0,
        dropRange: 0,
        spread: 0,
        verticalRecoil: 0,
        muzzleVelocity: 0,
        ammoReserve: 0,
    })
}