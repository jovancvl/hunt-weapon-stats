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

const REGULAR_AMMO_TYPE_ARRAY = [
  AmmoName.COMPACT,
  AmmoName.MEDIUM,
  AmmoName.LONG,
  AmmoName.BUCKSHOT,
  AmmoName.DERRINGER
] as const

export type RegularAmmo = typeof REGULAR_AMMO_TYPE_ARRAY[number]

const SPECIAL_AMMO_TYPE_ARRAY = [
  AmmoName.ARROW,
  AmmoName.BOLT,
  AmmoName.CHUKONU,
  AmmoName.HAND_CROSSBOW,
  AmmoName.DOLCH,
  AmmoName.LANCE,
  AmmoName.NITRO
] as const;

export type SpecialAmmo = typeof SPECIAL_AMMO_TYPE_ARRAY[number];

export const REGULAR_AMMO_TYPES: Set<AmmoName> = new Set(REGULAR_AMMO_TYPE_ARRAY)
export const SPECIAL_AMMO_TYPES: Set<AmmoName> = new Set(SPECIAL_AMMO_TYPE_ARRAY)
export const EXPLOSIVE_AMMO_TYPES = new Set([
  AmmoName.EXPLOSIVE, 
  AmmoName.EXPLOSIVE_BOLT, 
  AmmoName.EXPLOSIVE_CHUKONU, 
  AmmoName.FRAG_ARROW, 
  AmmoName.WAXED_FRAG_CHARGE
])
export const BLEED_AMMO_TYPES = new Set([
  AmmoName.DUMDUM, 
  AmmoName.ARROW, 
  AmmoName.FLECHETTE, 
  AmmoName.FRAG_ARROW, 
  AmmoName.WAXED_FRAG_CHARGE, 
  AmmoName.BOLT, 
  AmmoName.CHUKONU, 
  AmmoName.HAND_CROSSBOW, 
  AmmoName.HARPOON, 
  AmmoName.STEEL_BOLT, 
  AmmoName.CONCERTINA_ARROW, 
  AmmoName.SHREDDER
])
export const INCENDIARY_AMMO_TYPES = new Set([
  AmmoName.INCENDIARY, 
  AmmoName.INCENDIARY_CHUKONU, 
  AmmoName.DRAGON_BREATH, 
  AmmoName.DRAGON_BREATH_BOLT, 
  AmmoName.DRAGON_BREATH_CHARGE
])
export const POISON_AMMO_TYPES = new Set([
  AmmoName.POISON, 
  AmmoName.POISON_ARROW, 
  AmmoName.POISON_BOLT
])
export const FMJ_AMMO_TYPES = new Set([
  AmmoName.FMJ
])
export const SUBSONIC_AMMO_TYPES = new Set([
  AmmoName.SUBSONIC,
  AmmoName.ARROW,
  AmmoName.BOLT,
  AmmoName.CHUKONU,
  AmmoName.HAND_CROSSBOW,
  AmmoName.HARPOON
]) // silent ammo types to include bow/xbow/chukonu?
export const HIGH_VELOCITY_AMMO_TYPES = new Set([
  AmmoName.HIGH_VELOCITY,
  AmmoName.SPITZER,
  AmmoName.STEEL_BOLT
])
