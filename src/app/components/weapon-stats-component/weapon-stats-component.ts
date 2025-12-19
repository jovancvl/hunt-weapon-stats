import { Component, input } from '@angular/core';
import { AmmoStats } from '../../arsenal/ammo';
import { Weapon } from '../../arsenal/weapon';
import { ComparisonTableComponent } from '../comparison-table-component/comparison-table-component';

@Component({
  selector: 'hunt-weapon-stats-component',
  imports: [ComparisonTableComponent],
  templateUrl: './weapon-stats-component.html',
  styleUrl: './weapon-stats-component.scss',
})
export class WeaponStatsComponent {
  weapon = input.required<Weapon>();

  activateAmmo(ammo: AmmoStats) {
      this.weapon().activeAmmo = ammo
    }
}
