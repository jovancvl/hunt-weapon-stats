import { Component, input } from '@angular/core';
import { Weapon } from '../../model/weapon';
import { StatTableComponent } from "../stat-table-component/stat-table-component";
import { AmmoStats } from '../../model/ammo-stats';

@Component({
  selector: 'hunt-weapon-info-component',
  imports: [StatTableComponent],
  templateUrl: './weapon-info-component.html',
  styleUrl: './weapon-info-component.scss',
})
export class WeaponInfoComponent {
  weapon = input.required<Weapon>()
  showCustomAmmo = input<boolean>(false)

  activateAmmo(ammo: AmmoStats) {
    this.weapon().activeAmmo = ammo
  }
}
