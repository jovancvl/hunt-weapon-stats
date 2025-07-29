import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar-component/nav-bar-component";
import { RifleStatsComponent } from "../../components/rifle-stats-component/rifle-stats-component";
import { WeaponListComponent } from "../../components/weapon-list-component/weapon-list-component";
import { FRONTIER_73C } from '../../arsenal/frontier-family';
import { Weapon } from '../../arsenal/weapon';

@Component({
  selector: 'hunt-weapon-stats-and-list-page',
  imports: [NavBarComponent, RifleStatsComponent, WeaponListComponent],
  templateUrl: './weapon-stats-and-list-page.html',
  styleUrl: './weapon-stats-and-list-page.scss'
})
export class WeaponStatsAndListPage {
  weapon: Weapon = FRONTIER_73C
  isWeaponSelectOpen: boolean = true

  showWeaponStats(w: Weapon) {
    this.weapon = w
    this.isWeaponSelectOpen = false
    // console.log(w)
  }

  showWeaponSelect() {
    this.isWeaponSelectOpen = true
  }
}
