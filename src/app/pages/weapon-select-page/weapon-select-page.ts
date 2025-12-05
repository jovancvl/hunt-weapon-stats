import { Component, inject } from '@angular/core';
import { RifleStatsComponent } from "../../components/rifle-stats-component/rifle-stats-component";
import { FRONTIER_73C } from '../../catalogue/frontier-73c';
import { Weapon } from '../../arsenal/weapon';
import { WeaponListComponent } from '../../components/weapon-list-component/weapon-list-component';
import { Router } from '@angular/router';

@Component({
  selector: 'hunt-weapon-select-page',
  imports: [WeaponListComponent, RifleStatsComponent],
  templateUrl: './weapon-select-page.html',
  styleUrl: './weapon-select-page.scss'
})
export class WeaponSelectPage {
  router = inject(Router)
  weapon: Weapon = FRONTIER_73C

  onWeaponHover(w: Weapon) {
    this.weapon = w
  }

  onWeaponSelect(w: Weapon) {
    this.router.navigate([w.name])
  }
}
