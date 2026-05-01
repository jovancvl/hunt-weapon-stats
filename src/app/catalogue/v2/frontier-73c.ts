import { CompactAmmo, CompactFmjAmmo, CompactHighVelocityAmmo, CompactIncendiaryAmmo, CompactPoisonAmmo, CompactSubsonicAmmo } from "../../model/v2/ammo-v2";
import { WeaponV2 } from "../../model/v2/weapon-v2";
import { ActionType } from "../../model/weapon";

const BASE_DAMAGE = 110;
const DROP_RANGE = 140;
const SPREAD = 17.5;
const VERTICAL_RECOIL = 5;
const MUZZLE_VELOCITY = 400;
const AMMO_RESERVE = 28

export const FRONTIER_73C: WeaponV2 = new WeaponV2({
  name: "Frontier 73C",
  cost: 41,
  size: 3,
  action: ActionType.LEVER_ACTION,

  availableAmmo: [
    new CompactAmmo({
      baseDamage: BASE_DAMAGE,
      dropRange: DROP_RANGE,
      spread: SPREAD,
      verticalRecoil: VERTICAL_RECOIL,
      muzzleVelocity: MUZZLE_VELOCITY,
      ammoReserve: AMMO_RESERVE,
    }),
    new CompactFmjAmmo({
      baseDamage: BASE_DAMAGE,
      dropRange: 125,
      spread: SPREAD,
      verticalRecoil: 8,
      muzzleVelocity: 330,
      ammoReserve: AMMO_RESERVE,
    }),
    new CompactHighVelocityAmmo({
      baseDamage: 104,
      dropRange: 160,
      spread: SPREAD,
      verticalRecoil: 8,
      muzzleVelocity: 500,
      ammoReserve: 18,
    }),
    new CompactIncendiaryAmmo({
      baseDamage: BASE_DAMAGE,
      dropRange: DROP_RANGE,
      spread: SPREAD,
      verticalRecoil: VERTICAL_RECOIL,
      muzzleVelocity: MUZZLE_VELOCITY,
      ammoReserve: AMMO_RESERVE,
    }),
    new CompactPoisonAmmo({
      baseDamage: BASE_DAMAGE,
      dropRange: DROP_RANGE,
      spread: SPREAD,
      verticalRecoil: VERTICAL_RECOIL,
      muzzleVelocity: MUZZLE_VELOCITY,
      ammoReserve: AMMO_RESERVE,
    }),
    new CompactSubsonicAmmo({
      baseDamage: BASE_DAMAGE,
      dropRange: 110,
      spread: SPREAD,
      verticalRecoil: VERTICAL_RECOIL,
      muzzleVelocity: 263,
      ammoReserve: 34,
    })
  ],

  sway: 77,
  rateOfFire: 29,
  cycleTime: 1.2,
  reloadTime: 10.1,
  magazine: 7,
  hasExtraBullet: true,

  meleeDamage: 27,
  staminaConsumption: 12,
  heavyMeleeDamage: 54,
  heavyStaminaConsumption: 25,

  image: "https://huntshowdown.wiki.gg/images/Weapon_Frontier_73C.png"
})