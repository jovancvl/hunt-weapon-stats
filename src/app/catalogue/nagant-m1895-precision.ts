// import { AmmoInfo } from "../model/ammo-info"
// import { AmmoStats } from "../model/ammo-stats"
// import { DamageBreakpoint } from "../model/damage"
// import { ActionType, Weapon } from "../model/weapon"

// const BASE_DAMAGE = 91
// const OPTIMAL_RANGE = 20
// const DROP_RANGE = 70
// const SPREAD = 27.5
// const VERTICAL_RECOIL = 1.5
// const MUZZLE_VELOCITY = 330
// const AMMO_RESERVE = 28

// const NAME = "Nagant M1895 Precision"
// const COST = 29
// const SIZE = 2
// const ACTION = ActionType.SINGLE_ACTION
// const SWAY = 87
// const RATE_OF_FIRE = 21
// const CYCLE_TIME = 10
// const RELOAD_TIME = 13.4
// const MAGAZINE = 7
// const HAS_EXTRA_BULLET = false
// const MELEE_DAMAGE = 27
// const STAMINA_CONSUMPTION = 15
// const HEAVY_MELEE_DAMAGE = 54
// const HEAVY_STAMINA_CONSUMPTION = 25
// const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_Nagant_M1895_Precision.png"
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
//     range: 50,
//     damage: 49
//   },
//   {
//     range: 100,
//     damage: 42
//   }
// ]

// /**
//  * Includes all available ammo types, including the base ammo, which is always first.
//  */
// const AMMO = [
//   new AmmoStats({
//     info: AmmoInfo.COMPACT,
//     scarce: false,

//     dropRange: DROP_RANGE,
//     spread: SPREAD,
//     verticalRecoil: VERTICAL_RECOIL,
//     muzzleVelocity: MUZZLE_VELOCITY,
//     ammoReserve: AMMO_RESERVE,
//     damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
//   }),
//   new AmmoStats({
//     info: AmmoInfo.COMPACT_DUMDUM,
//     scarce: false,

//     dropRange: 65,
//     spread: SPREAD,
//     verticalRecoil: VERTICAL_RECOIL,
//     muzzleVelocity: 300,
//     ammoReserve: AMMO_RESERVE,
//     damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
//   }),
//   new AmmoStats({
//     info: AmmoInfo.COMPACT_HIGH_VELOCITY,
//     scarce: false,

//     dropRange: 80,
//     spread: SPREAD,
//     verticalRecoil: 3.3,
//     muzzleVelocity: 405,
//     ammoReserve: 21,
//     damageBreakpoints: [
//       {
//         range: 0,
//         damage: 87
//       },
//       {
//         range: OPTIMAL_RANGE,
//         damage: 87
//       },
//       {
//         range: 50,
//         damage: 48
//       },
//       {
//         range: 100,
//         damage: 41
//       }
//     ]
//   }),
//   new AmmoStats({
//     info: AmmoInfo.COMPACT_POISON,
//     scarce: false,

//     dropRange: DROP_RANGE,
//     spread: SPREAD,
//     verticalRecoil: VERTICAL_RECOIL,
//     muzzleVelocity: MUZZLE_VELOCITY,
//     ammoReserve: AMMO_RESERVE,
//     damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
//   }),
//   new AmmoStats({
//     info: AmmoInfo.COMPACT_SUBSONIC,
//     scarce: false,

//     dropRange: 55,
//     spread: SPREAD,
//     verticalRecoil: VERTICAL_RECOIL,
//     muzzleVelocity: 238,
//     ammoReserve: 34,
//     damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
//   }),
// ]

// export const NAGANT_M1895_PRECISION: Weapon = new Weapon({
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