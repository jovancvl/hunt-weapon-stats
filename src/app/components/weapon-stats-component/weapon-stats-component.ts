import { Component, input, OnInit, signal } from '@angular/core';
import { AmmoStats } from '../../arsenal/ammo';
import { Weapon } from '../../arsenal/weapon';
import { ComparisonTableComponent } from '../comparison-table-component/comparison-table-component';

@Component({
  selector: 'hunt-weapon-stats-component',
  imports: [ComparisonTableComponent],
  templateUrl: './weapon-stats-component.html',
  styleUrl: './weapon-stats-component.scss',
})
export class WeaponStatsComponent implements OnInit {
  weapon = input.required<Weapon>()

  copy = Weapon.EMPTY

  ngOnInit(): void {
    this.copy = Object.assign({ ...this.weapon() })
  }

  activateAmmo(ammo: AmmoStats) {
    this.weapon().activeAmmo = ammo
  }
}
