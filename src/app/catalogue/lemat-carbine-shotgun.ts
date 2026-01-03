// import { AmmoInfo } from "../model/ammo-info"
// import { AmmoStats } from "../model/ammo-stats"
// import { DamageBreakpoint } from "../model/damage"
// import { ActionType, Weapon } from "../model/weapon"

// const BASE_DAMAGE = 150
// const OPTIMAL_RANGE = 10
// const DROP_RANGE = 25
// const SPREAD = 35
// const VERTICAL_RECOIL = 15
// const MUZZLE_VELOCITY = 425
// const AMMO_RESERVE = 18

// const NAME = "LeMat Carbine Shotgun"
// const COST = 115
// const SIZE = 3
// const ACTION = ActionType.SINGLE_SHOT
// const SWAY = 77
// const RATE_OF_FIRE = 10
// const CYCLE_TIME = 6.3
// const RELOAD_TIME = 5
// const MAGAZINE = 1
// const HAS_EXTRA_BULLET = false
// const MELEE_DAMAGE = 27
// const STAMINA_CONSUMPTION = 15
// const HEAVY_MELEE_DAMAGE = 54
// const HEAVY_STAMINA_CONSUMPTION = 25
// const IMAGE = "https://huntshowdown.wiki.gg/images/Weapon_LeMat_Carbine.png"
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
//     info: AmmoInfo.BUCKSHOT,
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
//     info: AmmoInfo.SHELL_DRAGONBREATH,
//     scarce: false,

//     // baseDamage: BASE_DAMAGE - 100,
//     // optimalRange: OPTIMAL_RANGE - 6,
//     dropRange: DROP_RANGE,
//     spread: SPREAD + 90,
//     verticalRecoil: VERTICAL_RECOIL,
//     muzzleVelocity: MUZZLE_VELOCITY - 325,
//     ammoReserve: AMMO_RESERVE,
//     damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
//   }),
//   new AmmoStats({
//     info: AmmoInfo.SHELL_SLUG,
//     scarce: false,

//     // baseDamage: BASE_DAMAGE + 15,
//     // optimalRange: OPTIMAL_RANGE + 2,
//     dropRange: DROP_RANGE,
//     spread: SPREAD + 60,
//     verticalRecoil: VERTICAL_RECOIL,
//     muzzleVelocity: MUZZLE_VELOCITY,
//     ammoReserve: AMMO_RESERVE - 1,
//     damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
//   }),
//   new AmmoStats({
//     info: AmmoInfo.SHELL_STARSHELL,
//     scarce: false,

//     // baseDamage: 1,
//     // optimalRange: 1,
//     dropRange: DROP_RANGE,
//     spread: SPREAD + 15,
//     verticalRecoil: VERTICAL_RECOIL,
//     muzzleVelocity: MUZZLE_VELOCITY - 350,
//     ammoReserve: AMMO_RESERVE,
//     damageBreakpoints: BASE_AMMO_DAMAGE_BREAKPOINTS
//   }),
// ]

// export const LEMAT_CARBINE_SHOTGUN: Weapon = new Weapon({
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