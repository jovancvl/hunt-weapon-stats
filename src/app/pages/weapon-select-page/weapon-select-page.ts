import { Component, inject } from '@angular/core';
import { FRONTIER_73C } from '../../catalogue/frontier-73c';
import { Weapon } from '../../arsenal/weapon';
import { WeaponListComponent } from '../../components/weapon-list-component/weapon-list-component';
import { Router } from '@angular/router';
import { RifleCompareComponent } from "../../components/rifle-compare-component/rifle-compare-component";
import { __NAME } from '../../catalogue/__template';

@Component({
  selector: 'hunt-weapon-select-page',
  imports: [WeaponListComponent, RifleCompareComponent],
  templateUrl: './weapon-select-page.html',
  styleUrl: './weapon-select-page.scss'
})
export class WeaponSelectPage {
  router = inject(Router)
  weaponLeft: Weapon = FRONTIER_73C
  weaponLeftSelected = false
  weaponRight: Weapon = __NAME
  weaponRightSelected = false

  showComparison = false

  reset() {
    this.weaponLeft = FRONTIER_73C
    this.weaponLeftSelected = false
    this.weaponRight = __NAME
    this.weaponRightSelected = false
  }

  onWeaponHover(w: Weapon) {
    if (!this.showComparison) {
      this.weaponLeft = w
      return
    } 

    if (!this.weaponLeftSelected) {
      this.weaponLeft = this.weaponLeft === w ? this.weaponLeft : w
    } else if (!this.weaponRightSelected) {
      this.weaponRight = this.weaponRight === w ? this.weaponRight : w
    }
  }

  onWeaponSelect(w: Weapon) {
    if (!this.showComparison) {
      this.router.navigate([w.name])
      return
    }

    if (!this.weaponLeftSelected) {
      this.weaponLeft = w
      this.weaponLeftSelected = true
    } else {
      this.weaponRight = w
      this.weaponRightSelected = true
    }
  }

  onComparisonModeFlipped(checked: boolean) {
    this.reset()
    this.showComparison = checked
  }
}
