import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FRONTIER_73C } from '../../catalogue/frontier-73c';
import { AmmoStats } from '../../model/ammo-stats';
import { Weapon } from '../../model/weapon';
import { BERTHIER_1892 } from '../../catalogue/berthier-1892';
import { Dialog } from '@angular/cdk/dialog';
import { SelectWeaponDialogComponent } from './select-weapon-dialog-component/select-weapon-dialog-component';
import { AmmoSelectorComponent } from "./ammo-selector-component/ammo-selector-component";
import { ChartComponent } from "../../components/chart-component/chart-component";
import { StatComparisonTableComponent } from "../../components/stat-comparison-table-component/stat-comparison-table-component";
import { AmmoName } from '../../model/ammo-name';
import { DollarIcon } from "../../components/dollar-icon/dollar-icon";

@Component({
  selector: 'hunt-weapon-comparison-page',
  imports: [AmmoSelectorComponent, ChartComponent, StatComparisonTableComponent, DollarIcon],
  templateUrl: './weapon-comparison-page.html',
  styleUrl: './weapon-comparison-page.scss',
})
export class WeaponComparisonPage {
  dialog = inject(Dialog);
  leftWeapon: Weapon = Object.assign({ ...FRONTIER_73C });
  rightWeapon: Weapon = Object.assign({ ...BERTHIER_1892 });

  isLeftAmmoSelectorOpen = false;
  isRightAmmoSelectorOpen = false;

  ammoTypeSrc(w: Weapon) {
    switch (w.baseAmmo.info.name) {
      case AmmoName.COMPACT:
        return "ammo-icons/ammo_filter-compact.svg";
      case AmmoName.MEDIUM:
        return "ammo-icons/ammo_filter-medium.svg";
      case AmmoName.LONG:
        return "ammo-icons/ammo_filter-long.svg";
      default:
        return "ammo-icons/ammo_filter-special-ammo.svg";
    }
  }

  sizeSrc(w: Weapon) {
    if (w.size > 0 && w.size < 6) {
      return `ammo-icons/ammo_filter-${w.size}-slot.svg`;
    } else {
      return `ammo-icons/ammo_filter-5-slot.svg`;
    }
  }

  openOrCloseAmmoSelector(side: 'left' | 'right') {
    if (side === 'left') {
      this.isRightAmmoSelectorOpen = false;
      this.isLeftAmmoSelectorOpen = !this.isLeftAmmoSelectorOpen;
    } else {
      this.isLeftAmmoSelectorOpen = false;
      this.isRightAmmoSelectorOpen = !this.isRightAmmoSelectorOpen;
    }
  }

  activateAmmo(leftOrRight: Weapon, ammo: AmmoStats) {
    leftOrRight.activeAmmo = ammo;
  }

  openWeaponSelectDialog(side: "left" | "right") {
    const dialogRef = this.dialog.open<Weapon>(SelectWeaponDialogComponent);
    dialogRef.closed.subscribe(result => {
      if (!result) {
        return;
      }
      if (side === "left") {
        this.leftWeapon = result;
      } else {
        this.rightWeapon = result;
      }
    });
  }
}
