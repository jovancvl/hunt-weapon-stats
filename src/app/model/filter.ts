import { AmmoName, BLEED_AMMO_TYPES, EXPLOSIVE_AMMO_TYPES, FMJ_AMMO_TYPES, HIGH_VELOCITY_AMMO_TYPES, INCENDIARY_AMMO_TYPES, POISON_AMMO_TYPES, SPECIAL_AMMO_TYPES, SUBSONIC_AMMO_TYPES } from "./ammo-name"
import { Weapon } from "./weapon"

export interface Filter {
  icon: string
  apply(weapon: Weapon): boolean
}

export class SizeFilter implements Filter {
  constructor(readonly size: number, readonly icon: string) { }
  apply(weapon: Weapon): boolean {
    return weapon.size === this.size
  }
}

export class BaseAmmoFilter implements Filter {
  constructor(readonly baseAmmo: AmmoName | Set<AmmoName>, readonly icon: string) {}
  apply(weapon: Weapon): boolean {
    if (this.baseAmmo instanceof Set) {
      return this.baseAmmo.has(weapon.baseAmmo.info.name)
    }
    return this.baseAmmo === weapon.baseAmmo.info.name
  }
}

export class CustomAmmoFilter implements Filter {
  constructor(readonly customAmmo: Set<AmmoName>, readonly icon: string){}
  apply(weapon: Weapon): boolean {
    return weapon.hasAnyOfTheseCustomAmmoTypes(this.customAmmo)
  }
}

export const SIZE_1_FILTER = new SizeFilter(1, "ammo-icons/ammo_filter-1-slot.svg")
export const SIZE_2_FILTER = new SizeFilter(2, "ammo-icons/ammo_filter-2-slot.svg")
export const SIZE_3_FILTER = new SizeFilter(3, "ammo-icons/ammo_filter-3-slot.svg")

export const COMPACT_AMMO_FILTER = new BaseAmmoFilter(AmmoName.COMPACT, "ammo-icons/ammo_filter-compact.svg")
export const MEDIUM_AMMO_FILTER = new BaseAmmoFilter(AmmoName.MEDIUM, "ammo-icons/ammo_filter-medium.svg")
export const LONG_AMMO_FILTER = new BaseAmmoFilter(AmmoName.LONG, "ammo-icons/ammo_filter-long.svg")
export const BUCKSHOT_AMMO_FILTER = new BaseAmmoFilter(AmmoName.BUCKSHOT, "ammo-icons/ammo_filter-shell.svg")
export const SPECIAL_AMMO_FILTER = new BaseAmmoFilter(SPECIAL_AMMO_TYPES, "ammo-icons/ammo_filter-special-ammo.svg")

export const EXPLOSIVE_AMMO_FILTER = new CustomAmmoFilter(EXPLOSIVE_AMMO_TYPES, "ammo-icons/ammo_filter-explosive.svg")
export const BLEED_AMMO_FILTER = new CustomAmmoFilter(BLEED_AMMO_TYPES, "ammo-icons/ammo_filter-dumdum.svg")
export const INCENDIARY_AMMO_FILTER = new CustomAmmoFilter(INCENDIARY_AMMO_TYPES, "ammo-icons/ammo_filter-burn.svg")
export const POISON_AMMO_FILTER = new CustomAmmoFilter(POISON_AMMO_TYPES, "ammo-icons/ammo_filter-poison.svg")
export const FMJ_AMMO_FILTER = new CustomAmmoFilter(FMJ_AMMO_TYPES, "ammo-icons/ammo_filter-fmj.svg")
export const SUBSONIC_AMMO_FILTER = new CustomAmmoFilter(SUBSONIC_AMMO_TYPES, "ammo-icons/ammo_filter-subsonic.svg")
export const HIGH_VELOCITY_AMMO_FILTER = new CustomAmmoFilter(HIGH_VELOCITY_AMMO_TYPES, "ammo-icons/ammo_filter-hv.svg")

export const SIZE_FILTERS = [
  SIZE_1_FILTER,
  SIZE_2_FILTER,
  SIZE_3_FILTER,
]

export const BASE_AMMO_FILTERS = [
  COMPACT_AMMO_FILTER,
  MEDIUM_AMMO_FILTER,
  LONG_AMMO_FILTER,
  BUCKSHOT_AMMO_FILTER,
  SPECIAL_AMMO_FILTER,
]

export const CUSTOM_AMMO_FILTERS = [
  EXPLOSIVE_AMMO_FILTER,
  BLEED_AMMO_FILTER,
  INCENDIARY_AMMO_FILTER,
  POISON_AMMO_FILTER,
  FMJ_AMMO_FILTER,
  SUBSONIC_AMMO_FILTER,
  HIGH_VELOCITY_AMMO_FILTER
]

export const ALL_FILTERS: Filter[] = [
  SIZE_1_FILTER,
  SIZE_2_FILTER,
  SIZE_3_FILTER,
  COMPACT_AMMO_FILTER,
  MEDIUM_AMMO_FILTER,
  LONG_AMMO_FILTER,
  BUCKSHOT_AMMO_FILTER,
  SPECIAL_AMMO_FILTER,
  EXPLOSIVE_AMMO_FILTER,
  BLEED_AMMO_FILTER,
  INCENDIARY_AMMO_FILTER,
  POISON_AMMO_FILTER,
  FMJ_AMMO_FILTER,
  SUBSONIC_AMMO_FILTER,
  HIGH_VELOCITY_AMMO_FILTER
]