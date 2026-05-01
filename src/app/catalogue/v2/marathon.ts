import { CompactAmmo, CompactFmjAmmo, CompactHighVelocityAmmo, CompactIncendiaryAmmo, CompactPoisonAmmo } from "../../model/v2/ammo-v2";
import { Weapon } from "../../model/v2/weapon";
import { ActionType } from "../../model/weapon";

const BASE_DAMAGE = 113;
const DROP_RANGE = 140;
const SPREAD = 15;
const VERTICAL_RECOIL = 7;
const MUZZLE_VELOCITY = 430;
const AMMO_RESERVE = 24;

export const MARATHON: Weapon = new Weapon({
  name: "Marathon",
  cost: 68,
  size: 3,
  action: ActionType.PUMP_ACTION,

  sway: 77,
  rateOfFire: 31,
  cycleTime: 1,
  reloadTime: 19.2,
  magazine: 15,
  hasExtraBullet: true,

  meleeDamage: 27,
  staminaConsumption: 12,
  heavyMeleeDamage: 54,
  heavyStaminaConsumption: 25,

  image: "https://huntshowdown.wiki.gg/images/Weapon_Marathon.png",

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
      verticalRecoil: 9,
      muzzleVelocity: 360,
      ammoReserve: AMMO_RESERVE,
    }),
    new CompactHighVelocityAmmo({
      baseDamage: 107,
      dropRange: 170,
      spread: SPREAD,
      verticalRecoil: 9,
      muzzleVelocity: 555,
      ammoReserve: 16,
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
    })
  ]
});