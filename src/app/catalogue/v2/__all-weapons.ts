import { Weapon } from "../../model/v2/weapon";
import { FRONTIER_73C } from "./frontier-73c";
import { MARATHON } from "./marathon";

export const WEAPON_LIST = [
  FRONTIER_73C,
  MARATHON
]

export const WEAPON_MAP: Map<string, Weapon> = new Map(WEAPON_LIST.map(w => [w.name, w]))