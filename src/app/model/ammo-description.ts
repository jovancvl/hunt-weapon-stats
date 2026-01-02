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
  SPITZER = `Increases penetration and muzzle velocity at the cost of reduced damage and reduced ammo reserves.`,

  BOLT = `Inflicts <EFFECT_SEVERITY> bleeding, can be retrieved and reused.`
}