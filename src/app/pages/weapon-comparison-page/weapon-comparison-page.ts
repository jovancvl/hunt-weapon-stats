import { Component, inject, signal } from '@angular/core';
import { FRONTIER_73C } from '../../catalogue/frontier-73c';
import { Weapon } from '../../model/weapon';
import { BERTHIER_1892 } from '../../catalogue/berthier-1892';
import { Dialog } from '@angular/cdk/dialog';
import { SelectWeaponDialogComponent } from './select-weapon-dialog-component/select-weapon-dialog-component';
import { ChartComponent } from "../../components/chart-component/chart-component";
import { StatComparisonTableComponent } from "../../components/stat-comparison-table-component/stat-comparison-table-component";
import { WeaponInfoCardComponent } from "../../components/weapon-info-card/weapon-info-card.component";

@Component({
  selector: 'hunt-weapon-comparison-page',
  imports: [ChartComponent, StatComparisonTableComponent, WeaponInfoCardComponent],
  templateUrl: './weapon-comparison-page.html',
  styleUrl: './weapon-comparison-page.scss',
})
export class WeaponComparisonPage {
  dialog = inject(Dialog);
  leftWeapon = signal<Weapon>(Object.assign({ ...FRONTIER_73C }));
  rightWeapon = signal<Weapon>(Object.assign({ ...BERTHIER_1892 }));

  openWeaponSelectDialog(side: "left" | "right") {
    const dialogRef = this.dialog.open<Weapon>(SelectWeaponDialogComponent);
    dialogRef.closed.subscribe(result => {
      if (!result) {
        return;
      }
      if (side === "left") {
        this.leftWeapon.set(result);
      } else {
        this.rightWeapon.set(result);
      }
    });
  }
}
