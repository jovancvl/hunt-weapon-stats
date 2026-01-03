// import { AmmoInfo } from "../model/ammo-info";
// import { AmmoStats } from "../model/ammo-stats";
// import { DamageBreakpoint } from "../model/damage"
// import { ActionType, Weapon } from "../model/weapon";

// const BASE_DAMAGE = 246
// const OPTIMAL_RANGE = 27
// const DROP_RANGE = 20
// const SPREAD = 30
// const VERTICAL_RECOIL = 4
// const MUZZLE_VELOCITY = 150
// const AMMO_RESERVE = 18

// const NAME = "Crossbow"
// const COST = 50
// const SIZE = 3
// const ACTION = ActionType.SINGLE_SHOT
// const SWAY = 77
// const RATE_OF_FIRE = 13
// const CYCLE_TIME = 4.8
// const RELOAD_TIME = 5.3
// const MAGAZINE = 1
// const HAS_EXTRA_BULLET = false
// const MELEE_DAMAGE = 27
// const STAMINA_CONSUMPTION = 12
// const HEAVY_MELEE_DAMAGE = 25
// const HEAVY_STAMINA_CONSUMPTION = 54
// const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_Crossbow.png"
// const BASE_AMMO_DAMAGE_BREAKPOINTS: DamageBreakpoint[] = [
//   {
//     range: 0,
//     damage: BASE_DAMAGE
//   },
//   {
//     range: OPTIMAL_RANGE,
//     damage: BASE_DAMAGE
//   },
// ]
// /**
//  * Includes all available ammo types, including the base ammo, which is always first.
//  */
// const AMMO = [
//   new AmmoStats({
//     info: AmmoInfo.BOLT,
//     scarce: false,

//     // baseDamage: BASE_DAMAGE,
//     // optimalRange: OPTIMAL_RANGE,
//     dropRange: DROP_RANGE,
//     spread: SPREAD,
//     verticalRecoil: VERTICAL_RECOIL,
//     muzzleVelocity: MUZZLE_VELOCITY,
//     ammoReserve: AMMO_RESERVE,
//     damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
//   }),
//   new AmmoStats({
//     info: AmmoInfo.BOLT_EXPLOSIVE,
//     scarce: false,

//     // baseDamage: BASE_DAMAGE - 26,
//     // optimalRange: OPTIMAL_RANGE,
//     dropRange: DROP_RANGE - 10,
//     spread: SPREAD + 7.5,
//     verticalRecoil: VERTICAL_RECOIL,
//     muzzleVelocity: MUZZLE_VELOCITY - 90,
//     ammoReserve: AMMO_RESERVE - 5,
//     damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
//   }),
//   new AmmoStats({
//     info: AmmoInfo.BOLT_SHOTBOLT,
//     scarce: false,

//     // baseDamage: BASE_DAMAGE + 208,
//     // optimalRange: OPTIMAL_RANGE,
//     dropRange: DROP_RANGE - 5,
//     spread: SPREAD,
//     verticalRecoil: VERTICAL_RECOIL,
//     muzzleVelocity: MUZZLE_VELOCITY - 50,
//     ammoReserve: AMMO_RESERVE - 3,
//     damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
//   }),
//   new AmmoStats({
//     info: AmmoInfo.BOLT_STEEL,
//     scarce: false,

//     // baseDamage: BASE_DAMAGE,
//     // optimalRange: OPTIMAL_RANGE,
//     dropRange: DROP_RANGE + 15,
//     spread: SPREAD,
//     verticalRecoil: VERTICAL_RECOIL + 4,
//     muzzleVelocity: MUZZLE_VELOCITY + 75,
//     ammoReserve: AMMO_RESERVE - 2,
//     damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
//   }),
// ]

// export const CROSSBOW: Weapon = new Weapon({
//   name: NAME,
//   cost: COST,
//   size: SIZE,
//   action: ACTION,

//   availableAmmo: AMMO,

//   sway: SWAY,
//   rateOfFire: RATE_OF_FIRE,
//   cycleTime: CYCLE_TIME,
//   reloadTime: RELOAD_TIME,
//   magazine: MAGAZINE,
//   hasExtraBullet: HAS_EXTRA_BULLET,

//   meleeDamage: MELEE_DAMAGE,
//   staminaConsumption: STAMINA_CONSUMPTION,
//   heavyMeleeDamage: HEAVY_MELEE_DAMAGE,
//   heavyStaminaConsumption: HEAVY_STAMINA_CONSUMPTION,

//   image: IMAGE
// })