import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FRONTIER_73C } from '../../catalogue/frontier-73c'
import { AmmoStats } from '../../model/ammo-stats'
import { Weapon } from '../../model/weapon'
import { BERTHIER_1892 } from '../../catalogue/berthier-1892'
import { Dialog } from '@angular/cdk/dialog'
import { SelectWeaponDialogComponent } from './select-weapon-dialog-component/select-weapon-dialog-component'
import { AmmoSelectorComponent } from "./ammo-selector-component/ammo-selector-component";
import { StatBarComponent } from "../../components/stat-bar-component/stat-bar-component";

@Component({
  selector: 'hunt-weapon-comparison-page',
  imports: [AmmoSelectorComponent, StatBarComponent],
  templateUrl: './weapon-comparison-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './weapon-comparison-page.scss',
})
export class WeaponComparisonPage {
  dialog = inject(Dialog)
  leftWeapon: Weapon = Object.assign({ ...FRONTIER_73C })
  rightWeapon: Weapon = Object.assign({ ...BERTHIER_1892 })

  isLeftAmmoSelectorOpen = false
  isRightAmmoSelectorOpen = false

  openOrCloseAmmoSelector(side: 'left' | 'right') {
    if (side === 'left') {
      this.isRightAmmoSelectorOpen = false
      this.isLeftAmmoSelectorOpen = !this.isLeftAmmoSelectorOpen
    } else {
      this.isLeftAmmoSelectorOpen = false
      this.isRightAmmoSelectorOpen = !this.isRightAmmoSelectorOpen
    }
  }

  activateAmmo(leftOrRight: Weapon, ammo: AmmoStats) {
    leftOrRight.activeAmmo = ammo
  }

  openWeaponSelectDialog(side: "left" | "right") {
    const dialogRef = this.dialog.open<Weapon>(SelectWeaponDialogComponent)
    dialogRef.closed.subscribe(result => {
      if (!result) {
        return
      }
      if (side === "left") {
        this.leftWeapon = result
      } else {
        this.rightWeapon = result
      }
    })
  }
}
