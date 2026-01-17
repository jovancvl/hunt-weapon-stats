import { AmmoDescription } from "./ammo-description"
import { AmmoEffectType, AmmoEffectSeverity } from "./ammo-effect"
import { AmmoName } from "./ammo-name"

export interface AmmoInfoInterface {
  name: AmmoName
  effect: AmmoEffectType
  severity: AmmoEffectSeverity
  description: AmmoDescription | string
  cost: number
  icon: string
}

export class AmmoInfo {
  name: AmmoName
  effect: AmmoEffectType
  severity: AmmoEffectSeverity
  description: string // replace placeholder <EFFECT_SEVERITY> to add effect severity
  cost: number
  icon: string

  constructor(ammoInfoInterface: AmmoInfoInterface) {
    this.name = ammoInfoInterface.name
    this.effect = ammoInfoInterface.effect
    this.severity = ammoInfoInterface.severity
    this.description = ammoInfoInterface.description.replace('<EFFECT_SEVERITY>', ammoInfoInterface.severity)
    this.cost = ammoInfoInterface.cost
    this.icon = ammoInfoInterface.icon
  }

  static readonly COMPACT = new AmmoInfo({
    name: AmmoName.COMPACT,
    description: AmmoDescription.COMPACT,
    effect: AmmoEffectType.NA,
    severity: AmmoEffectSeverity.NA,
    cost: 0,
    icon: "ammo-icons/ammo_compact-base.svg"
  })
  static readonly MEDIUM = new AmmoInfo({
    name: AmmoName.MEDIUM,
    description: AmmoDescription.MEDIUM,
    effect: AmmoEffectType.NA,
    severity: AmmoEffectSeverity.NA,
    cost: 0,
    icon: "ammo-icons/ammo_medium-base.svg"
  })
  static readonly LONG = new AmmoInfo({
    name: AmmoName.LONG,
    description: AmmoDescription.LONG,
    effect: AmmoEffectType.NA,
    severity: AmmoEffectSeverity.NA,
    cost: 0,
    icon: "ammo-icons/ammo_long-base.svg"
  })
  static readonly BUCKSHOT = new AmmoInfo({
    name: AmmoName.BUCKSHOT,
    description: AmmoDescription.BUCKSHOT,
    effect: AmmoEffectType.NA,
    severity: AmmoEffectSeverity.NA,
    cost: 0,
    icon: "ammo-icons/ammo_shell-base.svg"
  })

  static readonly COMPACT_DUMDUM = new AmmoInfo({
    name: AmmoName.DUMDUM,
    effect: AmmoEffectType.BLEED,
    severity: AmmoEffectSeverity.MEDIUM,
    description: AmmoDescription.DUMDUM,
    cost: 50,
    icon: "ammo-icons/ammo_compact-dumdum.svg"
  })
  static readonly COMPACT_FMJ = new AmmoInfo({
    name: AmmoName.FMJ,
    description: AmmoDescription.FMJ,
    effect: AmmoEffectType.NA,
    severity: AmmoEffectSeverity.NA,
    cost: 50,
    icon: "ammo-icons/ammo_compact-fmj.svg"
  })
  static readonly COMPACT_HIGH_VELOCITY = new AmmoInfo({
    name: AmmoName.HIGH_VELOCITY,
    description: AmmoDescription.HIGH_VELOCITY,
    effect: AmmoEffectType.NA,
    severity: AmmoEffectSeverity.NA,
    cost: 50,
    icon: "ammo-icons/ammo_compact-hv.svg"
  })
  static readonly COMPACT_INCENDIARY = new AmmoInfo({
    name: AmmoName.INCENDIARY,
    effect: AmmoEffectType.BURN,
    severity: AmmoEffectSeverity.MEDIUM,
    description: AmmoDescription.INCENDIARY,
    cost: 50,
    icon: "ammo-icons/ammo_compact-incendiary.svg"
  })
  static readonly COMPACT_POISON = new AmmoInfo({
    name: AmmoName.POISON,
    effect: AmmoEffectType.POISON,
    severity: AmmoEffectSeverity.MEDIUM,
    description: AmmoDescription.POISON,
    cost: 50,
    icon: "ammo-icons/ammo_compact-poison.svg"
  })
  static readonly COMPACT_SUBSONIC = new AmmoInfo({
    name: AmmoName.SUBSONIC,
    description: AmmoDescription.SUBSONIC,
    effect: AmmoEffectType.NA,
    severity: AmmoEffectSeverity.NA,
    cost: 50,
    icon: "ammo-icons/ammo_compact-subsonic.svg"
  })

  static readonly MEDIUM_DUMDUM = new AmmoInfo({
    name: AmmoName.DUMDUM,
    effect: AmmoEffectType.BLEED,
    severity: AmmoEffectSeverity.INTENSE,
    description: AmmoDescription.DUMDUM,
    cost: 50,
    icon: "ammo-icons/ammo_medium-dumdum.svg"
  })
  static readonly MEDIUM_EXPLOSIVE = new AmmoInfo({
    name: AmmoName.EXPLOSIVE,
    description: AmmoDescription.EXPLOSIVE,
    effect: AmmoEffectType.NA,
    severity: AmmoEffectSeverity.NA,
    cost: 50,
    icon: "ammo-icons/ammo_medium-explosive.svg"
  })
  static readonly MEDIUM_FMJ = new AmmoInfo({
    name: AmmoName.FMJ,
    description: AmmoDescription.FMJ,
    effect: AmmoEffectType.NA,
    severity: AmmoEffectSeverity.NA,
    cost: 50,
    icon: "ammo-icons/ammo_medium-fmj.svg"
  })
  static readonly MEDIUM_HIGH_VELOCITY = new AmmoInfo({
    name: AmmoName.HIGH_VELOCITY,
    description: AmmoDescription.HIGH_VELOCITY,
    effect: AmmoEffectType.NA,
    severity: AmmoEffectSeverity.NA,
    cost: 50,
    icon: "ammo-icons/ammo_medium-hv.svg"
  })
  static readonly MEDIUM_INCENDIARY = new AmmoInfo({
    name: AmmoName.INCENDIARY,
    effect: AmmoEffectType.BURN,
    severity: AmmoEffectSeverity.MEDIUM,
    description: AmmoDescription.INCENDIARY,
    cost: 50,
    icon: "ammo-icons/ammo_medium-incendiary.svg"
  })
  static readonly MEDIUM_POISON = new AmmoInfo({
    name: AmmoName.POISON,
    effect: AmmoEffectType.POISON,
    severity: AmmoEffectSeverity.MEDIUM,
    description: AmmoDescription.POISON,
    cost: 50,
    icon: "ammo-icons/ammo_medium-poison.svg"
  })
  static readonly MEDIUM_SUBSONIC = new AmmoInfo({
    name: AmmoName.SUBSONIC,
    description: AmmoDescription.SUBSONIC,
    effect: AmmoEffectType.NA,
    severity: AmmoEffectSeverity.NA,
    cost: 50,
    icon: "ammo-icons/ammo_medium-subsonic.svg"
  })

  static readonly LONG_EXPLOSIVE = new AmmoInfo({
    name: AmmoName.EXPLOSIVE,
    description: AmmoDescription.EXPLOSIVE,
    effect: AmmoEffectType.NA,
    severity: AmmoEffectSeverity.NA,
    cost: 50,
    icon: "ammo-icons/ammo_long-explosive.svg"
  })
  static readonly LONG_FMJ = new AmmoInfo({
    name: AmmoName.FMJ,
    description: AmmoDescription.FMJ,
    effect: AmmoEffectType.NA,
    severity: AmmoEffectSeverity.NA,
    cost: 50,
    icon: "ammo-icons/ammo_long-fmj.svg"
  })
  static readonly LONG_HIGH_VELOCITY = new AmmoInfo({
    name: AmmoName.HIGH_VELOCITY,
    description: AmmoDescription.HIGH_VELOCITY,
    effect: AmmoEffectType.NA,
    severity: AmmoEffectSeverity.NA,
    cost: 50,
    icon: "ammo-icons/ammo_long-hv.svg"
  })
  static readonly LONG_INCENDIARY = new AmmoInfo({
    name: AmmoName.INCENDIARY,
    effect: AmmoEffectType.BURN,
    severity: AmmoEffectSeverity.MEDIUM,
    description: AmmoDescription.INCENDIARY,
    cost: 50,
    icon: "ammo-icons/ammo_long-incendiary.svg"
  })
  static readonly LONG_POISON = new AmmoInfo({
    name: AmmoName.POISON,
    effect: AmmoEffectType.POISON,
    severity: AmmoEffectSeverity.MEDIUM,
    description: AmmoDescription.POISON,
    cost: 50,
    icon: "ammo-icons/ammo_long-poison.svg"
  })
  static readonly LONG_SUBSONIC = new AmmoInfo({
    name: AmmoName.SUBSONIC,
    description: AmmoDescription.SUBSONIC,
    effect: AmmoEffectType.NA,
    severity: AmmoEffectSeverity.NA,
    cost: 50,
    icon: "ammo-icons/ammo_long-subsonic.svg"
  })
  static readonly LONG_SPITZER = new AmmoInfo({
    name: AmmoName.SPITZER,
    description: AmmoDescription.SPITZER,
    effect: AmmoEffectType.NA,
    severity: AmmoEffectSeverity.NA,
    cost: 50,
    icon: "ammo-icons/ammo_long-spitzer.svg"
  })

  static readonly SHELL_DRAGONBREATH = new AmmoInfo({
    name: AmmoName.DRAGON_BREATH,
    effect: AmmoEffectType.BURN,
    severity: AmmoEffectSeverity.MEDIUM,
    description: AmmoDescription.INCENDIARY,
    cost: 50,
    icon: "ammo-icons/ammo_shell-dragobreath.svg"
  })
  static readonly SHELL_FLECHETTE = new AmmoInfo({
    name: AmmoName.FLECHETTE,
    effect: AmmoEffectType.BLEED,
    severity: AmmoEffectSeverity.MEDIUM,
    description: AmmoDescription.DUMDUM,
    cost: 50,
    icon: "ammo-icons/ammo_shell-flechette.svg"
  })
  static readonly SHELL_PENNYSHOT = new AmmoInfo({
    name: AmmoName.PENNY,
    description: AmmoDescription.BUCKSHOT,
    effect: AmmoEffectType.NA,
    severity: AmmoEffectSeverity.NA,
    cost: 50,
    icon: "ammo-icons/ammo_shell-pennyshot.svg"
  })
  static readonly SHELL_SLUG = new AmmoInfo({
    name: AmmoName.SLUG,
    description: AmmoDescription.BUCKSHOT,
    effect: AmmoEffectType.NA,
    severity: AmmoEffectSeverity.NA,
    cost: 50,
    icon: "ammo-icons/ammo_shell-slug.svg"
  })
  static readonly SHELL_STARSHELL = new AmmoInfo({
    name: AmmoName.STARSHELL,
    effect: AmmoEffectType.BURN,
    severity: AmmoEffectSeverity.INTENSE,
    description: AmmoDescription.INCENDIARY,
    cost: 50,
    icon: "ammo-icons/ammo_shell-starshell.svg"
  })
  static readonly DOLCH = new AmmoInfo({
    name: AmmoName.DOLCH,
    description: AmmoDescription.MEDIUM,
    effect: AmmoEffectType.NA,
    severity: AmmoEffectSeverity.NA,
    cost: 0,
    icon: "ammo-icons/ammo_dolch-base.svg"
  })
  static readonly DOLCH_DUMDUM = new AmmoInfo({
    name: AmmoName.DUMDUM,
    description: AmmoDescription.DUMDUM,
    severity: AmmoEffectSeverity.MEDIUM,
    effect: AmmoEffectType.BLEED,
    cost: 0,
    icon: "ammo-icons/ammo_dolch-dumdum.svg"
  })
  static readonly DOLCH_FMJ = new AmmoInfo({
    name: AmmoName.FMJ,
    description: AmmoDescription.FMJ,
    effect: AmmoEffectType.NA,
    severity: AmmoEffectSeverity.NA,
    cost: 0,
    icon: "ammo-icons/ammo_dolch-fmj.svg"
  })
  static readonly BOLT = new AmmoInfo({
    name: AmmoName.BOLT,
    description: AmmoDescription.BOLT,
    effect: AmmoEffectType.BLEED,
    severity: AmmoEffectSeverity.INTENSE,
    cost: 0,
    icon: "ammo-icons/ammo_xbow-base.svg"
  })
  static readonly BOLT_EXPLOSIVE = new AmmoInfo({
    name: AmmoName.EXPLOSIVE_BOLT,
    description: AmmoDescription.BOLT,
    effect: AmmoEffectType.NA,
    severity: AmmoEffectSeverity.NA,
    cost: 0,
    icon: "ammo-icons/ammo_xbow-explosive.svg"
  })
  static readonly BOLT_SHOTBOLT = new AmmoInfo({
    name: AmmoName.SHOT_BOLT,
    description: AmmoDescription.BOLT,
    effect: AmmoEffectType.NA,
    severity: AmmoEffectSeverity.NA,
    cost: 0,
    icon: "ammo-icons/ammo_xbow-shotbolt.svg"
  })
  static readonly BOLT_STEEL = new AmmoInfo({
    name: AmmoName.STEEL_BOLT,
    description: AmmoDescription.BOLT,
    effect: AmmoEffectType.BLEED,
    severity: AmmoEffectSeverity.INTENSE,
    cost: 0,
    icon: "ammo-icons/ammo_xbow-steel.svg"
  })
}