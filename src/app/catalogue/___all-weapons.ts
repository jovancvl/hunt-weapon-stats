import { Weapon } from "../arsenal/weapon";
import { BERTHIER_1892 } from "./berthier-1892";
import { DOLCH } from "./dolch";
import { FRONTIER_73C } from "./frontier-73c";
import { HAYMAKER } from "./haymaker";
import { INFANTRY_37L } from "./infantry-73l";
import { MARATHON } from "./marathon";
import { ROMERO_77 } from "./romero-77";
import { VETTERLI_71 } from "./vetterli-71";

export const WEAPON_LIST: Weapon[] = [
    FRONTIER_73C,
    VETTERLI_71,
    MARATHON,
    INFANTRY_37L,
    BERTHIER_1892,
    HAYMAKER,
    ROMERO_77,
    DOLCH
].sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }

    if (a.name < b.name) {
        return -1
    }

    return 0
})