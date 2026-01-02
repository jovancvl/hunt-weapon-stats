import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { WeaponInfoComponent } from "../../components/weapon-info-component/weapon-info-component";
import { SelectWeaponComponent } from "../../components/select-weapon-component/select-weapon-component";
import { FRONTIER_73C } from '../../catalogue/frontier-73c';
import { Weapon } from '../../model/weapon';

@Component({
  selector: 'hunt-weapon-select-page',
  imports: [WeaponInfoComponent, SelectWeaponComponent],
  templateUrl: './weapon-select-page.html',
  styleUrl: './weapon-select-page.scss'
})
export class WeaponSelectPage {
  router = inject(Router)
  weapon = FRONTIER_73C

  onHover(w: Weapon) {
    this.weapon = w
  }

  onSelect(w: Weapon) {
    this.router.navigate([w.name])
  }
}
