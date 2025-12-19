import { Component, input, OnInit } from '@angular/core';
import { Weapon } from '../../arsenal/weapon';
import { ComparisonTableComponent } from "../comparison-table-component/comparison-table-component";
import { AmmoStats } from '../../arsenal/ammo';

@Component({
  selector: 'hunt-rifle-stats-component',
  imports: [ComparisonTableComponent],
  templateUrl: './rifle-stats-component.html',
  styleUrl: './rifle-stats-component.scss'
})
export class RifleStatsComponent implements OnInit{
  rifle = input.required<Weapon>();
  // copy = Weapon.EMPTY

  ngOnInit(): void {
  }

  activateAmmo(ammo: AmmoStats) {
    this.rifle().activeAmmo = ammo
  }
}
