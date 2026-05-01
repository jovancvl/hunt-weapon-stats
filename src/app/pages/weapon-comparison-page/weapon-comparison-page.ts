import { Component, inject } from '@angular/core';
import { HunterBodyComponent } from "../../components/hunter-body-component/hunter-body-component";
import { FRONTIER_73C } from '../../catalogue/frontier-73c'
import { StatComparisonTableComponent } from "../../components/stat-comparison-table-component/stat-comparison-table-component";
import { Dialog } from '@angular/cdk/dialog'
import { SelectWeaponDialogComponent } from './select-weapon-dialog-component/select-weapon-dialog-component'
import { Weapon } from '../../model/v2/weapon';
import { Ammo } from '../../model/v2/ammo-v2';

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
  right: Weapon = Object.assign({ ...FRONTIER_73C })

  lor = LeftOrRight

  activateAmmo(leftOrRight: Weapon, ammo: Ammo) {
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
