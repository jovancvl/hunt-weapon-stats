import { Component } from '@angular/core';
import { WEAPON_LIST } from '../../catalogue/__all-weapons';
import { WeaponFiltersComponent } from "../../components/weapon-filters/weapon-filters.component";
import { Weapon } from '../../model/weapon';
import { AmmoName } from '../../model/ammo-name';
import { DollarIcon } from "../../components/dollar-icon/dollar-icon";
import { AuxStatsComponent } from "../../components/aux-stats/aux-stats.component";

@Component({
  selector: 'hunt-test',
  imports: [
    WeaponFiltersComponent,
    DollarIcon,
    AuxStatsComponent
],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  weapons = [...WEAPON_LIST];

  getAmmoSrc(weapon: Weapon) {
    let src = "ammo-icons/ammo_filter";

    switch (weapon.baseAmmo.info.name) {
      case AmmoName.COMPACT:
        src = `${src}-compact`;
        break;
      case AmmoName.MEDIUM:
        src = `${src}-medium`;
        break;
      case AmmoName.LONG:
        src = `${src}-long`;
        break;
      default:
        src = `${src}-special-ammo`;
    }

    src = `${src}.svg`;
    return src;
  }

  getAmmoLabel(weapon: Weapon) {
    switch (weapon.baseAmmo.info.name) {
      case AmmoName.COMPACT:
        return 'Compact Ammo';
      case AmmoName.MEDIUM:
        return "Medium Ammo";
      case AmmoName.LONG:
        return "Long Ammo";
    }
    return "Special Ammo";
  }
}
