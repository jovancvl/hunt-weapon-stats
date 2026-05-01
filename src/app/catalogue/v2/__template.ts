import { CompactAmmo } from "../../model/v2/ammo-v2";
import { Weapon } from "../../model/v2/weapon";
import { ActionType } from "../../model/weapon";

const BASE_DAMAGE = 11111111111111;
const DROP_RANGE = 111111111111111;
const SPREAD = 1111111111111111;
const VERTICAL_RECOIL = 1111111111111;
const MUZZLE_VELOCITY = 111111111111;
const AMMO_RESERVE = 11111111111;

export const NAME_HERE: Weapon = new Weapon({
  name: "NAME_HERE",
  cost: 1111111111111111,
  size: 3,
  action: ActionType.LEVER_ACTION,

  sway: 1111111111111,
  rateOfFire: 1111111111111,
  cycleTime: 1111111111111,
  reloadTime: 111111111111111111111,
  magazine: 11111111111111111111,
  hasExtraBullet: true,

  meleeDamage: 111111111111111111111,
  staminaConsumption: 11111111111111111,
  heavyMeleeDamage: 111111111111111,
  heavyStaminaConsumption: 1111111111111,

  image: "IMAGE_HERE",

  availableAmmo: [
    new CompactAmmo({
      baseDamage: BASE_DAMAGE,
      dropRange: DROP_RANGE,
      spread: SPREAD,
      verticalRecoil: VERTICAL_RECOIL,
      muzzleVelocity: MUZZLE_VELOCITY,
      ammoReserve: AMMO_RESERVE,
    }),
  ]
});