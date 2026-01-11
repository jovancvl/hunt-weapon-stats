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
import { DOLCH } from "./dolch";
import { DRILLING } from "./drilling"
import { DRILLING_SHORTY } from "./drilling-shorty"
import { FRONTIER_73C } from "./frontier-73c";
import { FRONTIER_73C_SILENCER } from "./frontier-73c-silencer"
import { HAYMAKER } from "./haymaker";
import { INFANTRY_37L } from "./infantry-73l";
import { KRAG } from "./krag";
import { LEBEL_1886 } from "./lebel-1886";
import { LEMAT } from "./lemat";
import { LEMAT_CARBINE } from "./lemat-carbine"
import { MAKO } from "./mako-1895"
import { MARATHON } from "./marathon";
import { MARTINI_HENRY } from "./martini-henry"
import { MAYNARD_SNIPER } from "./maynard-sniper"
import { MAYNARD_SNIPER_SILENCER } from "./maynard-sniper-silencer"
import { MOSIN_NAGANT } from "./mosin-nagant"
import { MOSIN_OBREZ } from "./mosin-obrez"
import { MOSIN_OBREZ_MATCH } from "./mosin-obrez-match"
import { NAGANT_M1895 } from "./nagant-m1895"
import { NAGANT_M1895_SILENCER } from "./nagant-m1895-silencer"
import { NEW_ARMY } from "./new-army";
import { OFFICER } from "./officer"
import { OFFICER_CARBINE } from "./officer-carbine"
import { PAX } from "./pax"
import { PAX_TRUESHOT } from "./pax-trueshot"
import { RANGER_73 } from "./ranger-73";
import { SCOTTFIELD } from "./scottfield"
import { SCOTTFIELD_SPITFIRE } from "./scottfield-spitfire"
import { SPARKS } from "./sparks"
import { SPARKS_PISTOL } from "./sparks-pistol"
import { SPARKS_PISTOL_SILENCER } from "./sparks-pistol-silencer"
import { SPARKS_SILENCER } from "./sparks-silencer"
import { SPRINGFIELD_1866 } from "./springfield-1866"
import { SPRINGFIELD_1866_SHORTY } from "./springfield-1866-shorty"
import { UPPERCUT } from "./uppercut"
import { VANDAL_73C } from "./vandal-73c";
import { VETTERLI_71 } from "./vetterli-71";
import { VETTERLI_71_CYCLONE } from "./vetterli-71-cyclone"
import { VETTERLI_71_SILENCER } from "./vetterli-71-silencer"

export const WEAPON_LIST: Weapon[] = [
  FRONTIER_73C,
  VETTERLI_71,
  MARATHON,
  INFANTRY_37L,
  BERTHIER_1892,
  HAYMAKER,
  DOLCH,
  KRAG,
  LEBEL_1886,
  NEW_ARMY,
  RANGER_73,
  VANDAL_73C,
  BORNHEIM_NO3,
  CONVERSION,
  LEMAT,
  FRONTIER_73C_SILENCER,
  BORNHEIM_NO3_MATCH,
  BORNHEIM_NO3_SILENCER,
  LEMAT_CARBINE,
  NAGANT_M1895,
  NAGANT_M1895_SILENCER,
  OFFICER,
  OFFICER_CARBINE,
  CARBINE_1865,
  CARBINE_1865_SILENCER,
  CENTENNIAL,
  CENTENNIAL_SHORTY,
  DRILLING,
  DRILLING_SHORTY,
  MAYNARD_SNIPER,
  MAYNARD_SNIPER_SILENCER,
  SPRINGFIELD_1866,
  SPRINGFIELD_1866_SHORTY,
  VETTERLI_71_SILENCER,
  VETTERLI_71_CYCLONE,
  PAX,
  PAX_TRUESHOT,
  SCOTTFIELD,
  SCOTTFIELD_SPITFIRE,
  MAKO,
  MARTINI_HENRY,
  MOSIN_OBREZ,
  MOSIN_OBREZ_MATCH,
  MOSIN_NAGANT,
  // below need testing
  SPARKS,
  SPARKS_PISTOL,
  SPARKS_SILENCER,
  SPARKS_PISTOL_SILENCER,
  UPPERCUT,
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