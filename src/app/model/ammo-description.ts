export enum AmmoDescription {
  COMPACT = "Damage dropoff starts at 20m. Low penetration damage: pierces thin wood sheets at close range, but cannot pierce stone/metal sheets or trees.",
  MEDIUM = "Damage dropoff starts at 30m. Medium penetration damage: pierces thin wood sheets at medium range, but cannot pierce stone/metal sheets or trees.",
  LONG = "Damage dropoff starts at 40m. High penetration damage: pierces wood walls, small trees, thin stone walls and single metal sheets, but cannot pierce larger trees.",
  BUCKSHOT = "Shoots pellets",

  DUMDUM = `Inflicts <EFFECT_SEVERITY> bleeding at the cost of removed penetration.`,
  SUBSONIC = `Reduces gunshot sound profile.`,
  POISON = `Inflicts <EFFECT_SEVERITY> poison at the cost of removed penetration.`,
  HIGH_VELOCITY = `Increases muzzle velocity at the cost of damage and reduced ammo reserves.`,
  FMJ = `Increases penetration power as well as maximum damage range by 10m and has better damage over distance, at the cost of reduced muzzle velocity and reduced drop range.`,
  INCENDIARY = `Inflicts <EFFECT_SEVERITY> burning within maximum damage range at the cost of removed penetration and visible bullet trajectories.`,
  EXPLOSIVE = `Explodes on impact.`,
  SPITZER = `Increases penetration and muzzle velocity at the cost of reduced damage and reduced ammo reserves.`,

  BOLT = `Inflicts <EFFECT_SEVERITY> bleeding, can be retrieved and reused.`
}