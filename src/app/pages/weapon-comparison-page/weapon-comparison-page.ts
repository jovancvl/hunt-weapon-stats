import { Component, computed, inject, signal } from '@angular/core';
import { FRONTIER_73C } from '../../catalogue/frontier-73c';
import { Weapon } from '../../model/weapon';
import { BERTHIER_1892 } from '../../catalogue/berthier-1892';
import { Dialog } from '@angular/cdk/dialog';
import { SelectWeaponDialogComponent } from './select-weapon-dialog-component/select-weapon-dialog-component';
import { ChartComponent } from "../../components/chart-component/chart-component";
import { StatComparisonTableComponent } from "../../components/stat-comparison-table-component/stat-comparison-table-component";
import { WeaponInfoCardComponent } from "../../components/weapon-info-card/weapon-info-card.component";
import { HunterBodyComponent } from "../../components/hunter-body-component/hunter-body-component";
import { SelectWeaponComponent } from "../../components/select-weapon-component/select-weapon-component";
import { UtilService } from '../../services/util.service';
import { util } from 'echarts';

@Component({
  selector: 'hunt-weapon-comparison-page',
  imports: [ChartComponent, StatComparisonTableComponent, WeaponInfoCardComponent, HunterBodyComponent, SelectWeaponComponent],
  templateUrl: './weapon-comparison-page.html',
  styleUrl: './weapon-comparison-page.scss',
})
export class WeaponComparisonPage {
  dialog = inject(Dialog);
  utilService = inject(UtilService)
  leftWeapon = signal<Weapon>(Object.assign({ ...FRONTIER_73C }));
  rightWeapon = signal<Weapon>(Object.assign({ ...Weapon.EMPTY }));
  range = signal(10);
  isWeaponSelectorOpen = signal(true);
  weaponSelecting = signal<"left" | "right">("right");

  isMobile = this.utilService.isSmallScreen

  rangeSelected(r: number) {
    this.range.set(r);
  }

  openWeaponSelection(side: "left" | "right") {
    if (this.weaponSelecting() === side && this.isWeaponSelectorOpen()) {
      this.isWeaponSelectorOpen.set(false);
    } else {
      this.isWeaponSelectorOpen.set(true);
    }
    this.weaponSelecting.set(side);
  }

  weaponSelected(w: Weapon) {
    if (this.weaponSelecting() === 'left') {
      this.leftWeapon.set(w);
    } else {
      this.rightWeapon.set(w);
    }
  }

  setComparisonWeapon(w: Weapon) {
    this.weaponSelected(w);

    this.isWeaponSelectorOpen.set(false);
  }
}
