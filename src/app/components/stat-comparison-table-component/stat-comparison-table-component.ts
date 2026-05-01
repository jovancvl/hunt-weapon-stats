import { Component, input } from '@angular/core';
import { StatBarComponent } from "../stat-bar-component/stat-bar-component";
import { Weapon } from '../../model/weapon';
import { WeaponV2 } from '../../model/v2/weapon-v2';

@Component({
  selector: 'hunt-stat-comparison-table-component',
  imports: [StatBarComponent],
  templateUrl: './stat-comparison-table-component.html',
  styleUrl: './stat-comparison-table-component.scss',
})
export class StatComparisonTableComponent {
  left = input.required<WeaponV2>()
  right = input.required<WeaponV2>()

  readonly RIGHT_STAT_BAR_COLOR = "#e0c528ff"
}
