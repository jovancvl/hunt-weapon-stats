import { Weapon } from "../model/weapon";
import { CARBINE_1865 } from "./1865-carbine"
import { CARBINE_1865_SILENCER } from "./1865-carbine-silencer"
import { BERTHIER_1892 } from "./berthier-1892";
import { BORNHEIM_NO3 } from "./bornheim-no3";
import { BORNHEIM_NO3_MATCH } from "./bornheim-no3-match"
import { BORNHEIM_NO3_SILENCER } from "./bornheim-no3-silencer"
import { CENTENNIAL } from "./centennial"
import { CENTENNIAL_SHORTY } from "./centennial-shorty"
import { CONVERSION } from "./conversion";
import { CROSSBOW } from "./crossbow";
import { DOLCH } from "./dolch";
import { DRILLING } from "./drilling"
import { DRILLING_SHOTGUN } from "./drilling-shotgun"
import { FRONTIER_73C } from "./frontier-73c";
import { FRONTIER_73C_SILENCER } from "./frontier-73c-silencer"
import { HAYMAKER } from "./haymaker";
import { INFANTRY_37L } from "./infantry-73l";
import { KRAG } from "./krag";
import { LEBEL_1886 } from "./lebel-1886";
import { LEMAT } from "./lemat";
import { LEMAT_CARBINE } from "./lemat-carbine"
import { LEMAT_CARBINE_SHOTGUN } from "./lemat-carbine-shotgun"
import { LEMAT_SHOTGUN } from "./lemat-shotgun";
import { MARATHON } from "./marathon";
import { MAYNARD_SNIPER } from "./maynard-sniper"
import { MAYNARD_SNIPER_SILENCER } from "./maynard-sniper-silencer"
import { NAGANT_M1895 } from "./nagant-m1895"
import { NAGANT_M1895_PRECISION } from "./nagant-m1895-precision"
import { NAGANT_M1895_SILENCER } from "./nagant-m1895-silencer"
import { NEW_ARMY } from "./new-army";
import { OFFICER } from "./officer"
import { OFFICER_CARBINE } from "./officer-carbine"
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
  CROSSBOW,
  BORNHEIM_NO3,
  CONVERSION,
  LEMAT,
  LEMAT_SHOTGUN,
  FRONTIER_73C_SILENCER,
  BORNHEIM_NO3_MATCH,
  BORNHEIM_NO3_SILENCER,
  LEMAT_CARBINE,
  LEMAT_CARBINE_SHOTGUN,
  NAGANT_M1895,
  NAGANT_M1895_PRECISION,
  NAGANT_M1895_SILENCER,
  OFFICER,
  OFFICER_CARBINE,
  CARBINE_1865,
  CARBINE_1865_SILENCER,
  CENTENNIAL,
  CENTENNIAL_SHORTY,
  DRILLING,
  DRILLING_SHOTGUN,
  MAYNARD_SNIPER,
  MAYNARD_SNIPER_SILENCER
].sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }

  if (a.name < b.name) {
    return -1
  }

  return 0
})

export const WEAPON_MAP: Map<string, Weapon> = new Map(WEAPON_LIST.map(w => [w.name, w]))