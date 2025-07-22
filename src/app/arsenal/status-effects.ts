enum StatusEffectType {
    BURN = 'burning',
    BLEED = 'bleeding',
    POISON = 'poison'
}

enum StatusEffectSeverity {
    LIGHT = 'light',
    MEDIUM = 'medium',
    INTENSE = 'intense',
}

export class StatusEffect {
    readonly type: StatusEffectType
    readonly severity: StatusEffectSeverity
    readonly description: string

    private constructor(type: StatusEffectType, severity: StatusEffectSeverity) {
        this.type = type
        this.severity = severity
        this.description = `Causes ${severity} ${type}.`
    }

    static readonly BURN_LIGHT = new StatusEffect(StatusEffectType.BURN, StatusEffectSeverity.LIGHT)
    static readonly BURN_MEDIUM = new StatusEffect(StatusEffectType.BURN, StatusEffectSeverity.MEDIUM)
    static readonly BURN_INTENSE = new StatusEffect(StatusEffectType.BURN, StatusEffectSeverity.INTENSE)
    static readonly BLEED_LIGHT = new StatusEffect(StatusEffectType.BLEED, StatusEffectSeverity.LIGHT)
    static readonly BLEED_MEDIUM = new StatusEffect(StatusEffectType.BLEED, StatusEffectSeverity.MEDIUM)
    static readonly BLEED_INTENSE = new StatusEffect(StatusEffectType.BLEED, StatusEffectSeverity.INTENSE)
    static readonly POISON_LIGHT = new StatusEffect(StatusEffectType.POISON, StatusEffectSeverity.LIGHT)
    static readonly POISON_MEDIUM = new StatusEffect(StatusEffectType.POISON, StatusEffectSeverity.MEDIUM)
    static readonly POISON_INTENSE = new StatusEffect(StatusEffectType.POISON, StatusEffectSeverity.INTENSE)
}
