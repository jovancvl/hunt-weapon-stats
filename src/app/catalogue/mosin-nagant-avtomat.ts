// import { AmmoInfo } from "../model/ammo-info"
// import { AmmoStats } from "../model/ammo-stats"
// import { DamageBreakpoint } from "../model/damage"
// import { ActionType, Weapon } from "../model/weapon"

// const BASE_DAMAGE = 136
// const OPTIMAL_RANGE = 40
// const DROP_RANGE = 135
// const SPREAD = 100
// const VERTICAL_RECOIL = 8
// const MUZZLE_VELOCITY = 615
// const AMMO_RESERVE = 0

// const NAME = "Mosin-Nagant Avtomat"
// const COST = 1250
// const SIZE = 3
// const ACTION = ActionType.SEMI_OR_FULL_AUTO
// const SWAY = 133
// const RATE_OF_FIRE = 75
// const CYCLE_TIME = 0.1
// const RELOAD_TIME = 11.4
// const MAGAZINE = 15
// const HAS_EXTRA_BULLET = false
// const MELEE_DAMAGE = 27
// const STAMINA_CONSUMPTION = 12
// const HEAVY_MELEE_DAMAGE = 54
// const HEAVY_STAMINA_CONSUMPTION = 25

// const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_Mosin-Nagant_Avtomat.png"
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
//     info: AmmoInfo.LONG_INCENDIARY,
//     scarce: false,

//     dropRange: DROP_RANGE,
//     spread: SPREAD,
//     verticalRecoil: VERTICAL_RECOIL,
//     muzzleVelocity: MUZZLE_VELOCITY,
//     ammoReserve: AMMO_RESERVE,
//     damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
//   }),
//   new AmmoStats({
//     info: AmmoInfo.LONG_SPITZER,
//     scarce: false,

//     dropRange: 160,
//     spread: SPREAD,
//     verticalRecoil: 9,
//     muzzleVelocity: 820,
//     ammoReserve: 0,
//     damageBreakpoints: [
//       {
//         range: 0,
//         damage: 117
//       },
//       {
//         range: OPTIMAL_RANGE,
//         damage: 117
//       },
//       {
//         range: 90,
//         damage: 117
//       },
//       {
//         range: 100,
//         damage: 117
//       }
//     ]
//   })
// ]

// export const MOSIN_NAGANT_AVTOMAT: Weapon = new Weapon({
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