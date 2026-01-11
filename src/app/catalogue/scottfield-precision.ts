// import { AmmoInfo } from "../model/ammo-info";
// import { AmmoStats } from "../model/ammo-stats";
// import { DamageBreakpoint } from "../model/damage"
// import { ActionType, Weapon } from "../model/weapon";

// const BASE_DAMAGE = 107
// const OPTIMAL_RANGE = 30
// const DROP_RANGE = 65
// const SPREAD = 28.1
// const VERTICAL_RECOIL = 9
// const MUZZLE_VELOCITY = 280
// const AMMO_RESERVE = 18

// const NAME = "Scottfield Precision"
// const COST = 85
// const SIZE = 2
// const ACTION = ActionType.SINGLE_ACTION
// const SWAY = 87
// const RATE_OF_FIRE = 27
// const CYCLE_TIME = 1
// const RELOAD_TIME = 9
// const MAGAZINE = 6
// const HAS_EXTRA_BULLET = false
// const MELEE_DAMAGE = 27
// const STAMINA_CONSUMPTION = 15
// const HEAVY_MELEE_DAMAGE = 54
// const HEAVY_STAMINA_CONSUMPTION = 25
// const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_Scottfield_Precision.png"
// const BASE_AMMO_DAMAGE_BREAKPOINTS: DamageBreakpoint[] = [
//   {
//     range: 0,
//     damage: BASE_DAMAGE
//   },
//   {
//     range: OPTIMAL_RANGE,
//     damage: BASE_DAMAGE
//   },
//   {
//     range: 80,
//     damage: BASE_DAMAGE
//   },
//   {
//     range: 100,
//     damage: BASE_DAMAGE
//   },
// ]

// /**
//  * Includes all available ammo types, including the base ammo, which is always first.
//  */
// const AMMO = [
//   new AmmoStats({
//     info: AmmoInfo.MEDIUM,
//     scarce: false,

//     dropRange: DROP_RANGE,
//     spread: SPREAD,
//     verticalRecoil: VERTICAL_RECOIL,
//     muzzleVelocity: MUZZLE_VELOCITY,
//     ammoReserve: AMMO_RESERVE,
//     damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
//   }),
//   new AmmoStats({
//     info: AmmoInfo.MEDIUM_DUMDUM,
//     scarce: false,

//     dropRange: 60,
//     spread: SPREAD,
//     verticalRecoil: VERTICAL_RECOIL,
//     muzzleVelocity: 250,
//     ammoReserve: AMMO_RESERVE,
//     damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
//   }),
//   new AmmoStats({
//     info: AmmoInfo.MEDIUM_FMJ,
//     scarce: false,

//     dropRange: 60,
//     spread: SPREAD,
//     verticalRecoil: 6,
//     muzzleVelocity: 250,
//     ammoReserve: AMMO_RESERVE,
//     damageBreakpoints: [
//       {
//         range: 0,
//         damage: BASE_DAMAGE
//       },
//       {
//         range: 40,
//         damage: BASE_DAMAGE
//       },
//       {
//         range: 90,
//         damage: BASE_DAMAGE
//       },
//       {
//         range: 100,
//         damage: BASE_DAMAGE
//       },
//     ]
//   }),
//   new AmmoStats({
//     info: AmmoInfo.MEDIUM_HIGH_VELOCITY,
//     scarce: false,

//     dropRange: 75,
//     spread: SPREAD,
//     verticalRecoil: 12,
//     muzzleVelocity: 355,
//     ammoReserve: 14,
//     damageBreakpoints: [
//       {
//         range: 0,
//         damage: 101
//       },
//       {
//         range: OPTIMAL_RANGE,
//         damage: 101
//       },
//       {
//         range: 80,
//         damage: 101
//       },
//       {
//         range: 100,
//         damage: 101
//       },
//     ]
//   }),
//   new AmmoStats({
//     info: AmmoInfo.MEDIUM_INCENDIARY,
//     scarce: false,

//     dropRange: DROP_RANGE,
//     spread: SPREAD,
//     verticalRecoil: VERTICAL_RECOIL,
//     muzzleVelocity: MUZZLE_VELOCITY,
//     ammoReserve: AMMO_RESERVE,
//     damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
//   }),
// ]

// export const SCOTTFIELD_PRECISION: Weapon = new Weapon({
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