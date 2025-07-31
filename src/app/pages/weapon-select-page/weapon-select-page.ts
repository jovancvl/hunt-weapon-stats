import { Component, inject } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar-component/nav-bar-component";
import { RifleStatsComponent } from "../../components/rifle-stats-component/rifle-stats-component";
import { FRONTIER_73C } from '../../catalogue/frontier-73c';
import { Weapon } from '../../arsenal/weapon';
import { WeaponListComponent } from '../../components/weapon-list-component/weapon-list-component';
import { Router } from '@angular/router';

@Component({
  selector: 'hunt-weapon-select-page',
  imports: [NavBarComponent, WeaponListComponent, RifleStatsComponent],
  templateUrl: './weapon-select-page.html',
  styleUrl: './weapon-select-page.scss'
})
export class WeaponSelectPage {
  router = inject(Router)
  weapon: Weapon = FRONTIER_73C

  showWeaponStats(w: Weapon) {
    // console.log("New weapon hovered over")
    this.weapon = w
  }

  goToWeapon(w: Weapon) {
    this.router.navigate([w.name])
  }
}
