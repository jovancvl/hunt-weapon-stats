import { Weapon } from "../arsenal/weapon";
import { BERTHIER_1892 } from "./berthier-1892";
import { CROSSBOW } from "./crossbow";
import { DOLCH } from "./dolch";
import { FRONTIER_73C } from "./frontier-73c";
import { HAYMAKER } from "./haymaker";
import { INFANTRY_37L } from "./infantry-73l";
import { KRAG } from "./krag";
import { LEBEL_1886 } from "./lebel-1886";
import { MARATHON } from "./marathon";
import { NEW_ARMY } from "./new-army";
import { RANGER_73 } from "./ranger-73";
import { ROMERO_77 } from "./romero-77";
import { VANDAL_73C } from "./vandal-73c";
import { VETTERLI_71 } from "./vetterli-71";

export const WEAPON_LIST: Weapon[] = [
  FRONTIER_73C,
  VETTERLI_71,
  MARATHON,
  INFANTRY_37L,
  BERTHIER_1892,
  HAYMAKER,
  ROMERO_77,
  DOLCH,
  KRAG,
  LEBEL_1886,
  NEW_ARMY,
  RANGER_73,
  VANDAL_73C,
  CROSSBOW
].sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }

  if (a.name < b.name) {
    return -1
  }

  return 0
})