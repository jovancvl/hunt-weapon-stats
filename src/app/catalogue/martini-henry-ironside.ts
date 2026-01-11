// import { AmmoInfo } from "../model/ammo-info";
// import { AmmoStats } from "../model/ammo-stats";
// import { DamageBreakpoint } from "../model/damage"
// import { ActionType, Weapon } from "../model/weapon";

// const BASE_DAMAGE = 143
// const OPTIMAL_RANGE = 40
// const DROP_RANGE = 125
// const SPREAD = 40
// const VERTICAL_RECOIL = 12
// const MUZZLE_VELOCITY = 400
// const AMMO_RESERVE = 15

// const NAME = "Martini-Henry Ironside"
// const COST = 159
// const SIZE = 3
// const ACTION = ActionType.SEMI_OR_FULL_AUTO
// const SWAY = 77
// const RATE_OF_FIRE = 18
// const CYCLE_TIME = 1.8
// const RELOAD_TIME = 14.7
// const MAGAZINE = 5
// const HAS_EXTRA_BULLET = true
// const MELEE_DAMAGE = 27
// const STAMINA_CONSUMPTION = 12
// const HEAVY_MELEE_DAMAGE = 54
// const HEAVY_STAMINA_CONSUMPTION = 25
// const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_Martini-Henry_Ironside.png"
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
//     range: 90,
//     damage: BASE_DAMAGE
//   },
//   {
//     range: 100,
//     damage: BASE_DAMAGE
//   }
// ]

// const AMMO = [
//   new AmmoStats({
//     info: AmmoInfo.LONG,
//     scarce: false,

//     dropRange: DROP_RANGE,
//     spread: SPREAD,
//     verticalRecoil: VERTICAL_RECOIL,
//     muzzleVelocity: MUZZLE_VELOCITY,
//     ammoReserve: AMMO_RESERVE,
//     damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
//   }),
//   new AmmoStats({
//     info: AmmoInfo.LONG_EXPLOSIVE,
//     scarce: false,

//     dropRange: 95,
//     spread: SPREAD,
//     verticalRecoil: VERTICAL_RECOIL,
//     muzzleVelocity: 300,
//     ammoReserve: AMMO_RESERVE,
//     damageBreakpoints: [
//       {
//         range: 0,
//         damage: 138
//       },
//       {
//         range: OPTIMAL_RANGE,
//         damage: 138
//       },
//     ]
//   }),
//   new AmmoStats({
//     info: AmmoInfo.LONG_FMJ,
//     scarce: false,

//     dropRange: 110,
//     spread: SPREAD,
//     verticalRecoil: 16,
//     muzzleVelocity: 320,
//     ammoReserve: AMMO_RESERVE,
//     damageBreakpoints: [
//       {
//         range: 0,
//         damage: BASE_DAMAGE
//       },
//       {
//         range: 50,
//         damage: BASE_DAMAGE
//       },
//       {
//         range: 100,
//         damage: BASE_DAMAGE
//       }
//     ]
//   }),
//   new AmmoStats({
//     info: AmmoInfo.LONG_HIGH_VELOCITY,
//     scarce: false,

//     dropRange: 140,
//     spread: SPREAD,
//     verticalRecoil: 16,
//     muzzleVelocity: 500,
//     ammoReserve: 14,
//     damageBreakpoints: [
//       {
//         range: 0,
//         damage: 136
//       },
//       {
//         range: OPTIMAL_RANGE,
//         damage: 136
//       },
//       {
//         range: 90,
//         damage: BASE_DAMAGE
//       },
//       {
//         range: 100,
//         damage: BASE_DAMAGE
//       }
//     ]
//   }),
//   new AmmoStats({
//     info: AmmoInfo.LONG_INCENDIARY,
//     scarce: false,

//     dropRange: DROP_RANGE,
//     spread: SPREAD,
//     verticalRecoil: VERTICAL_RECOIL,
//     muzzleVelocity: MUZZLE_VELOCITY,
//     ammoReserve: AMMO_RESERVE,
//     damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
//   }),
// ]

// export const MARTINI_HENRY_IRONSIDE: Weapon = new Weapon({
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