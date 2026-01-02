import { Component, inject } from '@angular/core';
import { SelectWeaponComponent } from "../../components/select-weapon-component/select-weapon-component";
import { HunterBodyComponent } from "../../components/hunter-body-component/hunter-body-component";
import { FRONTIER_73C } from '../../catalogue/frontier-73c'
import { AmmoStats } from '../../model/ammo-stats'
import { Weapon } from '../../model/weapon'
import { StatComparisonTableComponent } from "../../components/stat-comparison-table-component/stat-comparison-table-component";
import { BERTHIER_1892 } from '../../catalogue/berthier-1892'
import { Dialog } from '@angular/cdk/dialog'
import { SelectWeaponDialogComponent } from './select-weapon-dialog-component/select-weapon-dialog-component'

enum LeftOrRight {
  LEFT, 
  RIGHT
}

@Component({
  selector: 'hunt-weapon-comparison-page',
  imports: [HunterBodyComponent, StatComparisonTableComponent],
  templateUrl: './weapon-comparison-page.html',
  styleUrl: './weapon-comparison-page.scss',
})
export class WeaponComparisonPage {
  dialog = inject(Dialog)
  left: Weapon = Object.assign({ ...FRONTIER_73C })
  right: Weapon = Object.assign({ ...BERTHIER_1892 })

  lor = LeftOrRight

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
        this.left = result
      } else {
        this.right = result
      }
    })
  }
}
